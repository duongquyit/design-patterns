export class AccountService {
  getAccount(email: string): void {
    console.log('Getting the account of ' + email)
  }
}

export class EmailService {
  sendMail(mailTo: string): void {
    console.log('Sending an email to ' + mailTo)
  }
}

export class PaymentService {
  paymentByPaypal(): void {
    console.log('Payment by Paypal')
  }

  paymentByCreditCard(): void {
    console.log('Payment by Credit Card')
  }

  paymentByEBankingAccount(): void {
    console.log('Payment by E-banking account')
  }

  paymentByCash(): void {
    console.log('Payment by cash')
  }
}

export class ShippingService {
  freeShipping(): void {
    console.log('Free Shipping')
  }

  standardShipping(): void {
    console.log('Standard Shipping')
  }

  expressShipping(): void {
    console.log('Express Shipping')
  }
}

export class SmsService {
  sendSMS(mobilePhone: string): void {
    console.log('Sending a message to ' + mobilePhone)
  }
}
