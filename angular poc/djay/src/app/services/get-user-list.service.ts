import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserListService {
  userList = [
    {name: 'Mahesh', age: 25},
    {name: 'Shakti', age: 23},
    {name: 'Krishna', age: 23},
    {name: 'Radha', age: 21}
  ]
  constructor() { }

  getUSerList(){
    return this.userList;
  }
}
