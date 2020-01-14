import {Transfer} from './transfer';

describe('Transfer', () => {
  it('should create an instance', () => {
    expect(new Transfer({iban: '', tableId: ''}, {iban: '', name: ''}, 0, '', '')).toBeTruthy();
  });
});
