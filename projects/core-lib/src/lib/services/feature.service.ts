import { Injectable } from '@angular/core';
import { AbstractBaseService } from './abstract-base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeatureSet } from '../models/feature-set.model';
import { Feature } from '../models/feature.model';
import { FeatureSetType } from '../models/feature-set-type.model';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureService extends AbstractBaseService {
  private featureList = [
    {
      id: '1',
      setId: '1',
      name: 'Credit Card Consolidation',
      description: 'Pay off credit cards',
      image: 'credit-cards',
      path: 'consolidate-credit-cards',
      created: new Date(),
      lastModified: new Date()
    }, {
      id: '2',
      setId: '1',
      name: 'Debt Consolidation',
      description: 'Consolidate debt',
      image: 'consolidate-debt',
      path: 'consolidate-debt',
      created: new Date(),
      lastModified: new Date()
    }, {
      id: '3',
      setId: '1',
      name: 'Auto Refinance',
      description: 'Refinance my car',
      path: 'refinance-auto',
      image: 'auto-refinance',
      created: new Date(),
      lastModified: new Date()
    }, {
      id: '4',
      setId: '1',
      name: 'Other',
      description: 'Other',
      path: 'other',
      image: 'rocket-ship',
      created: new Date(),
      lastModified: new Date()
    }
  ];

  private featureSetsByType = new Map<FeatureSetType, FeatureSet>([
    [
      FeatureSetType.User, {
      id: '1',
      name: 'Borrow Money',
      type: FeatureSetType.User,
      description: 'What would like to do?',
      helpDescription: 'Checking your rate won\'t affect your credit score',
      image: 'piggy-bank',
      created: new Date(),
      lastModified: new Date()
    }],
    [
      FeatureSetType.Admin,
      {
        id: '2',
        name: 'Borrow Money',
        type: FeatureSetType.Admin,
        description: 'What would like to do?',
        helpDescription: 'Checking your rate won\'t affect your credit score',
        image: 'piggy-bank',
        created: new Date(),
        lastModified: new Date()
      }]
  ]);

  private featureSetsByType$ = new BehaviorSubject<Map<FeatureSetType, FeatureSet>>(this.featureSetsByType);

  constructor() {
    super();
  }

  getSetByType(type: FeatureSetType): Observable<FeatureSet | null> {
    return this.featureSetsByType$
      .pipe(
        map(featureSetMap => featureSetMap.get(type) || null),
        shareReplay()
      );
  }

  getBySetId(setId: string): Observable<Feature[]> {
    const matches = this.featureList
      .filter(feature => feature.setId === setId);

    return new BehaviorSubject(matches).asObservable();
  }
}
