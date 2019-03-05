import { Component } from '@angular/core';
//import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { slideInAnimation } from './animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [slideInAnimation]
})
export class AppComponent {
    title = 'angRoute';
    // state: string;

    prepareOutlet(outlet: any) {
        return outlet &&
            outlet.activatedRouteData && outlet.activatedRouteData['depth'];
    }



    getDepth(outlet: any) {
        return outlet.activatedRouteData['depth'];
    }
}
