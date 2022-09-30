import { Constants } from "../consts";
import { getEmptyRow } from "../helpers/fieldmatrix.helper";

function buildInitialMatrix(initialValue: number = 0): number[][] {
  var matrix: number[][] = [];

  for (let i = 0; i < Constants.PlayfieldHeight; i++) {
    var row: number[] = getEmptyRow(Constants.PlayfieldWidth, initialValue);
    matrix.push(row);    
  }

  return matrix;
}

export const initialFieldMatrix: number[][] = buildInitialMatrix();