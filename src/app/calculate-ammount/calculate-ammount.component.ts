import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-ammount',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './calculate-ammount.component.html',
  styleUrl: './calculate-ammount.component.scss'
})
export class CalculateAmmountComponent {
  calculate: FormGroup;
  itemPrice: any
  price: any
  quantity: any
  quantityAmount: any
  total: any
  gst: any
  numericValue: any
  finalAmount: any
  cleanedValue: any
  itemNameofshow:any
  tip: any
  itemName:any
  isActive:any
  tipvalue:any
  constructor(private fb: FormBuilder) {
    this.calculate = this.fb.group({
      price: [''],
      total: [''],
      gst: [''],
      quantity: [''],
      finaltotal: [0.00],
      tip: ['']
    });
  }
  pricelist = [
    {
      id:1,
      Dish: 'Pizza',
      price: 120
    },
    {
      id:2,
      Dish: 'French Fries',
      price: 50
    },
    {
      id:3,
      Dish: 'Machurian',
      price: 90
    },
    {
      id:4,
      Dish: 'Italian Pasta',
      price: 130
    }
  ]
  getPrice(price: any) {
    this.pricelist.forEach((res:any)=>{
      if(price.target.value == res.price){
        this.itemPrice = res?.price
        this.itemName = res?.Dish
      }
    })
  
    // const selectedValue = price.target.value;
    // this.cleanedValue = selectedValue.replace(/[^a-zA-Z]/g, '');
    // this.numericValue = parseFloat(price.target.value.replace(/[^\d]/g, ''));
    // if (!isNaN(this.numericValue)) {
    //   this.itemPrice = this.numericValue;
    // } else {
    //   console.error('Invalid numeric value');
    // }
  }
  value(value:any){
    this.isActive = value
    this.tipvalue = value
    this.calculate.controls['tip'].reset();
  }
  // getTotal() {
  //   const price = this.itemPrice;
  //   const quantity = this.calculate.value.quantity
  //   const quantityAmount = price * quantity
  //   this.calculate.patchValue({
  //     total: quantityAmount ? quantityAmount : ''
  //   })
  // }

  calculateammount() {
    // this.total = this.calculate?.value?.total;
    this.itemNameofshow = this.itemName
    this.quantity = this.calculate?.value?.quantity
    this.tip = this.calculate?.value?.tip ? this.calculate?.value?.tip : this.tipvalue;
    this.price = this?.itemPrice;
    this.quantityAmount = this?.price * this?.quantity
    this.gst = this.calculate?.value?.gst;
    
   
    const totalamounttip = Number(this.quantityAmount * this.tip / 100)
    const total1 = Number(totalamounttip + this.quantityAmount)
    console.log(total1,totalamounttip,  'finalAmount')
    const totalwithgst = (total1 * this?.gst / 100)
    this.finalAmount = total1 + totalwithgst
    
    this.calculate.patchValue({
      // total: this.quantityAmount,
      finaltotal: this.finalAmount
    })
  }
  handleReset(){
    this.calculate.reset();
    this.tipvalue = '';
    this.itemPrice = ''
    this.itemNameofshow = '0 . 00';
    this.quantity = '0 . 00';
    this.tip = '0 . 00';
    this.gst = '0 . 00';
    this.finalAmount = '0 . 00 ';
    this.isActive = null; // Reset the active tip button
  }
}
