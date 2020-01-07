export class Transaction {
  constructor(public id: number, public sender: { iban: string }, public receiver: { iban: string }, public date: string, public amount: number, public comment: string, public mark: string,
              public booked: boolean, public received: boolean, public category: {name: string}) {
  }
}
