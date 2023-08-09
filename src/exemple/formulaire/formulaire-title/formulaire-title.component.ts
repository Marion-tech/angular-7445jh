import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-title',
  templateUrl: './formulaire-title.component.html',
  styleUrls: ['./formulaire-title.component.scss'],
})
export class FormulaireTitleComponent implements OnInit {
  public formControl = new FormControl<string>('');
  @Output() title = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.formControl.valueChanges.subscribe((title: string) => {
      console.log(title);
      this.title.emit(title);
    });
  }
}
