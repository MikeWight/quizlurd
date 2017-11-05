import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { QuiztypesComponent } from './quiztypes/quiztypes.component';
import { HomeComponent } from './home/home.component';
import { LanguagechosenService } from './languagechosen.service';
import { RouterModule, Routes } from '@angular/router';
import { QuizstationComponent } from './quizstation/quizstation.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quiztypes', component: QuiztypesComponent, children: [
    { path: 'quizstation', component: QuizstationComponent }
  ] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    QuiztypesComponent,
    HomeComponent,
    QuizstationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [LanguagechosenService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
