import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingComponent implements OnInit {
  form: FormGroup
  constructor() { }
  countries=['Ukraine', 'Russia', 'UK', 'England']
  creditCard = false

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20) ]),
      lastname: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20) ]),
      email : new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required,Validators.minLength(3) ]),
      city: new FormControl('',[Validators.required,Validators.minLength(3) ]),
      country: new FormControl('',[Validators.required,Validators.minLength(3) ]),
      zip: new FormControl('',[Validators.required,Validators.minLength(3) ]),
      differentAddress: new FormControl(false),
      billingMethod: new FormControl('',[Validators.required]),
      paymentMethod:new FormControl('',[Validators.required]),
      creditCard: new FormGroup({
        cardNumber: new FormControl(''),
        cardHolder: new FormControl(''),
        expirationDate: new FormControl(''),
        cvc: new FormControl('')
      }),
      notes: new FormControl('',Validators.maxLength(1000)),
      spam: new FormControl(false),
      terms: new FormControl(false,Validators.required)
    })

  }
  submit(event: any){
    if(this.form.invalid) {
      return
    }
      console.log(this.form.value)
      event.currentTarget.reset()
      this.form.reset()
      this.form.markAsUntouched()
      this.form.markAsPristine()


  }

  setCardValidators(card: boolean){

    if(card){
      this.creditCard = true
      this.form.get('creditCard').get("cardNumber").setValidators([Validators.required, Validators.minLength(16), Validators.maxLength(16)])
      this.form.get('creditCard').get("cardNumber").updateValueAndValidity()
      this.form.get('creditCard').get("cardHolder").setValidators([Validators.required, Validators.minLength(3)])
      this.form.get('creditCard').get("cardHolder").updateValueAndValidity()
      this.form.get('creditCard').get("expirationDate").setValidators([Validators.required])
      this.form.get('creditCard').get("expirationDate").updateValueAndValidity()
      this.form.get('creditCard').get("cvc").setValidators([Validators.required])
      this.form.get('creditCard').get("cvc").updateValueAndValidity()

    }
    else{
      this.creditCard = false
      this.form.get('creditCard').get("cardNumber").clearValidators()
      this.form.get('creditCard').get("cardNumber").updateValueAndValidity()
      this.form.get('creditCard').get("cardHolder").clearValidators()
      this.form.get('creditCard').get("cardHolder").updateValueAndValidity()
      this.form.get('creditCard').get("expirationDate").clearValidators()
      this.form.get('creditCard').get("expirationDate").updateValueAndValidity()
      this.form.get('creditCard').get("cvc").clearValidators()
      this.form.get('creditCard').get("cvc").updateValueAndValidity()
    }

  }

}
