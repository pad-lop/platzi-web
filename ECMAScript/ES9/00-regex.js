const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2002-01-01')
console.table(match);

const matchtwo = regex.exec('200223-01-01')
console.table(match);
