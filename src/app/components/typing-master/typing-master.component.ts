import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-master',
  templateUrl: './typing-master.component.html',
  styleUrls: ['./typing-master.component.scss']
})
export class TypingMasterComponent implements OnInit {
  text = "According to board officials and the police, the question papers were leaked from the Nehal Uddin Pilot Girls' High School centre in Bhurungamari. Police on Wednesday arrested three teachers of the school for their alleged involvement in leaking the question papers.";
  enteredText = "";
  constructor() { }

  ngOnInit(): void {
  }

  typeOnchange(value: string) {
    console.log(value);
    this.enteredText = value;
  }

  compare(singleLetter: string, enteredText: string) {
    if (!enteredText) {
      return "pending";
    }
    if (enteredText === singleLetter) {
      return "success";
    }
    else {
      return "error";
    }
  }

}
