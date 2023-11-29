import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultoriaComponent } from './features/consultoria/consultoria.component';
import { ContactComponent } from './features/contact/contact.component';
import { DevelopmentComponent } from './features/development/development.component';
import { HomeComponent } from './features/home/home.component';
import { MarktingComponent } from './features/markting/markting.component';
import { TermsAndConditionComponent } from './features/terms-and-condition/terms-and-condition.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'consultoria', component: ConsultoriaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'terms-conditions', component: TermsAndConditionComponent},
  {path: 'markting', component: MarktingComponent},
  {path: 'development', component: DevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
