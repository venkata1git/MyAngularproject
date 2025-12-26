import { Component, OnChanges, SimpleChanges, Input, DoCheck } from '@angular/core';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements DoCheck{
  @Input() user:any;
  private previousUserName: string | undefined;

  ngDoCheck(): void {
    if(this.user.name != this.previousUserName){
      this.previousUserName = this.user.name;
      console.log('ngDoCheck called - User name changed to: ',
        this.user.name);
    }
  }
}
