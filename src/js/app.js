/* eslint-disable no-unused-vars */
export default function orderByProps(obj, arr) {
  const newArr = [];
  const keysArr = [];
  arr.forEach((element) => {
    newArr.push({ key: element, value: obj[element] });
  });
  for (const key in obj) {
    if (key !== arr[0]) {
      if (key !== arr[1]) {
        keysArr.push(key);
      }
    }
  }
  keysArr.sort();
  keysArr.forEach((key) => {
    newArr.push({ key, value: obj[key] });
  });
  return newArr;
}
