import {Component} from "angular2/core";


@Component({

        selector: 'fav-icon',
        template: `
        <div >
        <i class="glyphicon"
        [class.glyphicon-star-empty]="!isFav"
        [class.glyphicon-star]="isFav"
        (click)="onClick($event)"
        >
   </i>
   </div>
    `

    }
)

export class FavoriteComponent {

    isFav:boolean = false;

    onClick($event):void {
        console.log(event.target)
        this.isFav = !this.isFav;
    }
}