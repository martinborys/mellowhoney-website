export function getKeys(json) {
  let keys = [];
  for (var key in json) {
    keys.push(key);
  }
  return keys;
}
