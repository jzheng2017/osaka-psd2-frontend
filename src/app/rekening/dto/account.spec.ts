import { Account } from './account';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account('hashing', 'rabobank', 'hashing')).toBeTruthy();
  });
});
