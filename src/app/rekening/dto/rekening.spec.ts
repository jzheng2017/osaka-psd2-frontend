import {Rekening} from './rekening';

describe('Rekening', () => {
    it('should create an instance', () => {
        expect(new Rekening('', '', '', 1)).toBeTruthy();
    });
});
