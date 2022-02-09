export class MockItemModel{
    name:string;
    img:string;
    about:string;
    time:number;
    rating:number;
    constructor( name:string, img:string,about:string, time:number,rating:number){
        this.name=name;
        this.img=img;
        this.about=about;
        this.time=time;
        this.rating=rating;
    }
}