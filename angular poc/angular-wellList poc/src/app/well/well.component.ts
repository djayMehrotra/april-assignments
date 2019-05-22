import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { WellType } from '../model/well-type.model';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  @ViewChild('name') wellName: ElementRef;
  @ViewChild('type') wellType: ElementRef;
  @ViewChild('sourceKey') sourceKey: ElementRef;
  @Output() addWellEvent = new EventEmitter;
  private validationMessage = '';
  constructor() { }

  ngOnInit() {
  }

  addNewData(){
    const wellDataObj = new WellType();
    wellDataObj.name = this.wellName.nativeElement.value;
    wellDataObj.type = this.wellType.nativeElement.value;
    wellDataObj.sourceKey = this.sourceKey.nativeElement.value;
    if(wellDataObj.name && wellDataObj.type){
      this.addWellEvent.emit(wellDataObj);
    } else{
      this.validationMessage = 'Please fill out the necessary detials'
    }
  }
}
