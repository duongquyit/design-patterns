import { AccountService, EmailService, PaymentService, ShippingService, SmsService } from './service'

export class ShopFacade {
  private static instance: ShopFacade

  private accountService: AccountService
  private paymentService: PaymentService
  private shippingService: ShippingService
  private emailService: EmailService
  private smsService: SmsService

  private constructor() {
    this.accountService = new AccountService()
    this.paymentService = new PaymentService()
    this.shippingService = new ShippingService()
    this.emailService = new EmailService()
    this.smsService = new SmsService()
  }

  public static getInstance(): ShopFacade {
    if (!this.instance) {
      this.instance = new ShopFacade()
    }

    return this.instance
  }

  public buyProductByCashWithFreeShipping(email: string): void {
    this.accountService.getAccount(email)
    this.paymentService.paymentByCash()
    this.shippingService.freeShipping()
    this.emailService.sendMail(email)
    console.log('Done\n')
  }

  public buyProductByPaypalWithStandardShipping(email: string, mobilePhone: string): void {
    this.accountService.getAccount(email)
    this.paymentService.paymentByPaypal()
    this.shippingService.standardShipping()
    this.emailService.sendMail(email)
    this.smsService.sendSMS(mobilePhone)
    console.log('Done\n')
  }
}
