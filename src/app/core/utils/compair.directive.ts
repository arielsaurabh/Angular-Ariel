// import { Directive, forwardRef, Attribute } from '@angular/core';
// import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// @Directive({
//     selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
//     providers: [
//         { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
//     ]
// })
// export class EqualValidator implements Validator {
//     constructor( @Attribute('validateEqual') public validateEqual: string,
//         @Attribute('reverse') public reverse: string) {
//             console.log("directive initialized");
//     }

//     private get isReverse() {
//         if (!this.reverse) return false;
//         console.log("directive initialized");
//         return this.reverse === 'true' ? true: false;
//     }

//     validate(c: AbstractControl): { [key: string]: any } {
//         // self value
//         let v = c.value;
//         alert(12)
//         // control vlaue
//         let e = c.root.get(this.validateEqual);

//         // value not equal
//         if (e && v !== e.value && !this.isReverse) {
//           return {
//             validateEqual: false
//           }
//         }

//         // value equal and reverse
//         if (e && v === e.value && this.isReverse) {
//             delete e.errors['validateEqual'];
//             if (!Object.keys(e.errors).length) e.setErrors(null);
//         }

//         // value not equal and reverse
//         if (e && v !== e.value && this.isReverse) {
//             e.setErrors({
//                 validateEqual: false
//             })
//         }

//         return null;
//     }
// }

// import { Directive, forwardRef, Attribute } from '@angular/core';
// import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appBigText]' })
export class EqualValidator {
    constructor(el: ElementRef) {
        alert("fsafjasljfk");
        el.nativeElement.style.fontSize = '100px'
    }
}

// @Directive({
//     selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
//     providers: [
//         { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
//     ]
// })
// export class EqualValidator implements Validator {
//     constructor( @Attribute('validateEqual') public validateEqual: string,
//         @Attribute('reverse') public reverse: string) {
//     }

//     private get isReverse() {
//         if (!this.reverse) return false;
//         return this.reverse === 'true' ? true : false;
//     }

//     validate(c: AbstractControl): { [key: string]: any } {
//         // self value
//         let v = c.value;
//         // control vlaue
//         let e = c.root.get(this.validateEqual);

//         // value not equal
//         if (e && v !== e.value && !this.isReverse) {
//             return {
//                 validateEqual: false
//             }
//         }

//         // value equal and reverse
//         if (e && v === e.value && this.isReverse) {
//             delete e.errors['validateEqual'];
//             if (!Object.keys(e.errors).length) e.setErrors(null);
//         }

//         // value not equal and reverse
//         if (e && v !== e.value && this.isReverse) {
//             e.setErrors({ validateEqual: false });
//         }

//         return null;
//     }
// }


// import { Directive, forwardRef, provide, Attribute } from '@angular/core';
// import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// @Directive({
//     selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
//     providers: [
//         provide(NG_VALIDATORS, { useExisting: forwardRef(() => EqualValidator), multi: true })
//     ]
// })
// export class EqualValidator implements Validator {
//     constructor( @Attribute('validateEqual') public validateEqual: string,
//         @Attribute('reverse') public reverse: string) {

//     }

//     private get isReverse() {
//         if (!this.reverse) return false;
//         return this.reverse === 'true' ? true: false;
//     }

//     validate(c: AbstractControl): { [key: string]: any } {
//         // self value
//         let v = c.value;

//         // control vlaue
//         let e = c.root.find(this.validateEqual);

//         // value not equal
//         if (e && v !== e.value && !this.isReverse) {
//           return {
//             validateEqual: false
//           }
//         }

//         // value equal and reverse
//         if (e && v === e.value && this.isReverse) {
//             delete e.errors['validateEqual'];
//             if (!Object.keys(e.errors).length) e.setErrors(null);
//         }

//         // value not equal and reverse
//         if (e && v !== e.value && this.isReverse) {
//             e.setErrors({
//                 validateEqual: false
//             })
//         }

//         return null;
//     }
// }