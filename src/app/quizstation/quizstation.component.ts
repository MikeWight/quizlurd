import { LanguagechosenService } from './../languagechosen.service';
import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-quizstation',
  templateUrl: './quizstation.component.html',
  styleUrls: ['./quizstation.component.css']
})
export class QuizstationComponent implements OnInit {
  sub: Subscription;  
  
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
    this.sub = this.lcs.typeChange.subscribe(
      (newType: String) => {
        console.log(newType);
        this.typeChosen = newType;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
