const uncensor = (censored, keys, i = 0) =>
  i < keys.length
    ? uncensor(censored.replace("*", keys[i]), keys, i + 1)
    : censored;
