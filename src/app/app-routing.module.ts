import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { DevelopmentComponent } from './features/development/development.component';
import { HomeComponent } from './features/home/home.component';
import { ConsultoriaComponent } from './features/consultoria/consultoria.component';
import { TermsAndConditionComponent } from './features/terms-and-condition/terms-and-condition.component';
import { MarktingComponent } from './features/markting/markting.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'consultoria', component: ConsultoriaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'terms-conditions', component: TermsAndConditionComponent},
<<<<<<< HEAD
  {path: 'dev', component: DevelopmentComponent},
  {path: 'markting', component: MarktingComponent}
=======
  {path: 'development', component: DevelopmentComponent}
>>>>>>> feature/delopment
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
