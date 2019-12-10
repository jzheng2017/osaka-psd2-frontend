import {Transaction} from './transaction';

export class DetailResponse {
  constructor(public transactions: Transaction[], public account: string[]) {
  }
}
