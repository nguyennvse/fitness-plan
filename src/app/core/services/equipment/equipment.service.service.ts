import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDto } from '../../../model/Equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  url = './assets/equipment.json';
  constructor(private httpClient: HttpClient) { }

  getEquipment(): Observable<EquipmentDto[]> {
    return this.httpClient.get<EquipmentDto[]>(this.url)
  }
}
