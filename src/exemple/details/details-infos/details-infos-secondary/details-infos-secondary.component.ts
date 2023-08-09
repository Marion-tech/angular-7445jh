import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-infos-secondary',
  templateUrl: './details-infos-secondary.component.html',
  styleUrls: ['./details-infos-secondary.component.scss'],
})
export class DetailsInfosSecondaryComponent implements OnInit {
  @Input() desc:string;
  constructor() {}

  ngOnInit() {}
}
