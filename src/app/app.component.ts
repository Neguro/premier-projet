import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { Subscription } from 'rxjs-compat/Subscription';
import 'rxjs-compat/add/observable/interval';
import { AuthService } from './services/auth.service';
// import { values } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app angular';
  isAuth: boolean;
  secondes: number;
  counterSubscription: Subscription;
  
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
  });

  constructor(private authService: AuthService) {
   this.secondes = 0;
   this.isAuth = false;
   this.counterSubscription = new Subscription;
  }
  
  ngOnInit() 
  {
      const counter = Observable.interval(1000);
      this.startObservable(counter);   
  }

  ngOnDestroy()
  {
    this.counterSubscription.unsubscribe();
  }
  
  getAuthState() : Boolean
  {
    return this.authService.isAuth;
  }

  startObservable(obs : Observable<number>) 
  {
    this.counterSubscription = obs.subscribe(
      (value) => {
        if(this.getAuthState())
        {
          this.secondes += 1; 
        }
        else
        {
          this.secondes = 0;
        }
      },
      (error) =>{
        throw new Error ("Un erreur c'est déclancher");
      },
      () => {
        console.log("Observable terminer")
      }
    );
  } 
}
