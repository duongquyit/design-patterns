import { IPaymentService } from './interfaces/payment.interface';

export class OnlinePayment implements IPaymentService {
  constructor() {

  }

  pay() {
    console.log('Handle pay online!');
  }
}
