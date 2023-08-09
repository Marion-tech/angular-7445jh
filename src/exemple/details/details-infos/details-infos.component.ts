import { Component, Input, OnInit } from '@angular/core';
import { IHeaderInfo } from '../../../shared/model/headerInfo.model';

@Component({
  selector: 'app-details-infos',
  templateUrl: './details-infos.component.html',
  styleUrls: ['./details-infos.component.scss'],
})
export class DetailsInfosComponent implements OnInit {
  @Input() public desc: IHeaderInfo;

  constructor() {}

  ngOnInit() {}
}
