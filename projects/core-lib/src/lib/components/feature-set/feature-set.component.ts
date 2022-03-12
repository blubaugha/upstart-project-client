import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureSetType } from '../../models/feature-set-type.model';
import { FeatureSet } from '../../models/feature-set.model';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'upstart-feature-set',
  templateUrl: './feature-set.component.html',
  styleUrls: ['./feature-set.component.scss']
})
export class FeatureSetComponent implements OnChanges {
  @Input()
  type!: FeatureSetType;

  featureSet$!: Observable<FeatureSet | null>;

  constructor(private featureService: FeatureService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.refresh();
    }
  }

  refresh(): void {
    this.featureSet$ = this.featureService.getSetByType(this.type);
  }
}
