import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FeatureService } from '../../services/feature.service';
import { Observable } from 'rxjs';
import { Feature } from '../../models/feature.model';

@Component({
  selector: 'upstart-feature-nav-link-list',
  templateUrl: './feature-nav-link-list.component.html',
  styleUrls: ['./feature-nav-link-list.component.scss']
})
export class FeatureNavLinkListComponent implements OnChanges {
  @Input()
  featureSetId!: string;

  @Output()
  navigate = new EventEmitter<Feature>();

  features$!: Observable<Feature[]>;

  constructor(private featureService: FeatureService) {
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
