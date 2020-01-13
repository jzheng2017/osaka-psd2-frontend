import {ChartSettings} from './chart-settings';

describe('ChartSettings', () => {
  it('should create an instance', () => {
    expect(new ChartSettings('', 0, false, '')).toBeTruthy();
  });
});
