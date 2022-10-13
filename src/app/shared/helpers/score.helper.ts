const units = {
  fall: 10,
  clear: 100,
};

const onPieceToBottom = (score: number) => (score ?? 0) + units.fall;

const onRemovingFullRows = (score: number, count: number) => {
  if (count < 1) return score;
  var basic = units.clear * count;
  var bonus = units.clear * (count - 1);
  return (score ?? 0) + basic + bonus;
}

export const score = {
  onPieceToBottom,
  onRemovingFullRows,
};