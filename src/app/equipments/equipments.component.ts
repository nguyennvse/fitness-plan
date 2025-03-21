import { Component } from '@angular/core';
import { EquipmentCardComponent } from '../equipment-card/equipment-card.component';

@Component({
  selector: 'app-equipments',
  imports: [EquipmentCardComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})
export class EquipmentsComponent {
  equipments = [
    {name:'day khang luc',price:100,description: '',imageUrl:''},
    {name:'ring',price:200,description: '',imageUrl:''},
    {name:'ao ta',price:300,description: '',imageUrl:''},
    {name:'pallete',price:400,description: '',imageUrl:''},
  ].map((item,i)=>({...item,index:i}))
constructor(){}


}
