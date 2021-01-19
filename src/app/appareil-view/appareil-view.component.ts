import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { AppareilService } from 'src/app/services/appareil.service'; 
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils: any[];
  appareilSubscription: Subscription;
  isAuth: boolean;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
  });

  constructor(private appareilService: AppareilService, private authService: AuthService) 
  {
    this.appareils = new Array();
    this.isAuth = false;
    this.appareilSubscription = new Subscription();
  }
  
  ngOnInit(): void 
  {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.isAuth = this.authService.isAuth;
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() : void
  {
    this.appareilSubscription.unsubscribe();
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
