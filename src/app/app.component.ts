import { Component } from '@angular/core';
import { Hobbies } from './models/hobbies';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Information';
  public hobbies = Object.values(Hobbies);
  user: User = {
    name: 'Manohar',
    "age": 20,
    "favoriteColor": "Orrenge",
    "hobby": Hobbies.Hunting,
    "gender": 'Male'
  };
  displayEdit: boolean = false;

  toggleEdit() {
    this.displayEdit = !this.displayEdit;
  }
}
