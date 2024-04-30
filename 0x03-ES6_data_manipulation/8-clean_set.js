export default function cleanSet(set, startString) {
  const Ret = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      Ret.push(s.slice(startString.length));
    }
  });
  return Ret.join('-');
}
