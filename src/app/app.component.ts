import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText : string = "No one can outrun their destiny";

  testText : string = "";

  result : string = "";

  checkResult(event : Event){
    this.testText = (event.target as HTMLInputElement).value;
    if(this.randomText == this.testText){
      this.result = "correct";
    }else{
      this.result = "incorrect";
    }
  }
}
