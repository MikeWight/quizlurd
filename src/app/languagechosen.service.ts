import { Injectable } from '@angular/core';

@Injectable()
export class LanguagechosenService {

  languageChosen: String;

  typeChosen: String;

  constructor() { }

  changeLanguage(languageChosen: String){
    this.languageChosen = languageChosen;
  }
  
  changeType(typeChose: String){
    this.typeChosen = typeChose;
  }

}
