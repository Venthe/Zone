export const noMoreThan = (value, boundary) => value > boundary ? boundary : value;
export const noLessThan = (value, boundary) => value < boundary ? boundary : value;
export const noLessThanZero = (value) => noLessThan(value, 0);
export const noLessThanOne = (value) => noLessThan(value, 1);
export const between = (min, max) => value => noMoreThan(noLessThan(value, min), max);
export const asPercent = value => value / 100;
export const lbsToKg = value => value * 0.453592;
