function isFull(row: number[]): boolean {
  var result = true;
  for (const value of row) {
    if (value < 1) {
      result = false;
      break;
    }
  }
  return result;
}

export function removeFullLines(field: number[][]): number[][] {
  var updated = Object.assign([], field);

  for (const row of field) {
    if (isFull(row)) {

    }
  }

  return updated;
}