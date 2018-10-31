/* eslint-disable-next-line */
export const sortByWeight = arr => {

  const map = {};
  const order = {};
  const newArr = [];

  arr.forEach(function (element) {
    const arrayInside = ('' + element).split('');
    const item = arrayInside.map(Number);
    map[element] = item.reduce(add, 0);
  });

  Object.values(map).forEach(function (key, value) {
    order[key] = Object.keys(map)[value];
  });

  Object.values(order).forEach(function (element) {
    newArr.push(element);
  });

  function add (a, b) {
    return a + b;
  }

  return newArr;
};
