import { Component, EventEmitter, Output } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { Observable } from 'rxjs';
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'upstart-loan-nav-link-list',
  templateUrl: './loan-nav-link-list.component.html',
  styleUrls: ['./loan-nav-link-list.component.scss']
})
export class LoanNavLinkListComponent {
  @Output()
  navigate = new EventEmitter<Loan>();

  loans$: Observable<Loan[]> = this.loanService.getAll();

  constructor(private loanService: LoanService) {
  }
}
