import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { FeatureService } from '../../services/feature.service';
import { FeatureSet } from '../../models/feature-set.model';
import { FeatureSetType } from '../../models/feature-set-type.model';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'upstart-app-sidenav',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss']
})
export class AppSidenavComponent implements OnInit {
  @Input()
  featureSetType: FeatureSetType = FeatureSetType.User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  featureSet$!: Observable<FeatureSet | null>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userFeaturesService: FeatureService,
    private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
  }

  ngOnInit(): void {
    this.featureSet$ = this.userFeaturesService.getSetByType(this.featureSetType);
  }
}
