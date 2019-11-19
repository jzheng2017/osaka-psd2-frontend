import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Rekening} from '../rekening/rekening';

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

        return {rekeningen};
    }
}
