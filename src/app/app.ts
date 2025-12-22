import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Define the missing interface here
interface empInterface {
  id: number;
  name: string;
  position: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showEmployees: boolean = false;
  employees = signal<empInterface[]>([
    { id: 1, name: 'John Doe', position: 'Admin' },
    { id: 2, name: 'Jane Smith', position: 'HR' },
    { id: 3, name: 'Sam Johnson', position: 'Marketing' },
    { id: 4, name: 'Samuel Joh', position: 'Developer' },
    { id: 5, name: 'Samanta sony', position: 'Marketing' },
  ]);
  toggleEmployees() {
    this.showEmployees = !this.showEmployees;
  }
}