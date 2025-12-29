import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, 
   HostBinding, HostListener } 
from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Child, ] , // 2. Add CommonModule here
  template: `
  <h1>User Information</h1>
  <div class="user-info">
    <div class="info-block">
      <h4>Without JSON</h4>
      <p>{{ userDetails }}</p>
    </div>
    <div class="info-block">
      <h4>With JSON</h4>
      <pre>{{ userDetails | json | uppercase }}</pre>
    </div>
  </div>
  `,
  styleUrl: './app.css'
})
export class App {
  userDetails = {
    name: 'User',
    email:'user@example.com',
    address: {
      street: '23 Main st',
      city: 'las vegas',
      state:'nevada',
      zip: 'N3J7K9',
    },
  };
}