import { CODPayment } from './cod';
import { IPaymentService } from './interfaces/payment.interface';
import { OnlinePayment } from './online-payment';

export class PaymentFactory {
  static paymentCreator(method: string): IPaymentService {
    const paymentMethods: any = {
      'COD': new CODPayment(),
      'Online': new OnlinePayment(),
    };

    return paymentMethods[method];
  };
}
