import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App{
  nm: string ='';
  em: string ='';
  emailIsValid: boolean = false;
  formSubmitted: boolean = false;
  
  checkEmailValidation(em: string): void{
    if(em.includes('@') && em.includes('.com')){
      this.emailIsValid=true;
    }else{
      this.emailIsValid=false;
    }
  }
  showMessage() {
    if(this.nm && this.emailIsValid){
      this.formSubmitted = true;
    }else{
      this.formSubmitted = false;
    }
  }
} 