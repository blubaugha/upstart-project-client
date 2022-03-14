import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private dialog: MatDialog,
    private zone: NgZone
  ) {
  }

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }
    this.zone.run(() =>
      this.dialog.open(ErrorDialogComponent, {
        data: {
          message: error?.error.message || 'Undefined client error'
        }
      })
    );

    console.error('Error from global error handler', error);
  }
}
