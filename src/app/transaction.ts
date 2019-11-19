export class Transaction {

    constructor(private id: number,
                private bankAccountNumber: string,
                private bankAccountNumberSender: string,
                private amount: number,
                private datetime: string,
                private comment: string) {
    }
}
