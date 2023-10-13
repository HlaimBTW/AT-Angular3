import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  parcours = ['DSI', 'RSI', 'SEM'];
  parcourHasError = true;
  etudiantModel = new Etudiant(
    'Mohamed',
    'Ben Mohamed',
    'Ali@ali.ali',
    98765432,
    'default',
    'Licence',
    false
  );
  validateParcour(value: string) {
    if (value === 'default') {
      this.parcourHasError = true;
    } else {
      this.parcourHasError = false;
    }
  }
  onSubmit() {
    console.log(this.etudiantModel);
  }
}
