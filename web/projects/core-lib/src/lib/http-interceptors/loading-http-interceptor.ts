import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { LoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const dialogRef: MatDialogRef<any> = this.dialog.open(LoadingDialogComponent);
    return next.handle(request).pipe(
      finalize(() => {
        dialogRef.close();
      })
    ) as Observable<HttpEvent<any>>;
  }
}
