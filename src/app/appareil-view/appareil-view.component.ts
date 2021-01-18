import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service'; 
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils: any[];
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    
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
