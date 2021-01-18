import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  public appareils = [
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

  constructor() { 
  
  }

  toutAllumer() : void
  {
    for(let appareil of this.appareils)
    {
      appareil.status = true;
    }
  }

  toutEteindre(): void
  {
    for(let appareil of this.appareils)
    {
      appareil.status = false;
    }
  }

  switchOnOne(i: number) : void
  {
    this.appareils[i].status = true;
  }

  switchOffOne(i: number) : void
  {
    this.appareils[i].status = false;
  }
}
