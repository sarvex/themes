import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent {
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    constructor() {
        this.alerts.push({
            id: 1,
            type: 'info',
            message: 'This is a plain notification!',
            dismissible: false
        }, {
            id: 2,
            type: 'success',
            message: 'This is a notification with close button.',
            dismissible: true
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a notification with close button and icon.',
            icon: 'nc-bell-55',
            dismissible: true
        }, {
            id: 4,
            type: 'danger',
            message: `This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.`,
            icon: 'nc-bell-55',
            dismissible: true
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
    icon?: string;
    dismissible?: boolean;
}
