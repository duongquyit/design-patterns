import { IPaymentStrategy } from './interfaces/strategy.interface';

export class ShoppingCart {
  private items: { name: string, price: number }[] = [];

  addItem(item: { name: string, price: number }): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  pay(paymentMethod: IPaymentStrategy): void {
    const amount = this.calculateTotal();
    paymentMethod.pay(amount);
  }
}
