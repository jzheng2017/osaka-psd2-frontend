import { Transfer } from './transfer';
import any = jasmine.any;

describe('Transfer', () => {
  it('should create an instance', () => {
    expect(new Transfer({ iban: '' }, { iban: '', name: ''}, Number(''), '', '')).toBeTruthy();
  });
});
