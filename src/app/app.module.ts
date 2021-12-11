import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 

import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { Home2Component } from './views/home2/home2.component';
import { FormsComponent } from './views/forms/forms.component';

import {FormsModule} from '@angular/forms'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    StartComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    Home2Component,
    FormsComponent, 
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatSidenavModule, 
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatCardModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
