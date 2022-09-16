import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generate',
  templateUrl: './password-generate.component.html',
  styleUrls: ['./password-generate.component.scss']
})
export class PasswordGenerateComponent implements OnInit {

  length = 6;
  password = "";
  addLetters = false;
  addNumbers = false;
  addSymbols = false;
  toast = false;
  result = false;

  constructor() { }

  // Author: Joydip Paul 

  ngOnInit(): void {
  }

  onChangeLength(value: string) {
    console.log("Your entered length is: " + value);
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onChangeLetter() {
    this.addLetters = !this.addLetters;
  }
  onChangeNumber() {
    this.addNumbers = !this.addNumbers;
  }
  onChangeSymbol() {
    this.addSymbols = !this.addSymbols;
  }

  handleGenerate() {
    // ---------------------- console
    console.log("button has been triggered");
    console.log("Add Letters: " + this.addLetters);
    console.log("Add Numbers: " + this.addNumbers);
    console.log("Add Symbols: " + this.addSymbols);

    // ---------------------- functionality
    this.result = true;
    const letters = 'abcdefghFRGijklABCmnopqGTYJEWrstuvwxyz';
    const numbers = '123456789';
    const symbols = '@#$*&%!';
    let validChart = ""
    let generatedPassword = '';

    if (this.addLetters) {
      validChart += letters;
    }
    if (this.addNumbers) {
      validChart += numbers;
    }
    if (this.addSymbols) {
      validChart += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChart.length);
      generatedPassword += validChart[index];
    }
    this.password = generatedPassword;
  }

  copyMessage(text: string) {
    navigator.clipboard.writeText(text);
    this.toast = true;
    setTimeout(() => {
      this.toast = false;
    }, 3000);
  }

}
