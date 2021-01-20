class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    getAverageRating(){
        return (this._ratings.reduce((acc, curr) => acc+curr)) / this._ratings.length;
    }
    toggleCheckOutStatus(status){
        this._isCheckedOut = status;
    }
    addRating(rate){
        this.ratings.push(rate);
    }
}

class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

class CD extends Media{
    constructor(artist, title, songs){
        super(title);
        this._artist  = artist;
        this._songs = songs;
    }
    get director(){
        return this._director;
    }
    get songs(){
        return this._songs;
    }
}
 const baba = new Book('azdin', 'regular', 20);
 baba.toggleCheckOutStatus(true);
 baba.addRating(9);
 baba.addRating(7);
 baba.addRating(8);
 const av = baba.getAverageRating();
 
 const tosan = new Movie('fath', 'kill him', 60);
 tosan.toggleCheckOutStatus(true);
 tosan.addRating(5);
 tosan.addRating(6);
 tosan.addRating(4);
 const an = tosan.getAverageRating();
 
 const kasan = new CD('foth', 'kill her', ['dima raja', 'dima widad', 'dima ore']);
 kasan.toggleCheckOutStatus(true);
 kasan.addRating(1);
 kasan.addRating(3);
 kasan.addRating(4);
 const ar = kasan.getAverageRating();
  
 const song = kasan.songs;
 jhvuh