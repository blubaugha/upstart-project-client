import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upstart-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input()
  src = '';

  constructor() { }

  ngOnInit(): void {
  }

}
