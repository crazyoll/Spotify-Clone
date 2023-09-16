import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/spotify/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (private loginService: LoginService) {}

  login()
  {
    this.loginService.login();
    console.log("dupa");
  }
}
