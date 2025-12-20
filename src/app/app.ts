import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  inputVal: string = '';
  dynamicVal: string = '';

  show() {
    this.dynamicVal = this.inputVal;
    alert(this.dynamicVal);
  }

}


// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Test } from "./test/test";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet ],//Test
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })



// export class App {
//   counter: number = 0;
//   onKeyDown (event: KeyboardEvent) {
//     if  (event.key === "ArrowUP") {
//         this.counter++;
//     }
//     else if (event.key === "ArrowDown") {
//         this.counter--;
//       }
//     }
//   }


    // isShift(event: any) {
  //   if (event.shiftKey && event.key === 'Y') {
  //   console.log('Shift Key + y Pressed event detected!',event);
  //     }
  
  // onKeyPress (e: any) {
  //   console.log(e.target.value);
  // onFocus() {
  //   console.log('Focus Pressed event detected!');
  // }


  // onSelect() {
  //   console.log('Select event detected!');
  //} 
  // display(msg: string){ 
  //   alert(msg);
  

  // imgSrc: string = '/assets/intervsPB.jpg';

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

