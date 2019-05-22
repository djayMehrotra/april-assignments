import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WellDataService } from './../services/well-data.service';
import { WellComponent } from '../well/well.component';
import { WellType } from '../model/well-type.model';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  @ViewChild(WellComponent) wellCompRef: WellComponent; // get child reference 
  @ViewChild('srcKey') srckey: ElementRef; // get parent template reference 
  private wellData = [];
  private showWellDataFlag: boolean;
  constructor(private wellDataService: WellDataService,
  private changeDetect: ChangeDetectorRef) { }

  ngOnInit() {
    this.wellData = this.wellDataService.getWellData();
    this.showWellDataFlag = true;
  }

  loadWellForm(data: WellType){
    this.showWellDataFlag = false;
    console.log(data);
    this.changeDetect.detectChanges();
    this.wellCompRef.sourceKey.nativeElement.value = data.sourceKey;
  }

  addWellData(event){
    console.log(event);
    this.showWellDataFlag = true;
    this.wellDataService.addWellData(event);
  }
}
