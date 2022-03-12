import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, takeUntil } from 'rxjs/operators';
import { LoanService } from '../../services/loan.service';
import { NavigationStart, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AbstractBaseComponent } from '../abstract-base/abstract-base.component';

@Component({
  selector: 'upstart-app-sidenav',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss']
})
export class AppSidenavComponent extends AbstractBaseComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userFeaturesService: LoanService,
    private router: Router) {
    super();
  }

  ngAfterViewInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        takeUntil(this.destroyed$)
      ).subscribe(() => this.drawer.close());
  }
}
