import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { NumerosComponent } from './features/numeros/numeros.component';
import { ConsultoriaComponent } from './features/consultoria/consultoria.component';
import { TermsAndConditionComponent } from './features/terms-and-condition/terms-and-condition.component';
import { DevelopmentComponent } from './features/development/development.component';
import { MarktingComponent } from './features/markting/markting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    NumerosComponent,
    ConsultoriaComponent,
    TermsAndConditionComponent,
    DevelopmentComponent,
    MarktingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
