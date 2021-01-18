import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app angular';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
  });

  appareils: any[];
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    this.appareils = new Array();
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(): void
  {
    this.appareilService.toutAllumer();
  }

  onEteindre(): void
  {
    if (confirm("Etes vous sur de vouloir eteindre toutes les serveurs ?")) 
    {
      this.appareilService.toutEteindre();
    }
  }
}
