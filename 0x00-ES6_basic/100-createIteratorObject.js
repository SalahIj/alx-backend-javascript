export default function createIteratorObject(report) {
    const newResult = [];
    for (const value of Object.values(report.allEmployees)) {
      newResult.push(...value);
    }
    return newResult;
  }
