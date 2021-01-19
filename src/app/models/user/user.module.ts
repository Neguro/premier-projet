import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class UserModule 
{ 
  public firstName: string;
  public lastName: string;
  public email: string;
  public drinkPreference: string;
  public hobbies: string[];
  pseudo: string;
  password: string;

  constructor(firtsName: string, lastName: string, email: string, drinkPreferences: string, hobbies: string[], pseudo: string, password: string)
  {
    this.firstName = firtsName;
    this.lastName = lastName;
    this.email = email;
    this.drinkPreference = drinkPreferences;
    this.hobbies = hobbies;
    this.pseudo = pseudo;
    this.password = password;
  }
}
