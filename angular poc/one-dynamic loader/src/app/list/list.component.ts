import { Component, OnInit, Input } from '@angular/core';
import { AddItem } from '../add-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponents implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() listComp: AddItem;
  
  drag(ev, index) {
    ev.dataTransfer.setData("index", index);
  }
}
