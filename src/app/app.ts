import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, 
   HostBinding, HostListener } 
from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  @ViewChild('colorInput') colorInput!: ElementRef;
  
  @HostBinding('style.backgroundColor') selectedColor: string = 'white';

  // FIX 1: Change this to just ['$event']
  // We stop trying to get .value here to avoid the error
  @HostListener('input', ['$event']) 
  onColorChange(event: any) { 
    
    // FIX 2: We get the value here using 'any' to bypass strict checks
    const color = event.target.value;
    
    this.selectedColor = color;
    console.log("Color changed to:", color);
  }
}