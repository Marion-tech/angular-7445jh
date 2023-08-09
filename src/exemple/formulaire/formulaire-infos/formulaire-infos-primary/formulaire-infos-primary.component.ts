import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-infos-primary',
  templateUrl: './formulaire-infos-primary.component.html',
  styleUrls: ['./formulaire-infos-primary.component.scss'],
})
export class FormulaireInfosPrimaryComponent implements OnInit {
  public formControl = new FormControl<string>('');
  constructor() {}

  ngOnInit() {}
}
