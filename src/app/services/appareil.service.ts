import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';
@Injectable({
  providedIn: 'root'
})

export class AppareilService {
  appareilsSubject = new Subject<any[]>();
  private appareils = [
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

  emitAppareilSubject()
  {
    this.appareilsSubject.next(this.appareils.slice());
  }

  toutAllumer() : void
  {
    for(let appareil of this.appareils)
    {
      appareil.status = true;
    }
    this.emitAppareilSubject();
  }

  toutEteindre(): void
  {
    for(let appareil of this.appareils)
    {
      appareil.status = false;
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) : void
  {
    this.appareils[i].status = true;
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) : void
  {
    this.appareils[i].status = false;
    this.emitAppareilSubject();
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

  addAppareil(name: string, status: boolean)
  {
    const appareilObject = {
      id: 0,
      name: '',
      status: false
    };

    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
