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
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string ='Example of pipe expression';
  showDt: Date = new Date();
}