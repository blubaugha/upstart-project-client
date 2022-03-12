import { APP_INITIALIZER, Provider } from '@angular/core';
import { loanRouteLoaderFactory } from '../factories/loan-route-loader.factory';
import { LoanRouteLoaderService } from '../services/loan-route-loader.service';

export const loanRouteLoaderProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: loanRouteLoaderFactory,
  deps: [LoanRouteLoaderService],
  multi: true
};
