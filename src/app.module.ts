import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailsInfosPrimaryComponent } from './exemple/details/details-infos/details-infos-primary/details-infos-primary.component';
import { DetailsInfosSecondaryComponent } from './exemple/details/details-infos/details-infos-secondary/details-infos-secondary.component';
import { DetailsInfosComponent } from './exemple/details/details-infos/details-infos.component';
import { DetailsSubtitleComponent } from './exemple/details/details-subtitle/details-subtitle.component';
import { DetailsTitleComponent } from './exemple/details/details-title/details-title.component';
import { DetailsComponent } from './exemple/details/details.component';
import { ExempleComponent } from './exemple/exemple.component';
import { FormulaireInfosPrimaryComponent } from './exemple/formulaire/formulaire-infos/formulaire-infos-primary/formulaire-infos-primary.component';
import { FormulaireInfosSecondaryComponent } from './exemple/formulaire/formulaire-infos/formulaire-infos-secondary/formulaire-infos-secondary.component';
import { FormulaireInfosComponent } from './exemple/formulaire/formulaire-infos/formulaire-infos.component';
import { FormulaireSubtitleComponent } from './exemple/formulaire/formulaire-subtitle/formulaire-subtitle.component';
import { FormulaireTitleComponent } from './exemple/formulaire/formulaire-title/formulaire-title.component';
import { FormulaireComponent } from './exemple/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    DetailsComponent,
    FormulaireComponent,
    DetailsTitleComponent,
    DetailsSubtitleComponent,
    DetailsInfosComponent,
    DetailsInfosPrimaryComponent,
    DetailsInfosSecondaryComponent,
    FormulaireTitleComponent,
    FormulaireSubtitleComponent,
    FormulaireInfosComponent,
    FormulaireInfosPrimaryComponent,
    FormulaireInfosSecondaryComponent,
  ],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
