import { NotificationService } from './../../../core/utils/notification.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class LoginComponent implements OnInit {

  loginFormModel: any = {};
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {

  }

  ngOnInit() {
   // localStorage.setItem('logedInUserName', '');
  }

  /**SUBMIT OF LOGIN */
  login(loginFormModel) {
    this.authService.login(loginFormModel).subscribe((result) => {
      if (result.Message === 'Successfully login!') {
        this.notificationService.showStaticNotification(result.Message, 'success', 'success');
        console.log(this.loginFormModel);
        localStorage.setItem('logedInUserEmail', result.Email);
        localStorage.setItem('logedInUserName', result.Name);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/tables/all-in-one-table']);
      }
      else if (result.Message === 'Please check your credentials, Not correct!') {
        this.notificationService.showStaticNotification(result.Message, 'Error', 'Error');
      }
      else {
        this.notificationService.showStaticNotification(result.Message, 'Error', 'Error');
      }
    },
      error => {
        this.notificationService.showStaticNotification((JSON.parse(error._body)).error, "Error", "Error");
      });
  }
  /** */

}
