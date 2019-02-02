import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {
  }

  open(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
  }
}
