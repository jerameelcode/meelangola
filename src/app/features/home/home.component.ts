import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  wa_message: String = "https://api.whatsapp.com/send/?phone=244926667736&text=Olá, Meel. Gostaria de criar uma conta Netflix.&type=phone_number&app_absent=1";

}
