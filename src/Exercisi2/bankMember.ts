export default class BankMember {
  private savingsBalance$: number;

  constructor(savingsBalance$:number) {
    this.savingsBalance$ = savingsBalance$;
  }

  public get sacingsBalance() {
    return this.savingsBalance$;
  }

  public set savingsBalance(savingsBalance$: number) {
    this.savingsBalance$ = savingsBalance$;
  }

  public deposit(amount: number):void {
    this.savingsBalance$ += amount;
  }

  public withdraw(amount: number):void {
    if (this.savingsBalance$ < amount) {
      console.log(('Insuficient Founds'));
      return;
    }
    this.savingsBalance$ -= amount;
  }
}
