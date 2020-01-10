import { Transactioncollection } from './transactioncollection';
import {Transaction} from '../../transaction/dto/transaction';

describe('Transactioncollection', () => {
  it('should create an instance', () => {
    expect(new Transactioncollection(Transaction[''])).toBeTruthy();
  });
});
