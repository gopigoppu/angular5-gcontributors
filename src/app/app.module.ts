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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    HeaderComponent,
    ContributorsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
