export class Transfer {

  constructor(public sender: { iban: string, tableId: string }, public receiver: { iban: string, name: string }, public amount: number,
              public currency: string, public information: string) {
  }
}
