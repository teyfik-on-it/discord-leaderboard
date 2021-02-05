import random from './random';

const delay = (minResponse: number, maxResponse: number) => {
  return new Promise((r) =>
    setTimeout(r, random(minResponse, maxResponse) * 1e3),
  );
};

export default delay;
