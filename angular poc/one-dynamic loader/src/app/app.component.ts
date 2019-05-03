import { Component, OnInit } from '@angular/core';
import { AddItem } from './add-item';
import { LoadComponentsService } from './services/load-components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listComp: AddItem[];

  constructor(private loadComponentService: LoadComponentsService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listComp = this.loadComponentService.getComponentLists();
  }
}
