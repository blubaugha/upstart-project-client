import { Component, OnInit } from '@angular/core';
import { AbstractBaseService } from 'projects/core-lib/src/lib/services/abstract-base.service';

@Component({
  selector: 'upstart-pay-off-credit-cards',
  templateUrl: './pay-off-credit-cards.component.html',
  styleUrls: ['./pay-off-credit-cards.component.scss']
})
export class PayOffCreditCardsComponent extends AbstractBaseService implements OnInit {
  constructor() {
    super();

  }

  ngOnInit(): void {
  }
}
