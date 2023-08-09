import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-infos-secondary',
  templateUrl: './formulaire-infos-secondary.component.html',
  styleUrls: ['./formulaire-infos-secondary.component.scss'],
})
export class FormulaireInfosSecondaryComponent implements OnInit {
  public formControl = new FormControl<string>('');
  constructor() {}

  ngOnInit() {}
}
