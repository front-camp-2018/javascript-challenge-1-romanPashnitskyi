/* eslint-disable-next-line */
export const doubleNum = num => {

  const array = ('' + num).split('');
  const arrayLength = array.length;
  const halfLength = arrayLength / 2;

  if (Number.isInteger(halfLength)) {

    const leftSide = array.slice(0, halfLength);
    const rightSide = array.slice(leftSide.length, arrayLength);
    const leftNumber = leftSide.join('');
    const rightNumber = rightSide.join('');

    if (leftNumber === rightNumber) {
      return Number.parseInt(leftNumber + rightNumber);
    } else {
      return Number.parseInt((leftNumber + rightNumber) * 2);
    }
  } else {
    return num * 2;
  }

};
