import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../reducers/index';
import { Customer } from './customer.model';

@Component({
  selector: 'vr-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.scss']
})
export class CustomerCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor( @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Customer;
    }

    this.form = this.fb.group({
      Name: [this.defaults.Name || '', ],
      Email: [this.defaults.Email || ''],
      Address: this.defaults.Address || '',
      MobileNo: this.defaults.MobileNo || '',
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const user = this.form.value;
    user.Flag = true;
    this.dialogRef.close(user);
  }

  updateCustomer() {
    const user = this.form.value;
    user.Flag = true;
    user.CustomerId = this.defaults.CustomerId;
    this.dialogRef.close(user);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  onNoClick(): void {
    const user = this.form.value;
    user.CustomerId = this.defaults.CustomerId;
    user.Flag = false;
    this.dialogRef.close(user);
  }
}
