import { IPaymentService } from './factory/interfaces/payment.interface';
import { PaymentFactory } from './factory/payment.factory';

const shipCOD: IPaymentService = PaymentFactory.paymentCreator('COD');

shipCOD.pay();
