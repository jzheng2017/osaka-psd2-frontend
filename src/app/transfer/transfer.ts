export class Transfer {

  constructor(public debtor: string, public creditorIBAN: string, public creditorName: string, public amount: number, public currency: string, public comment: string) {
  }
}
