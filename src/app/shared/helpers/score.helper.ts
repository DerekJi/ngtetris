import { tetrisStorage } from "./storage.helper";

const units = {
  fall: 10,
  clear: 100,
};

const onPieceToBottom = (score: number) => {
  var result = (score ?? 0) + units.fall;
  return result;
}

const onRemovingFullRows = (score: number, count: number) => {
  if (count < 1) return score;
  var basic = units.clear * count;
  var bonus = units.clear * (count - 1);
  var result = (score ?? 0) + basic + bonus;
  return result;
}

export const score = {
  onPieceToBottom,
  onRemovingFullRows,
};