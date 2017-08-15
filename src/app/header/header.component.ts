import { Component, OnInit, Input } from  '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input()  menu;
    constructor() {}

    ngOnInit() { }
}
