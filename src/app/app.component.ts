import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'prettierprecommittest';
    user = {
        name: 'John Doe',
        age: 30,
    };
    quotes = 'This "example" is single quoted';
}
