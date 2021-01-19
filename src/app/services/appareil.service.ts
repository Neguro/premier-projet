import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  public appareils = [
    {
      id: 1,
      name: 'Serveur Pegasus',
      status: false
    },
    {
      id: 2,
      name: 'Serveur Leo',
      status: true
    },
    {
      id: 3,
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

  getAppareilById(id: number)
  {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}
