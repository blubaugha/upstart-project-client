import { Injectable } from '@angular/core';
import { AbstractBaseService } from './abstract-base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeatureSet } from '../models/feature-set.model';

@Injectable({
  providedIn: 'root'
})
export class UserFeaturesService extends AbstractBaseService {
  private featureSet$ = new BehaviorSubject<FeatureSet>({
    id: '1',
    name: 'Borrow Money',
    description: 'What would like to do?',
    helpDescription: 'Checking your rate won\'t affect your credit score',
    image: 'piggy-bank',
    created: new Date(),
    lastModified: new Date(),
    features: [{
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
    }]
  });

  constructor() {
    super();
  }

  getFeatureSet(): Observable<FeatureSet> {
    return this.featureSet$.asObservable();
  }
}
