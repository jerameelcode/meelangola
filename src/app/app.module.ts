import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
<<<<<<< HEAD
import { NumerosComponent } from './features/numeros/numeros.component';
import { ConsultoriaComponent } from './features/consultoria/consultoria.component';
=======
import { TermsAndConditionComponent } from './features/terms-and-condition/terms-and-condition.component';
import { DevelopmentComponent } from './features/development/development.component';
>>>>>>> 0c96727693725e47868deb6ee301abdc3f286062

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
<<<<<<< HEAD
    NumerosComponent,
    ConsultoriaComponent
=======
    TermsAndConditionComponent,
    DevelopmentComponent
>>>>>>> 0c96727693725e47868deb6ee301abdc3f286062
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
