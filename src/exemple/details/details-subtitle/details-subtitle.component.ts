import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-subtitle',
  templateUrl: './details-subtitle.component.html',
  styleUrls: ['./details-subtitle.component.scss']
})
export class DetailsSubtitleComponent implements OnInit {
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}