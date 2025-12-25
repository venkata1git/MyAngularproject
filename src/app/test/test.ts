import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test implements OnChanges {

  @Input() inputValue: string = '';


  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from the ngOnChanges hook...');
    console.log(changes);
  }
  
  }  
