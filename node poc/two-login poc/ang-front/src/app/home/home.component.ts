import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userData = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userData = JSON.parse(this.authService.getUserData());
    console.log(this.userData);

  }

}
