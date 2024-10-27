export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];

  set.forEach((element) => {
    if (element.startswith(startString)) {
      result.push(element.slice(startString.length));
    }
  });

  return result.join('-');
}
