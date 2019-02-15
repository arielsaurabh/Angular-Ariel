
import { Injectable } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Injectable()
export class NotificationService {
    constructor(private toastr: ToastsManager) {
    }
    showStaticNotification(message: string, title: string, type: string) {
        switch (type.toLowerCase()) {
            case 'success':
                this.toastr.success(message, title);
                break;
            case 'info':
                this.toastr.info(message, title);
                break;
            case 'infowithhtml':
                this.toastr.info(message, title, {
                    enableHTML: true
                });
                break;
            case 'error':
                this.toastr.error(message, title, { toastLife: 2000 });
                break;
            case 'warning':
                this.toastr.warning(message, title);
                break;
            default:
        }
    }

    // showConfirmation(message: string, title: string): any {
    //     return this.modal.confirm()
    //         .size('sm')
    //         .title(title)
    //         .isBlocking(true)
    //         .okBtn('OK')
    //         .cancelBtn('Cancel')
    //         .showClose(false)
    //         .body(message)

    // }

    // showVersionAlert(message: string, title: string): any {
    //     return this.modal.alert()
    //         .size('sm')
    //         .title(title)
    //         .isBlocking(true)
    //         .okBtn('OK')
    //         .showClose(false)
    //         .body(message)
    // }

    setToasterContainerRef(vRef: any) {
        this.toastr.setRootViewContainerRef(vRef);
    }
}
