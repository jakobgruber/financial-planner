import {isArrayIndexValid, removeArrayItemImmutable, updateArrayItemImmutable} from './immutable';

describe('immutable', () => {
  let values;
  beforeEach(() => {
    values = [1, 2];
  });

  const createIndexFunc = (valueToFind) => {
    return (value) => value === valueToFind;
  };

  describe('updateArrayItemImmutable', () => {
    it('should do nothing when old array is undefined', () => {
      expect(updateArrayItemImmutable(null, 1, createIndexFunc(1))).toEqual(null);
    });

    it('should not modify old array', () => {
      updateArrayItemImmutable(values, 3, createIndexFunc(1));
      expect(values).toEqual([1, 2]);
    });

    it('should update value', () => {
      expect(updateArrayItemImmutable(values, 3, createIndexFunc(1))).toEqual([3, 2]);
    });
  });

  describe('removeArrayItemImmutable', () => {
    it('should do nothing when old array is undefined', () => {
      expect(removeArrayItemImmutable(null, createIndexFunc(1))).toEqual(null);
    });

    it('should not modify old array', () => {
      removeArrayItemImmutable(values, createIndexFunc(1));
      expect(values).toEqual([1, 2]);
    });

    it('should remove value', () => {
      expect(removeArrayItemImmutable(values, createIndexFunc(1))).toEqual([2]);
    });
  });

  describe('isArrayIndexValid', () => {
    it('should return false when array is undefined', () => {
      expect(isArrayIndexValid(null, 1)).toBeFalsy();
    });

    it('should return false when index is lesser than zero', () => {
      expect(isArrayIndexValid(values, -1)).toBeFalsy();
    });

    it('should return false when index is greater than length', () => {
      expect(isArrayIndexValid([], 1)).toBeFalsy();
    });

    it('should return true when index is valid', () => {
      expect(isArrayIndexValid(values, 1)).toBeTruthy();
    });
  });
});
