import { Component, OnInit } from '@angular/core';
import { User } from 'projects/core-lib/src/lib/models/user.model';
import { AbstractBaseService } from 'projects/core-lib/src/lib/services/abstract-base.service';
import { UserService } from 'projects/core-lib/src/lib/services/user.service';
import { Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  UserStatusDialogComponent
} from 'projects/core-lib/src/lib/components/user-status-dialog/user-status-dialog.component';

@Component({
  selector: 'upstart-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent extends AbstractBaseService implements OnInit {
  public user$!: Observable<User>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {
    super();
    this.listenForEmailQueryParamChange();
  }

  ngOnInit(): void {
  }

  listenForEmailQueryParamChange(): void {
    this.activatedRoute.queryParams
      .pipe(
        filter(params => params.email),
        map(params => params.email),
        takeUntil(this.destroyed$)
      ).subscribe(email => this.updateUserFromEmail(email));
  }

  updateUserFromEmail(email: string): void {
    this.user$ = this.userService.getByEmail(email);
  }

  onSubmit(user: User): void {
    this.userService.save(user)
      .subscribe(user => this.showDialog(user));
  }

  showDialog(user: User): void {
    this.dialog.open(UserStatusDialogComponent, {
      data: {
        message: 'Good Job!',
        user
      }
    });
  }
}
