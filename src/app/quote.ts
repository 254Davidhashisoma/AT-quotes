export class Quote {
    id:number;
    author:string;
    like:number;
    unlike:number;
    user:string;
    day:Date;
    constructor( id:number, author:string, user:string, day:Date){
        this.id = id;
        this.like = 1;
        this.unlike = 0;
        this.day = day;
        this.author=author;
        this.user=user;
    }
}
