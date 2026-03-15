import { computed } from '@angular/core';
import { ShoppingCartItem } from '../model/shopping-cart.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import { tapResponse } from '@ngrx/operators';
type ShoppingCartState = {
  listItem: ShoppingCartItem[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
  shippingFee: number;
  discount: number;
};

const initialShoppingCartState: ShoppingCartState = {
  listItem: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
  shippingFee: 0,
  discount: 1,
};
const fake_api = (): Observable<any> => of(['hehe']);
export const ShoppingCartState = signalStore(
  { providedIn: 'root' },
  withState(initialShoppingCartState),
  withComputed((store) => ({
    itemCount: computed(() =>
      store
        .listItem()
        .map((item) => item.quantity)
        .reduce((accu, item) => accu + item, 0),
    ),
    totalPrice: computed(() => {
      const totalItemPrice = store
        .listItem()
        .map((item) => item.quantity * item.price)
        .reduce((accu, curr) => accu + curr, 0);
      const totalItemPriceDiscount = totalItemPrice * store.discount();
      const totalItemPriceDiscountShippingFee =
        totalItemPriceDiscount + store.shippingFee();
      return totalItemPriceDiscountShippingFee;
    }),
  })),
  withMethods((store) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateQuantity(index: number, isIncrease: boolean): void {
      const cloneListitme = store.listItem();
      cloneListitme[index].quantity += isIncrease ? 1 : -1;
      patchState(store, { listItem: [...cloneListitme] });
    },
    addToCart(item: ShoppingCartItem): void {
      const existingItem = store
        .listItem()
        .find((i) => i.name === item.name && i.price === item.price);

      if (existingItem) {
        const cloneListitme = store.listItem();
        const updatedList: ShoppingCartItem[] = cloneListitme.map((i) => {
          if (i.name === item.name && i.price === item.price) {
            i.quantity += 1;
          }
          return i;
        });
        patchState(store, () => ({ listItem: [...updatedList] }));
      } else {
        patchState(store, (state) => ({ listItem: [...state.listItem, item] }));
      }
    },
    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        tap(() => {
          patchState(store, { isLoading: true });
        }),
        switchMap((query) => {
          return fake_api().pipe(
            tapResponse({
              next: (items) =>
                patchState(store, { listItem: items, isLoading: false }),
              error: (err) => {
                (patchState(store, { isLoading: false }),
                  console.log('errr', err));
              },
            }),
          );
        }),
      ),
    ),
  })),
);
