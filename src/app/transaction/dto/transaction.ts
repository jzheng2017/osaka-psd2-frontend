export class Transaction {

  constructor(public id: number, public sender: string[], public receiver: string[], public date: string, public amount: number, public comment: string, public mark: string,
              public booked: boolean, public received: boolean) {
  }
}
