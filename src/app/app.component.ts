import { Component } from '@angular/core';
import {Employee} from './Employee'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = "Wipro";
  chk: boolean = true;

  ChangeName(val: string): void {
    this.name = val;
  }

  toggleCheck() {
    this.chk = !this.chk;
  }


  emp: Employee[] = [
    {
      name: "Nizam"

    },
    {
      name: "Dhiren"
    },
    {
      name: "Devi"

    }

  ]

}
