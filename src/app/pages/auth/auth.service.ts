import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
// import 'rxjs/rx';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthService {
    private baseUrl = 'http://localhost:50985/api/';
    constructor(private http: Http, private router: Router) {
    }

    // FOR REGISTRATION
    register(registerFormModel) {
        debugger;
        const data = {
            'Email': registerFormModel.email,
            'Name': registerFormModel.firstname + ' ' + registerFormModel.lastname,
            'Password': registerFormModel.password
        }

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const x = this.http.post(this.baseUrl + 'Accounts/Registration', data, { headers: headers })
            .map(res =>
                res.json()
            );
        return x;
    }

    isLoggedIn(): any {
        debugger
        let isUserLoggedIn = localStorage.getItem('isLoggedIn') == "true" ? true : false;
        if (!isUserLoggedIn) {
            this.router.navigate(['/auth/login']);
        }
        return localStorage.getItem('isLoggedIn') == "true" ? true : false;
    }

    login(loginFormModel) {
        debugger;
        const data = {
            'Email': loginFormModel.email,
            'Password': loginFormModel.password
        }
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
         const x = this.http.post(this.baseUrl + 'Accounts/Login', data, { headers: headers })
            .map(res =>
                res.json()
            );
        return x;
    }
}
