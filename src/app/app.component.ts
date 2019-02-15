import { Component, ViewContainerRef } from '@angular/core';
import { MediaReplayService } from './core/utils/media-replay.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotificationService } from 'app/core/utils/notification.service';

@Component({
  selector: 'vr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public toastr: ToastsManager,
    public mediaReplay: MediaReplayService,
    public vcRef: ViewContainerRef,
    private notificationService: NotificationService
  ) {
    this.notificationService.setToasterContainerRef(vcRef);
  }
}
