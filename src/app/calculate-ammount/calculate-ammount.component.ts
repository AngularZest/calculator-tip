import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import e from 'express';
import { MaxDigitsDirective } from '../directve/max.directive';
declare var html2pdf: any;

@Component({
  selector: 'app-calculate-ammount',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './calculate-ammount.component.html',
  styleUrl: './calculate-ammount.component.scss',

  
})

export class CalculateAmmountComponent {
  ammount!:number
  showfields = false
  form!: NgForm;
  itemPrice: any
  price: any
  quantity: any
  quantityAmount: any
  total: any
  gst: any
  numericValue: any
  finalAmount: any
  cleanedValue: any
  itemNameofshow: any
  tip: any
  itemName: any
  perperson:any
  isActive: any
  tipvalue: any
  totaltip:number = 0.00
  totalamount:any
  tipAmount!:number
  numberOfPeople: number = 1;
  finaltotal:any
  myForm: FormGroup;
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  numberOfPeopleInput: any;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      f: new FormControl('', [
        Validators.min(10),
        Validators.max(100),
        Validators.minLength(2),
        Validators.maxLength(6), // In template, maxlength is 7 so that you can type 7 chars without Chrome/ffox blocking you
        Validators.pattern(/\d/),
        ]),
    });
  }
  value(value: any) {
    this.isActive = value
    this.tipvalue = value
    this.totalamount = Number(this.ammount)
    this.totaltip = (this.totalamount *  this.tipvalue / 100)
    this.finaltotal = this.totaltip + this.totalamount
     
  }
  onAmountChangetip(newValue: number){
    this.tipAmount = newValue
    this.totalamount = Number(this.ammount)
    this.totaltip = (this.totalamount *  this.tipAmount / 100)
    this.finaltotal = this.totaltip + this.totalamount

  }
  onAmountChange(newValue: number) {
    this.ammount = newValue
    this.totalamount = Number(this.ammount)
     console.log(this.totalamount,'this.totalamount')
    this.totaltip = (this.totalamount *  this.tipvalue / 100)
    this.finaltotal = Number(this.totaltip + this.totalamount)
    if(this.tipAmount){
      this.onAmountChangetip(this.numericValue)
    }
  }
  onAmountChangetwo(newValue: number){
    if(newValue >= 2){
      this.showfields = true
    }else{
      this.showfields = false
    }
  }
  handleReset() {
    
  }
  downloadAsPDF() {
    const element = document.getElementById('pdfTable');
    const pdfOptions = {
      margin: 10,
      filename: 'bill.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generate the PDF
    html2pdf(element, pdfOptions);
  }
  hidetip() {
    this.tipvalue = '';
    this.isActive = false
  }
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
}
