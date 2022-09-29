import { Constants } from "../consts";

function buildInitialMatrix(initialValue: number = 0): number[][] {
  var matrix: number[][] = [];
  [].constructor(Constants.PlayfieldHeight).forEach(() => {
    var row: number[] = [];
    [].constructor(Constants.PlayfieldWidth).forEach(() => {
      row.push(initialValue);
    })
    matrix.push(row);
  });

  return matrix;
}

export const initialFieldMatrix: number[][] = buildInitialMatrix();