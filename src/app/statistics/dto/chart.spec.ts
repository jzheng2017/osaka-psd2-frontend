import { Chart } from './chart';
import {ChartSettings} from './chart-settings';

describe('Chart', () => {
  it('should create an instance', () => {
    expect(new Chart('', new ChartSettings('', 0, false, ''))).toBeTruthy();
  });
});

