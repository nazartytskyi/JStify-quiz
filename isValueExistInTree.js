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


// Solution 3 (DFS search)

const isValueExistInTree = (tree, searchVal) => {
  if (!tree) return false;

  const [val, leftTree, rightTree] = tree;

  return (
    val === searchVal ||
    isValueExistInTree(leftTree, searchVal) ||
    isValueExistInTree(rightTree, searchVal)
  );
};
