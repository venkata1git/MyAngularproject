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
  products: { name: string; imageUrl: string } [] =[
    {
      name:'css',
      imageUrl:'css.osed',
    },
    {
      name:'html',
      imageUrl:'html.sdfsf',
    },
    {
      name:'javascript',
      imageUrl:'js.script',
    },
    {
      name:'angular',
      imageUrl:'angular.forum',
    },
    {
      name:'nestjs',
      imageUrl:'assets.ns',
    },
    {
      name:'bun',
      imageUrl:'bunjpg',
    },
    {
      name:'vue',
      imageUrl:'vue.qwerty',
    },
    {
      name:'react',
      imageUrl:'react.oku',
    },
  ];
  pgSize: number =4;
  startIndex: number =0;
  endIndex: number= this.pgSize;

  previousPage(){
    this.startIndex -= this.pgSize;
    this.endIndex -= this.pgSize;
  }
  nextPage(){
    this.startIndex += this.pgSize;
    this.endIndex += this.pgSize;

  }
}