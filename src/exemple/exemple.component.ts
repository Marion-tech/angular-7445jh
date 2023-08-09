import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeaderInfo } from '../shared/model/headerInfo.model';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss'],
})
export class ExempleComponent implements OnInit {
  
  //@Output() title:EventEmitter<string> = new EventEmitter();
  //@Output() subtitle:EventEmitter<string> = new EventEmitter();
  //@Output() desc:EventEmitter<IHeaderInfo> = new EventEmitter();

  //@Output() title = new EventEmitter<string>();
  //@Output() subtitle = new EventEmitter<string>();
  //@Output() desc = new EventEmitter<string>();
 // @Output() desc = new EventEmitter<{prim:string; sec:string;}>();

  public headerInfo: IHeaderInfo = {
    title: 'Je suis un titre attitré',
    subtitle: 'Je suis un sous-titre, mais pas sous les ordres de titre !',
    description: {
      infoPrimaire: 'Je suis une description primaire mais pas secondaire',
      infoSecondaire:
        'Je suis une description secondaire mais pourtant plutôt primaire',
    },
  };
  constructor() {
    
  }

  ngOnInit() {}


  public save(newInfo: IHeaderInfo) {
    console.log(newInfo);
    this.headerInfo = newInfo;
  }
}
