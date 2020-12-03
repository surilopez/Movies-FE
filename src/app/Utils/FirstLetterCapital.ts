import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Key } from 'protractor';


export function FirstLetterCapital(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = <string>control.value;
    if (!value) return null;
    if (value.length === 0) return null;
    var fl = value[0];
    if (fl !== fl.toUpperCase()) {
      return {
        firstLetterCapital: {
          message:'The First Letter must be Capital'
        },
      }
    }
    return null;
  }
}
