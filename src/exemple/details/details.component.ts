import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeaderInfo } from '../../shared/model/headerInfo.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() infos: IHeaderInfo;

  //@Output() title:EventEmitter<string> = new EventEmitter();
  //@Output() subtitle:EventEmitter<string> = new EventEmitter();
  //@Output() desc:EventEmitter<{prim:string; sec:string;}> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /* public emitOut(){
    this.title.emit();
    this.subtitle.emit();
    this.desc.emit();
  }*/
}
