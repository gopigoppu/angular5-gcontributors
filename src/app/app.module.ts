import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApiService } from './shared/services/api.service';
import { PageService } from './shared/services/page.service';

import { AuthGithubService } from './shared/auth/auth-github.service';
import { CallbackComponent } from './components/callback/callback.component';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    HeaderComponent,
    ContributorsComponent,
    PageNotFoundComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [
    ApiService,
    PageService,
    AuthGithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
