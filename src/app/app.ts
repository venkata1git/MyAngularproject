import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 3. Set this to true so you can see the first div
  display: boolean = true; 
  
  // 4. Define 'num' so the other checks work
  num: number = 10; 
}