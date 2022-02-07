import { Component, Input } from "@angular/core";

@Component({
    selector: 'cs-carousel',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css']
})


export class carouselComponent{
    @Input() name:string;
    @Input() img:string;
    @Input() about:string;
    @Input() time:number;
    @Input() rating:number;
    constructor(){
        this.name="";
        this.img="";
        this.about="stuff";
        this.time=0;
        this.rating=0;
    }


}
