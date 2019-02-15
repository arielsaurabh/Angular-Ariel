import { NotificationService } from './../../../core/utils/notification.service';
import { EqualValidator } from './../../../core/utils/compair.directive';
import { AuthService } from './../auth.service';
import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'vr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class RegisterComponent implements OnInit {

  passwordMatched: boolean = true;
  registerFormModel: any = {};
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService) {
  }
  ngOnInit() {
  }


  passwordConfirming(c: any): any {
    debugger;
    if (!c['passwordConfirm']) return;
    const pwd = c["password"];
    const cpwd = c["passwordConfirm"];

    if (!pwd || !cpwd) return;
    if (pwd !== cpwd) {
      this.passwordMatched = false;
    }
    else if (pwd === cpwd) {
      this.passwordMatched = true;
    }
  }

  /**SUBMIT OF REGISTRATION */
  register(registerFormModel) {
    this.authService.register(registerFormModel).subscribe((result) => {
      console.log(result);
      if (result === 'Successfully registered!') {
        this.notificationService.showStaticNotification(result, 'success', 'success');
        this.router.navigate(['/auth/login']);
      }
      else if (result === 'Email alreay exist, please try with another email!') {
        this.notificationService.showStaticNotification(result, 'Error', 'Error');
      }
      else {
        this.notificationService.showStaticNotification(result, 'Error', 'Error');
      }

    },
      error => {
        this.notificationService.showStaticNotification((JSON.parse(error._body)).errors.email, 'Error', 'Error');
      });
  }
  /** */


}
