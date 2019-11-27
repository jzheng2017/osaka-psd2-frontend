export class Transaction {

    constructor(public id: number,
                public bankAccountNumber: string,
                public bankAccountNumberSender: string,
                public amount: number,
                public datetime: string,
                public mark: string,
                public comment: string) {
    }
}
