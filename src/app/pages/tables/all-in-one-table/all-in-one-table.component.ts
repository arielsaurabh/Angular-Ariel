import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { List } from '../../../core/list/list.interface';
import { Customer } from './customer-create-update/customer.model';
import { User } from './customer-create-update/user.model';
import { ListColumn } from '../../../core/list/list-column.model';
import { ListDataSource } from '../../../core/list/list-datasource';
import { ListDatabase } from '../../../core/list/list-database';
import { componentDestroyed } from '../../../core/utils/component-destroyed';
import { CustomerCreateUpdateComponent } from './customer-create-update/customer-create-update.component';
import { ALL_IN_ONE_TABLE_DEMO_DATA } from './all-in-one-table.demo';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'vr-all-in-one-table',
  templateUrl: './all-in-one-table.component.html',
  styleUrls: ['./all-in-one-table.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class AllInOneTableComponent implements List<User>, OnInit, OnDestroy {

  subject$: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
  data$: Observable<User[]>;
  users: User[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Id', property: 'CustomerId', visible: false, isModelProperty: true },
    { name: 'Name', property: 'Name', visible: true, isModelProperty: true },
    { name: 'Address', property: 'Address', visible: true, isModelProperty: true },
    { name: 'Phone', property: 'MobileNo', visible: true, isModelProperty: true },
    { name: 'Email', property: 'Email', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  resultsLength: number;
  dataSource: ListDataSource<User> | null;
  database: ListDatabase<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private dialog: MatDialog, private userService: UserService) {
  }


  ngOnInit() {
    this.userService.getUser().subscribe(s => {
      this.users = s;
      this.subject$.next(this.users);
      this.data$ = this.subject$.asObservable();

      this.database = new ListDatabase<User>();
      this.data$
        .takeUntil(componentDestroyed(this))
        .filter(Boolean)
        .subscribe((users) => {
          this.users = users;
          this.database.dataChange.next(users);
          this.resultsLength = users.length;
        });

      this.dataSource = new ListDataSource<User>(this.database, this.sort, this.paginator, this.columns);
    });
  }


  createCustomer() {
    this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((user: User) => {
      debugger;
      if (user) {
        if (user.Address && user.Email && user.MobileNo && user.Name) {
          this.userService.addUser(user).subscribe(result => {
            if (result != null) {
              this.users.unshift(new User(JSON.parse(result)));
              this.subject$.next(this.users);
            }
          });
        }
      }
    });
  }

  updateCustomer(user) {
    this.dialog.open(CustomerCreateUpdateComponent, {
      data: user
    }).afterClosed().subscribe((user) => {
      if (user) {
        debugger;
        if (user.Address && user.Email && user.MobileNo && user.Name && user.Flag) {
          this.userService.updateUser(user).subscribe(result => {
            if (result != null) {
              const index = this.users.findIndex((existingCustomer) => existingCustomer.CustomerId === user.CustomerId);
              this.users[index] = new User(user);
              this.subject$.next(this.users);
            }
          });
        }
      }
    });
  }

  deleteCustomer(user) {
    this.userService.deleteUser(user.CustomerId).subscribe(result => {
      if (result != null) {
        this.users.splice(this.users.findIndex((existingCustomer) => existingCustomer.CustomerId === user.CustomerId), 1);
        this.subject$.next(this.users);
      }
    });
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.filter = value;
  }

  ngOnDestroy() {
  }
}
