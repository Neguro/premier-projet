import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void
  {
    this.userForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreferences: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm(): void
  {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['lastName'],
      formValue['firstName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    )
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies(): FormArray 
  {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby()
  {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

  suppHobby(i: number)
  {
    this.getHobbies().removeAt(i);
  }
}
