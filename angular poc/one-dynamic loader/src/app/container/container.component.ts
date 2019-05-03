import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../directive/ad.directive';
import { AddItem } from '../add-item';
import { AdComponent } from './../ad.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() listComp : AddItem[];
  currentAdIndex = 0;
  @ViewChild(AdDirective) adHost: AdDirective;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    //this.getAds();
  }

  ngOnDestroy() {}

  loadComponent(index?) {
    this.currentAdIndex = (arguments.length) ? index : this.currentAdIndex;
    //for first time load index is -1
    let adItem = this.listComp[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  /**
     * This function will get triggered on drop event and will get file obj.
     */
    drop(evt) {
      const index = evt.dataTransfer.getData("index");
      evt.preventDefault();
      evt.stopPropagation();
      this.loadComponent(index);
  }

  /**
     * This function will be triggered on drag event
     */
    allowDrop(evt) {
      evt.preventDefault();
      evt.stopPropagation();
  }
}
