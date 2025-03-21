import { computed } from "@angular/core";
import { ShoppingCartItem } from "../model/shopping-cart.model";
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounce, debounceTime, distinctUntilChanged, Observable, of, pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
type ShoppingCartState = {
    listItem: ShoppingCartItem[];
    isLoading: boolean;
    filter: {query: string, order: 'asc'|'desc'},
    shippingFee: number;
    discount: number;
};

const initialShoppingCartState:ShoppingCartState = {
    listItem: [
        {name:'day khang luc', quantity:1, price:100,imageUrl:'./ao.webp'},
    {name:'ta don', quantity:1, price:200,imageUrl:'./ao.webp'},
    {name:'ao',quantity:1,price:300,imageUrl:'./ao.webp'}
    ],
    isLoading: false,
    filter: {query:'',order: 'asc'},
    shippingFee: 0,
    discount: 1,
}
const fake_api = ():Observable<any> => of(['hehe'])
export const ShoppingCartState = signalStore(
    { providedIn: 'root' },
    withState(initialShoppingCartState),
    withComputed(store => ({
        itemCount: computed(() => store.listItem().map(item => item.quantity).reduce((accu,item) => accu + item,0)),
        // sortItems: computed(() => {
        //     const direction = store.filter().order === 'asc' ? 1 : -1

        //     return store.listItem().sort((a,b) => )
        // })
        totalPrice: computed(() => {
         const totalItemPrice =  store.listItem().map(item => item.quantity * item.price).reduce((accu,curr) => accu + curr, 0) 
         const totalItemPriceDiscount = totalItemPrice * store.discount();
         const totalItemPriceDiscountShippingFee = totalItemPriceDiscount + store.shippingFee();
         console.log({totalItemPrice,totalItemPriceDiscount,totalItemPriceDiscountShippingFee})
         return totalItemPriceDiscountShippingFee
        })
    })),
    withMethods((store) => ({
        updateQuery(query:string): void {
            patchState(store,(state) => ({filter:{...state.filter,query}}))
        },
        updateQuantity(index:number,isIncrease: boolean): void {
            const cloneListitme = store.listItem();
            cloneListitme[index].quantity += isIncrease ? 1 : -1
            patchState(store,{listItem:[...cloneListitme]})
        },
        loadByQuery: rxMethod<string>(
            pipe(
                debounceTime(3000),
                distinctUntilChanged(),
                tap(() => {patchState(store,{isLoading:true})}),
                switchMap((query) => {
                    return fake_api().pipe(
                        tapResponse({   
                            next:(items) => patchState(store,{listItem: items,isLoading:false}),
                            error:(err) => {
                                patchState(store,{isLoading:false}),
                                console.log('errr',err)
                            }

                        })
                    )
                })
            )
        )
    }))
)