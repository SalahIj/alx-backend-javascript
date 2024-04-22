export default function createIteratorObject(report) {
  const newresult = [];
  for (const index of Object.values(report.allEmployees)) {
    newresult.push(...index);
  }
  return newresult;
}
