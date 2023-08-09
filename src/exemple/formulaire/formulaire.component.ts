import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IHeaderInfo } from '../../shared/model/headerInfo.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  @Output() saveData = new EventEmitter<IHeaderInfo>();
  public newHeaderInfos: IHeaderInfo = {
    title: null,
    subtitle: null,
    description: {
      infoPrimaire: null,
      infoSecondaire: null,
    },
  };
  constructor() {}

  ngOnInit() {}

  public addTitle(titre: string) {
    this.newHeaderInfos.title = titre;
  }

  public save() {
    console.log(this.newHeaderInfos);
    //this.saveData.emit(this.newHeaderInfos);
  }
}
