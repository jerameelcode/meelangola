import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { ConsultoriaComponent } from './features/consultoria/consultoria.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'consultoria', component: ConsultoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
