import { Router } from '@angular/router';
import { LanguagechosenService } from './../languagechosen.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quiztypes',
  templateUrl: './quiztypes.component.html',
  styleUrls: ['./quiztypes.component.css']
})
export class QuiztypesComponent implements OnInit {
  

  languageChosen: String;

  constructor(
    private router: Router,
    private LanguagechosenService: LanguagechosenService) { }

  ngOnInit() {
    if (
      (this.LanguagechosenService.languageChosen != 'css3') &&
      (this.LanguagechosenService.languageChosen != 'java') &&
      (this.LanguagechosenService.languageChosen != 'html5') &&
      (this.LanguagechosenService.languageChosen != 'node') &&
      (this.LanguagechosenService.languageChosen != 'angular') &&
      (this.LanguagechosenService.languageChosen != 'python')
  ) {
    this.LanguagechosenService.changeLanguage("angular");
  } 
    this.languageChosen = this.LanguagechosenService.languageChosen;
    
  }
  
  startGame(typeChosen: String){
    this.LanguagechosenService.changeType(typeChosen);
    this.router.navigateByUrl('/quiztypes/quizstation');
  }

}
