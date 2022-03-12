import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../../models/feature.model';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'upstart-feature-nav-block-list',
  templateUrl: './feature-nav-block-list.component.html',
  styleUrls: ['./feature-nav-block-list.component.scss']
})
export class FeatureNavBlockListComponent implements OnChanges {
  @Input()
  featureSetId!: string;

  features$!: Observable<Feature[]>;

  constructor(private featureService: FeatureService) {
    this.featureSetId = '1';
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.featureSetId) {
      this.refresh();
    }
  }

  refresh(): void {
    this.features$ = this.featureService.getBySetId(this.featureSetId);
  }
}
