class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() { return Math.floor(Math.random() * 10000); }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee{
  constructor(name, insurance)
  {
    super(name);
    this._insurance = insurance;
  }

  get insurance() { return this._insurance; }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

class Media {
  constructor(title)
  {
    this._title = title;
    this._isCheckedOut = false;
    this._reviews = [];
  }

  get title() { return this._title; }
  get isCheckedOut() { return this._isCheckedOut; }
  set isCheckedOut(x) { this._isCheckedOut = x; }
  get reviews() { return this._reviews; }

  getAverageRating() {
    return this._reviews.reduce((partial_sum, a) => partial_sum + a, 0) / this._reviews.length;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating){
    this._reviews.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages)
  {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get pages() { return this._pages; }
  get author() { return this._author; }
}

class Movie extends Media {
  constructor(title, director, runTime)
  {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get runTime() { return this._runTime; }
  get director() { return this.director; }
}

class CD extends Media {
  constructor(title, artist, songs)
  {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {return this._artist; }
  get songs() {return this._songs; }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

class School {
  constructor(name, level, numberOfStudents)
  {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() { return this._name; }
  get level() { return this._level; }
  get numberOfStudents() { return this._numberOfStudents; }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }

  static pickSubstituteTeacher(substituteTeacher)
  {
    const number = Math.floor(Math.random() * (substituteTeacher.length - 1));
    return substituteTeacher[number]
  }

  set numberOfStudents(newNumberOfStudents)
  {
    if (typeof newNumberOfStudents === 'number')
      this._numberOfStudents = newNumberOfStudents;
    else
      console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy)
  {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() { return this._pickupPolicy; }
}

class HighSchool extends School
{
  constructor(name, numberOfStudents, sportsTeams)
  {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    this._sportsTeams.forEach(x => console.log(x));
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
