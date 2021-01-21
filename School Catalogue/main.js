class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        retrun this._name
    }
    get level(){
        retrun this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    set numberOfStudents(num){
        this._numberOfStudents = num
    }
    quickFacts(){

    }
    pickSubstituteTeacher(){

    }
}

class Primary extends School{
    constructor(pickupPolicy){
        this._pickupPolicy = pickupPolicy 
    }
    get pickupPolicy(){
        return this._pickupPolicy 
    } 
}

class Middle extends School{}

class High extends School{
    constructor(sportsTeams){
        this._sportsTeams = sportsTeams 
    }
    get sportsTeams(){
        return this._sportsTeams 
    } 
}

