import { Component, OnInit } from '@angular/core';
import { GetUserListService } from './../services/get-user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersData = [];
  toggleFlag = false;
  constructor(private userListService : GetUserListService) { }

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList(){
    this.usersData = this.userListService.getUSerList();
    console.log(this.usersData);
  }
  changeText(){
    this.toggleFlag = true;
  }
}
