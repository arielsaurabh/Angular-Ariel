import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { RouteHandlerModule } from './core/route-handler/route-handler.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserService } from 'app/services/user.service';
import { AuthService } from 'app/pages/auth/auth.service';
import { NotificationService } from 'app/core/utils/notification.service';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AuthGuard } from './pages/auth/auth.guard';



@NgModule({
  imports: [
    CommonModule, BrowserModule.withServerTransition({ appId: 'elastic-ui' }),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    ToastModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    AppRoutingModule,
    CoreModule,
    PagesModule,
    RouteHandlerModule
  ],

  providers: [UserService, AuthService, NotificationService, ToastsManager, ToastOptions, AuthGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
