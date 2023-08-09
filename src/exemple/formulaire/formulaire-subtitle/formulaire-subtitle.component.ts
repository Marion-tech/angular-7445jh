import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-subtitle',
  templateUrl: './formulaire-subtitle.component.html',
  styleUrls: ['./formulaire-subtitle.component.scss'],
})
export class FormulaireSubtitleComponent implements OnInit {
  public formControl = new FormControl<string>('');
  constructor() {}

  ngOnInit() {}
}
