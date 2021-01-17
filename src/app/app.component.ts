import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app angular';
  isAuth = false;
  lastUpdate = new Date();

  appareils = [
    {
      name: 'Serveur Pegasus',
      status: false
    },
    {
      name: 'Serveur Leo',
      status: true
    },
    {
      name: 'Serveur Dragon',
      status: false
    }
  ]

  constructor()
  {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
}
