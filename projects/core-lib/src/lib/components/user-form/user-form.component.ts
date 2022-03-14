import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'projects/core-lib/src/lib/services/user.service';
import { User } from 'projects/core-lib/src/lib/models/user.model';

@Component({
  selector: 'upstart-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  @Input()
  public user!: User | null;

  @Output()
  public save = new EventEmitter<User>();

  userForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose(
      [Validators.required, Validators.email]
    )]
  });

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  onSubmit(): void {
    this.save.emit(this.userForm.value);
  }

  updateForm(user: User): void {
    this.userForm.patchValue(user || {});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user) {
      this.updateForm(changes.user.currentValue);
    }
  }
}
