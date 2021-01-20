class Media{
    constructor(title){
        this._title = title;
        this._isChechedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }
    get isChechedOut(){
        return this._isChechedOut;
    }
    get rating(){
        return this._rating;
    }
    getAverageRating(){
        return this._ratings.reduce((acc, curr) => acc+curr)
    }
    toggleCheckOutStatus(status){
        this.isCheckedOut = status;
    }
    addRating(rate){
        this.rating.push(rate);
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
    constructor(artist, songs, title){
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

// const baba = new Book('azdin', 'regular', 20)