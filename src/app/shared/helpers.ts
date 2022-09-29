export function pad(n: number, size: number, padding: string = '8'): string {
  var s = n.toString();
  while (s.length < size) s = padding + s;
  return s;
}

export function hex2binstr(hexNumString: string, strLen: number): string {
  const replaceChar = '0';
  const binNum = parseInt(hexNumString).toString(2).replace(/0/ig, replaceChar);
  let binstr = binNum;

  for (let i = 0; i < strLen - binNum.length ; i++ ) {
    binstr = replaceChar + binstr;
  }

  return binstr;
}

export function hexToMatrix(v: number | undefined): number[][] {
  if (!v) {
    return [];
  }

  var s = hex2binstr(v.toString(), 16);
  var result: number[][] = [];
  for (var i = 0; i < 16; i = i + 4) {
    var line = s.slice(i, i + 4);
    var row: number[] = [];
    for (var p = 0; p < 4; p++) {
      row.push(parseInt(line.charAt(p)));
    }
    result.push(row);
  }
  console.table(result);
  return result;
}