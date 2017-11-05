import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class LanguagechosenService {
  typeChange = new Subject<String>();
  
  languageChosen: String;

  typeChosen: String;

  constructor() { }

  changeLanguage(languageChosen: String){
    this.languageChosen = languageChosen;
  }
  
  changeType(typeChose: String){
    this.typeChosen = typeChose;
    this.typeChange.next(this.typeChosen);
  }

}
