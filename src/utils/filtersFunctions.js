const splitTitle = (str) => {
  const arr = str.split(' ');
  return arr.shift();
};

const splitDate = (date) => date.slice(0, 4);

// To transformer number into currency format
const getCurrencyFormat = (num) => {
  const str = num.toLocaleString('us', { style: 'currency', currency: 'USD' });
  const newStr = str.replace(',00 $US', '$');
  return newStr;
};

// To take only metric value of a object
const filterMetricsValues = (obj) => {
  const newObj = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    const regex = /^[0-9]+$/;
    if ((typeof value === 'string' || typeof value === 'number') && regex.test(value)) {
      if (key !== 'calendarYear' || key !== 'cik') {
        const newValue = getCurrencyFormat(value);
        newObj[key] = newValue;
      } else {
        newObj[key] = value;
      }
    }
  });
  return newObj;
};

// Transform this format : "numberOfvisitor" into "Number of visitor"
const capitalizeAndSpace = (str) => {
  let result = str.charAt(0).toUpperCase();
  result += str.slice(1).replace(/[A-Z]/g, ' $&').toLowerCase();
  return result;
};

// Set dynamically the background
const setBackGround = (bGround = null, image = null) => {
  let newGround = bGround;
  if (image) {
    newGround = { ...newGround, backgroundImage: `${newGround.backgroundImage}, url(${image})` };
  }
  return newGround;
};

// creates an array by randomly taking elements from another array
// Take 2 parameters : the original array (arr) and the number of elts we want to take
const randomArray = (arr, number) => {
  if (!Array.isArray(arr) || arr.length === 0 || number < 1 || number > arr.length) {
    return null;
  }
  const copy = arr.slice();
  const result = [];
  for (let i = 0; i < number; i += 1) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(index, 1)[0]);
  }
  return result;
};

export {
  splitTitle,
  splitDate,
  filterMetricsValues,
  capitalizeAndSpace,
  setBackGround,
  randomArray,
  getCurrencyFormat,
};
