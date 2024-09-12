import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-Angular';

  usuario = {login: '', senha: ''};

  public login() {
    console.log("Login: " + this.usuario.login + " senha: " + this.usuario.senha);
  }
}
