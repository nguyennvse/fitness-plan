import { Component, inject, signal } from '@angular/core';
import { EquipmentCardComponent } from '../equipment-card/equipment-card.component';
import { EquipmentService } from '../../core/services/equipment/equipment.service.service';
import { EquipmentDto } from '../../model/Equipment.model';
import { ShoppingCartState } from '../../store/shopping-cart.store';

@Component({
  selector: 'app-equipments',
  imports: [EquipmentCardComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css',
  providers: [EquipmentService],
})
export class EquipmentsComponent {
  // equipments = [
  //   { name: 'day khang luc', price: 100, description: '', imageUrl: '' },
  //   { name: 'ring', price: 200, description: '', imageUrl: '' },
  //   { name: 'ao ta', price: 300, description: '', imageUrl: '' },
  //   { name: 'pallete', price: 400, description: '', imageUrl: '' },
  // ].map((item, i) => ({ ...item, index: i }));
  equipments = signal<EquipmentDto[]>([]);
  readonly store = inject(ShoppingCartState);
  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.equipmentService.getEquipment().subscribe((equipmentList) => {
      console.log('equipmentList', equipmentList);
      this.equipments.set(equipmentList);
    });
  }
}
