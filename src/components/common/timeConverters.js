const dateConverter = (sec) => {
  return new Date(sec * 1000).toISOString().substr(11, 5);
}

const getDate = (sec) => {
  const date = new Date(sec * 1000).toISOString().substr(0, 10);
  return formatDate(date);
}

const formatDate = (date) => {
  const parts = date.split('-');
  return [parts[2], parts[1], parts[0]].join('.');
}

const secConverter = (sec) => {
  return [3600, 60]
  .reduceRight(
    (p, b) => r => [Math.floor(r / b)].concat(p(r % b)),
    () => []
  )(sec)
  .map(a => a.toString().padStart(2, '0'))
  .join(' : ');
}

const toWordsTime = (d) => {
  function enumerate (num, dec) {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
  }
  
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor(d % 3600 / 60);

  let hDisplay = enumerate(h, [" час", " часа", " часов"]);
  let mDisplay = enumerate(m, [" минута", " минуты", " минут"]);
  // let hDisplay = h > 0 ? h + (h === 1 ? " час, " : " часа ") : "";
  // let mDisplay = m > 0 ? m + (m === 1 ? " минута, " : " минут ") : "";

  return [h, hDisplay, <br/>, m, mDisplay]; 
}

export { dateConverter, getDate, formatDate, secConverter, toWordsTime }
