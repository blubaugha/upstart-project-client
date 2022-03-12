import { Injectable } from '@angular/core';
import { AbstractBaseService } from './abstract-base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService extends AbstractBaseService {
  loans$ = new BehaviorSubject<Loan[]>([
    {
      id: '1',
      name: 'Credit Card Consolidation',
      description: 'Pay off credit cards',
      image: 'credit-cards',
      path: 'consolidate-credit-cards',
      created: new Date(),
      lastModified: new Date()
    }, {
      id: '2',
      name: 'Debt Consolidation',
      description: 'Consolidate debt',
      image: 'consolidate-debt',
      path: 'consolidate-debt',
      created: new Date(),
      lastModified: new Date()
    }, {
      id: '3',
      name: 'Auto Refinance',
      description: 'Refinance my car',
      path: 'refinance-auto',
      image: 'auto-refinance',
      created: new Date(),
      lastModified: new Date()
    }, {
      id: '4',
      name: 'Other',
      description: 'Other',
      path: 'other',
      image: 'rocket-ship',
      created: new Date(),
      lastModified: new Date()
    }
  ]);

  constructor() {
    super();
  }

  getAll(): Observable<Loan[]> {
    return this.loans$.asObservable();
  }
}
