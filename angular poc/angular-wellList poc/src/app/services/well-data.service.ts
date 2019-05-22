import { Injectable } from '@angular/core';
import { WellType } from '../model/well-type.model';

@Injectable({
  providedIn: 'root'
})
export class WellDataService {
  wellData: WellType[] = [
    {
      name: 'TestRLSWell01',
      type: 'rls',
      sourceKey: 10001
    },
    {
      name: 'TestESPWell02',
      type: 'esp',
      sourceKey: 10001
    },
    {
      name: 'TestRLSWell03',
      type: 'rls',
      sourceKey: 10002
    },
    {
      name: 'TestRLSWell01',
      type: 'rls',
      sourceKey: 10001
    },
    {
      name: 'TestESPWell01',
      type: 'esp',
      sourceKey: 10003
    },
    {
      name: 'newrlswell',
      type: 'rls',
      sourceKey: 10001
    }
  ];
  constructor() { }
  getWellData(): WellType[] {
    return this.wellData;
  }

  addWellData(wellObj:WellType){
    this.wellData.push(Object.assign({}, wellObj));
  }
}
