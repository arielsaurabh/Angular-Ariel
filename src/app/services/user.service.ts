import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from 'app/pages/tables/all-in-one-table/customer-create-update/user.model';
@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:50985/api/';
  // private baseUrl = 'http://localhost:7555/api/';
  // private baseUrl = 'http://localhost:8099/api/';
  // private baseUrl = 'http://arielapi.ddns.net/api/';
  dialogData: any;

  constructor(private http: HttpClient) {
    let userData: User;
  }


  getDialogData() {
    return this.dialogData;
  }

  // GET ALL USER
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'Customers');
  }


  // ADD USER
  addUser(userData: User): Observable<any> {
    const result = this.http.post(this.baseUrl + 'Customers', userData).map(s => JSON.stringify(s));
    return result;
  }

  // DELETE USER
  deleteUser(CustomerId: number): Observable<any> {
    const result = this.http.get(this.baseUrl + 'Customers/DeleteCustomer?id=' + CustomerId).map(s => JSON.stringify(s));
    return result;
  };

  // UPDATE USER
  updateUser(data): Observable<any> {
    const result = this.http.post(this.baseUrl + 'Customers', data).map(s => JSON.stringify(s));
    return result;
  };
}

