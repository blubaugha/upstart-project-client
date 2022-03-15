import { Injectable, Type } from '@angular/core';
import { LoanService } from './loan.service';
import { Route, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AbstractBaseService } from './abstract-base.service';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Loan } from '../models/loan.model';
import {
  PayOffCreditCardsComponent
} from 'projects/core-lib/src/lib/components/pay-off-credit-cards/pay-off-credit-cards.component';
import {
  ConsolidateDebtComponent
} from 'projects/core-lib/src/lib/components/consolidate-debt/consolidate-debt.component';
import { AutoRefinanceComponent } from 'projects/core-lib/src/lib/components/auto-refinance/auto-refinance.component';
import { OtherLoanComponent } from 'projects/core-lib/src/lib/components/other-loan/other-loan.component';

@Injectable({
  providedIn: 'root'
})
export class LoanRouteLoaderService extends AbstractBaseService {
  loanComponentsByPath = new Map<string, Type<any>>([
    ['pay-off-credit-cards', PayOffCreditCardsComponent],
    ['consolidate-debt', ConsolidateDebtComponent],
    ['auto-refinance', AutoRefinanceComponent],
    ['other-loan', OtherLoanComponent]
  ]);

  constructor(private loanService: LoanService, private router: Router) {
    super();
  }

  load(): Observable<any> {
    return this.getRoutes()
      .pipe(
        tap(loanRoutes => {
          return this.router.resetConfig([
            ...this.router.config,
            ...loanRoutes
          ]);
        }),
        takeUntil(this.destroyed$)
      );
  }

  getRoutes(): Observable<Route[]> {
    return this.loanService.getAll()
      .pipe(
        map(loans => loans.map(loan => this.toRoute(loan))),
        takeUntil(this.destroyed$)
      );
  }

  toRoute(loan: Loan): Route {
    return {
      path: loan.path,
      component: this.loanComponentsByPath.get(loan.path)
    };
  }
}
