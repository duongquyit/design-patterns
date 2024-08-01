import { IPaymentStrategy } from './interfaces/strategy.interface';

export class CreditCard implements IPaymentStrategy {
  private name: string;
  private cardNumber: string;
  private cvv: string;
  private dateOfExpiry: string;

  constructor(name: string, cardNumber: string, cvv: string, dateOfExpiry: string) {
    this.name = name;
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.dateOfExpiry = dateOfExpiry;
  }

  pay(amount: number): void {
    console.log(`You have pay by credit card, amount: ${amount}`);
  }
}

export class Paypal implements IPaymentStrategy {
  private bankAccount: string;

  constructor(bankAccount: string) {
    this.bankAccount = bankAccount;
  }

  pay(amount: number): void {
    console.log(`You have pay by paypal, amount: ${amount}`);
  }
}

export class GooglePay implements IPaymentStrategy {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  pay(amount: number): void {
    console.log(`You have pay by google pay, amount: ${amount}`);
  }
}
