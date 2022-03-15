import { LoanRouteLoaderService } from '@upstart/core-lib';
import { Observable, Subject } from 'rxjs';

export function loanRouteLoaderFactory(loanRouteLoaderService: LoanRouteLoaderService): () => Observable<any> {
  return () => {
    const loaded$ = new Subject();
    loanRouteLoaderService.load().subscribe(() => loaded$.next());
    return loaded$.asObservable();
  };
}
