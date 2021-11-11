const isValueExistInTree = (arr, number) => {
  const searchValue = `[${number},`
  const arrJSON = JSON.stringify(arr);

  return arrJSON.includes(searchValue);
}
