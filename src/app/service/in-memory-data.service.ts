import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    constructor() {
    }

    createDb() {
        const rekeningen = [
            {id: '1', name: 'Rabobank', bankAccountNumber: 'NL91RABONL27164300', balance: 1823},
            {id: '2', name: 'ING', bankAccountNumber: 'INGBNL27164300', balance: 161},
            {id: '3', name: 'Rabobank', bankAccountNumber: 'NL91RABONL27164300', balance: 123},
            {id: '4', name: 'ING', bankAccountNumber: 'INGBNL27164300', balance: 55},
        ];

        const transactions = [
            {
                id: '1',
                bankAccountNumber: 'INGBNL27164300',
                bankAccountNumberSender: 'INGBNL27039529',
                amount: 55,
                datetime: '12-05-2019 10:55',
                comment: 'hahahahha'
            }, {
                id: '2',
                bankAccountNumber: 'INGBNL27164300',
                bankAccountNumberSender: 'INGBNL223950209',
                amount: 121,
                datetime: '12-05-2019 23:12',
                comment: 'hahahahha'
            }, {
                id: '3',
                bankAccountNumber: 'INGBNL27164300',
                bankAccountNumberSender: 'INGBNL9428099181',
                amount: 515,
                datetime: '12-05-2019 10:55',
                comment: 'hahahahha'
            },
        ];

        return {rekeningen, transactions};
    }
}
