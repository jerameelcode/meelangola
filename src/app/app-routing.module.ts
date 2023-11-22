import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { DevelopmentComponent } from './features/development/development.component';
import { HomeComponent } from './features/home/home.component';
import { ConsultoriaComponent } from './features/consultoria/consultoria.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
<<<<<<< HEAD
  {path: 'contacto', component: ContactComponent},
  {path: 'consultoria', component: ConsultoriaComponent}
=======
  {path: 'contact', component: ContactComponent},
  {path: 'terms-conditions', component: ContactComponent},
  {path: 'dev', component: DevelopmentComponent},
>>>>>>> 0c96727693725e47868deb6ee301abdc3f286062
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
