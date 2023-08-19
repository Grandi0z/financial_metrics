import { splitTitle, getCurrencyFormat, filterMetricsValues, setBackGround} from "../utils/filtersFunctions";

describe('Functions', () => {
    it('splitTitle should return the first word of the input string', () => {
        const str = 'Hello Micronaut';
        const result = splitTitle(str);
        expect(result).toBe('Hello');
      });

    it('getCurrencyFormat should format a positive integer into currency', () => {
        const result = getCurrencyFormat(10000);
        expect(result).toBe('$10,000.00');
    });

    it('filterMetricsValues should return an object with unformatted metric', () => {
        const obj = {
          metric1: 'abc',
          metric2: '123abc',
          metric3: '128',
        };
        const result = filterMetricsValues(obj);
        expect(result).toEqual({
          metric3: '128',
        });
      });
      
      it('setBackGround should return an object with backgroundImage property set', () => {
        const background = { color: 'red',
        backgroundImage: "config" };
        const image = 'image.jpg';
        const expected = { ...background, backgroundImage: `config, url(${image})` };
        expect(setBackGround(background, image)).toEqual(expected);
      });
});
    
