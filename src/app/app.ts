import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App{
    showDetails={
      name:"John Doe",
      age:30,
      location: 'New York',
    };
    // a:number=10;
    // b:number=20;
    // calc():number{
    //   return this.a + this.b;
    // }
}  