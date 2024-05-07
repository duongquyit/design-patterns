import { IPaymentService } from './interfaces/payment.interface';

export class CODPayment implements IPaymentService{
  constructor() {

  }

  pay() {
    console.log('Handle payment COD');
  }
}
