import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface Task {
    title: string;
    checked: boolean;
    check_number?: string;
}

@Component({
    selector: 'lbd-task-list',
    templateUrl: './lbd-task-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdTaskListComponent {
    @Input()
    public title: string;

    @Input()
    public subtitle: string;

    @Input()
    public tasks: Task[];

    @Input()
    public footerIconClass: string;

    @Input()
    public footerText: string;

    @Input()
    public withHr: boolean;

    constructor() { }
}
