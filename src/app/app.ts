import { Component, signal } from '@angular/core';
 // 1. Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface empInterface{
  id:number;
  name:string;
  role:string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  employees = signal<empInterface[]>([
    // {id:1, name:'John Doe', role:'Developer'},
    // {id:2, name:'Jane Smith', role:'Designer'},
    // {id:3, name:'Sam Brown', role:'Manager'}
  ]);
}