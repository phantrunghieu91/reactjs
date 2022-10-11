const convertDecimal = string => {
  const strArr = string.split('');
  for (let i = strArr.length - 3; i >= 0; i -= 3) {
    if (i === 0) break;
    else strArr.splice(i, 0, '.');
  }

  return strArr.join('');
};

export default convertDecimal;
