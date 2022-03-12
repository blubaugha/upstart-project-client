import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ''
})
export abstract class AbstractBaseComponent implements OnDestroy {
  destroyed$ = new Subject();

  protected constructor() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
