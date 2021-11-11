// Solution 1

const isValueExistInTree = (arr, number) => {
  const searchValue = `[${number},`
  const arrJSON = JSON.stringify(arr);

  return arrJSON.includes(searchValue);
}


// Solution 2 (The same idea as in first solution but with RegExp usage)

const isValueExistInTree = (arr, number) => {
  const regExp = new RegExp(`\\[${number},`)
  const arrJSON = JSON.stringify(arr);

  return regExp.test(arrJSON);
}
