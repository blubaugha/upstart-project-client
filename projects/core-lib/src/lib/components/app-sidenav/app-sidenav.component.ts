import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserFeaturesService } from '../../services/user-features.service';
import { FeatureSet } from '../../models/feature-set.model';

@Component({
  selector: 'upstart-app-sidenav',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss']
})
export class AppSidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  featureSet$: Observable<FeatureSet> = this.userFeaturesService.getFeatureSet();

  constructor(private breakpointObserver: BreakpointObserver, private userFeaturesService: UserFeaturesService) {
  }

}
