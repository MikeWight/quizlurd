import { LanguagechosenService } from './../languagechosen.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private lcs: LanguagechosenService,
  private router: Router) { }

  ngOnInit() {
  }

  goToLanguage(language: string){
      this.lcs.changeLanguage(language);
      this.router.navigateByUrl('/quiztypes');
  }

}
