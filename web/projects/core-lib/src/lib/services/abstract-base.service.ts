import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractBaseService implements OnDestroy {
  protected destroyed$ = new Subject();

  protected constructor() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
