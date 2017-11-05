import { LanguagechosenService } from './../languagechosen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizstation',
  templateUrl: './quizstation.component.html',
  styleUrls: ['./quizstation.component.css']
})
export class QuizstationComponent implements OnInit {

  typeChosen: String;

  constructor(private lcs: LanguagechosenService) { }

  ngOnInit() {
    if (this.lcs.typeChosen != 'light' &&
        this.lcs.typeChosen != 'lightning' &&
        this.lcs.typeChosen != 'fire' &&
        this.lcs.typeChosen != 'interview'   
  ) {
    this.lcs.changeType('light');
  }
    this.typeChosen = this.lcs.typeChosen;
  }

}
