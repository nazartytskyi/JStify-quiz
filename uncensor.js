function uncensor(censored, keys, i = 0) {
  return i < keys.length
    ? uncensor(censored.replace("*", keys[i]), keys, i + 1)
    : censored;
}
