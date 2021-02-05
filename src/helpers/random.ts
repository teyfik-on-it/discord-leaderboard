const random = (min: number, max: number): number =>
  Math.floor(Math.random() * Math.abs(min - max)) + Math.min(min, max);

export default random;
