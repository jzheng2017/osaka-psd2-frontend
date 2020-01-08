import { Transfer } from './transfer';

describe('Transfer', () => {
  it('should create an instance', () => {
    expect(new Transfer({iban: ''}, {iban: '', name: ''}, 0, '', '')).toBeTruthy();
  });
});
