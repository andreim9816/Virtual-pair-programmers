import {Component} from '@angular/core';
import {Book, SubjectArea, Video} from "../model/Model";

// let and const are used only in methods. At class-level, 'readonly' should be used

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExploringTypescript';

  // by default, class-level variables are mutable
  myNumber: number;

  x: number = 3;

  // immutable
  readonly mySecondNumber: number;

  constructor() {

    console.log(SubjectArea.HISTORY);
    console.log(SubjectArea[2]); // !!!!!!! prints the label that has the value of 2, not the second value of the array. It works only on NOT CUSTOM enum values
    // console.log(SubjectArea['Science and Maths']); // does NOT work

    //prints indexes, then labels ONLY ON NOT CUSTOM enum values
    for (const subject in SubjectArea) { // cannot use 'on' on enums
      console.log(subject);
      console.log(SubjectArea[subject]);
    }

    //should create an array for enum
    const enumArray = Object.keys(SubjectArea);
    //get the second part of the array (the labels). This is the workaround for NOT CUSTOM values
    for (const value of enumArray.slice(enumArray.length / 2)) {
      console.log(value);
    }

    let label;
    for (const subject in SubjectArea) { // cannot use 'on' on enums
      if (SubjectArea[subject] === 'Science and Maths') { // instead of SubjectArea['Science and Maths']
        label = subject;
      }
    }
    console.log(`The matching label is ${label}`);

    let label2 = Object.keys(SubjectArea).find(it => SubjectArea[it] === 'Science and Maths');
    console.log(`The matching label is ${label2}`);


    // this.exploringArrays();

    // let myCustomer = {
    //   firstName: 'Matt',
    //   age: 21
    // };
    // console.log(myCustomer);
    // console.log(typeof myCustomer);
    //
    // let myBook = new Book('Matt');
    // let myVideo: Video;
    //
    // myBook.title = 'A fantastic read';
    // console.log(myBook.toString());
    //
    // myBook.price = 100;
    // console.log(`to buy this book, it will cost ${myBook.priceWithTax(0.2)}`);
    //
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const oddNumbers = numbers.filter(num => {
    //     return num % 2 !== 0
    //   }
    // );
    // const evenNumbers = numbers.filter(num => num % 2 === 0);
    //
    // console.log(oddNumbers);
    // console.log(evenNumbers);
    //
    // this.objectEquality();
  }

  objectEquality() {

    let myValue: number;

    console.log(1 == 1); // true
    console.log(1 === 1); // true

    // @ts-ignore
    console.log('1' == 1); // true
    // @ts-ignore
    console.log('1' === 1); // false

    console.log('--------');

    // @ts-ignore
    console.log(null <= 3); // true. null is casted to 0
    // @ts-ignore
    console.log(null < 3); // true. null is casted to 0
    console.log(null == 0); // false
    console.log(null === 0); // false

    console.log('--------');

    console.log(myValue == null); // true; '==' null means is it null or can be casted to null. Undefined can be casted to null
    console.log(myValue === null); // false
    console.log(myValue == undefined); // true
    console.log(myValue === undefined); // true
  }

  someMethod() {
    let anotherNumber = 0; // when assigning with a value at declaration, it defines a type to the variab
    const aThirdNumber: number = 3;

    anotherNumber = 1;

    // anotherNumber = 'string';
    // this.mySecondNumber = 3;
    // aThirdNumber = 4;

  }

  exploringArrays() {
    const myArray1: Array<number> = new Array<number>(5);
    const myArray2: number[] = [1, 2, 3, null];

    console.log(myArray1);
    console.log(myArray2);
    console.log(myArray2[1]);

    console.log(myArray2.slice(0, 2));

    myArray2.push(4);
    myArray2.push(5);
    console.log(myArray2);

    myArray2.pop();
    console.log(myArray2);

    for (let i = 0; i < 10; ++i) {
      console.log(i);
    }

    for (const next of myArray2) {
      console.log(next);
    }

    let num = 0;
    while (num < 5) {
      console.log(num);
      num++;
    }

    if (num < 5) {
      console.log('Number is less than 5');
    } else {
      console.log('the number is 5 or greater');
    }
  }

}
