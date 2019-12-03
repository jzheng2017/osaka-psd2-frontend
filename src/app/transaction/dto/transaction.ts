export class Transaction {

  constructor(public id: number, public creditorAccount: string[], public datum: string, public amount: number, public comment: string, public mark: string) {
  }
}
