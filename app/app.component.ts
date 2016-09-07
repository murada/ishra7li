import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
    <fav-icon></fav-icon>
    `,
    directives:[

        CoursesComponent,
        AuthorComponent,
        FavoriteComponent

    ]
})
export class AppComponent { }