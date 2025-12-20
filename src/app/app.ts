import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from "./test/test";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],//Test
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imgSrc: string = '/assets/intervsPB.jpg';

  // inputValue: string = 'Hello';
  // isDisabled: boolean = false;
  // a=10;
  // b=20;
  // ans=this.a+this.b;//other ops like *,/,- also work
  //  title = 'Greetings,';//change made here for status check
  //  msg = 'to Angular 18 series.';
  //  onemore = 'this is actual:';  
  //  empty = '';
  //  isLoggedIn=false;//ternary operator example
}
