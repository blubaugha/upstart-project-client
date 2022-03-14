import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'projects/core-lib/src/lib/models/user.model';
import { UserStatus } from 'projects/core-lib/src/lib/models/user-status.model';

@Component({
  selector: 'upstart-user-status-dialog',
  templateUrl: './user-status-dialog.component.html',
  styleUrls: ['./user-status-dialog.component.scss']
})
export class UserStatusDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userStatus: UserStatus
  ) {
  }

  ngOnInit(): void {

  }

}
