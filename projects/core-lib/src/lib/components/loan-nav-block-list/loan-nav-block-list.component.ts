import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../../models/loan.model';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'upstart-loan-nav-block-list',
  templateUrl: './loan-nav-block-list.component.html',
  styleUrls: ['./loan-nav-block-list.component.scss']
})
export class LoanNavBlockListComponent {
  loans$: Observable<Loan[]> = this.loanService.getAll();

  constructor(private loanService: LoanService) {
  }
}
