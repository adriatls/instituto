import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface IContact {
  name: string;
  email: string;
  message: string;
}

type TypedFormGroup<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;

export type ContactFormGroup = TypedFormGroup<IContact>;

export const initializeContactForm = (): ContactFormGroup => {
  return new FormGroup({
    name: new FormControl<string>('', {
      validators: [nonEmptyString(), Validators.required],
      nonNullable: true,
    }),
    email: new FormControl<string>('', {
      validators: [nonEmptyString(), Validators.email, Validators.required],
      nonNullable: true,
    }),
    message: new FormControl<string>('', {
      validators: [nonEmptyString(), Validators.required],
      nonNullable: true,
    }),
  });
};

const nonEmptyString = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value === 'string' && value.trim() !== '') {
      return null;
    }
    return { nonEmptyString: true };
  };
};
