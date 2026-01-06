import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, 
   HostBinding, HostListener } 
from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';
import { AppendTextPipe } from './append-text-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Child, AppendTextPipe, RouterLinkWithHref] , // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students
}