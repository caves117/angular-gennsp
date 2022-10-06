import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
class ContactService {
  contacts: Contact[] = [];
  constructor() {}
}

@Component({
  selector: 'app-root',
  template: ` 
  <div class="form-wrapper"> 
  <form (submit)="onSubmit()"> 
  <div>
  <label for="firstName">First name</label> 
  <input type="text" name="firstName" id="firstName" class="userFirstname" [(ngModel)]='firstName' required> 
  </div> 
  <div> 
  <label for="lastName">Last name</label> 
  <input type="text" name="lastName" id="lastName" class="userLastname"> 
  </div> 
  <div> 
  <label for="phoneNumber">Phone number</label> 
  <input type="tel" name="phoneNumber" id="phoneNumber" class="userPhone"> 
  </div> 
  <div> 
  <div>
  <span>{{firstName}}</span>
  </div>
  <button class="btn btn-primary btn-lg">ADD CONTACT</button>
  </div>
  </form> 
  <div> 
  <div class="informationTable"> 
  <table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone number</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let contact of contactService.contacts">
            <td>{{contact.firstName}}</td>
            <td>{{contact.lastName}}</td>
            <td>{{contact.phoneNumber}}</td>
        </tr>
    </tbody>
</table>
  </div>`,
  styles: [],
})
export class AppComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: number = 0;
  constructor(public contactService: ContactService) {}
  // code goes here
  ngOnInit() {}

  //firstName = new FormControl('', [Validators.required]);
  //lastName = new FormControl('', [Validators.required]);
  //phoneNumber = new FormControl('', [Validators.required]);

  onSubmit() {
    const contact: Contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
    };
    this.contactService.contacts.unshift(contact);
  }

  btnTest() {
    return this.firstName === '' ||
      this.lastName === '' ||
      this.phoneNumber === null
      ? true
      : false;
  }
}

interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}
