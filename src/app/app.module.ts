import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { UserService } from '../user-request/userservice';



import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { DateCountPipe } from './date-count.pipe';
import { BolderDirective } from './bolder.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubRepoComponent,
    GithubFormComponent,
    DateCountPipe,
    BolderDirective,
    // UserService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
