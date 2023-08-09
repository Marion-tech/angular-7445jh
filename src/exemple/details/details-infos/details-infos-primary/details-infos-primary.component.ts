import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-infos-primary',
  templateUrl: './details-infos-primary.component.html',
  styleUrls: ['./details-infos-primary.component.scss'],
})
export class DetailsInfosPrimaryComponent implements OnInit {
  @Input() desc: string;
  constructor() {}

  ngOnInit() {}
}
