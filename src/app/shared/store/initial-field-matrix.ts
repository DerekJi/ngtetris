import { Constants } from "../consts";
import { fieldHellper } from "../helpers/fieldmatrix.helper";

function init() {
  var field = fieldHellper.initialize(Constants.PlayfieldWidth, Constants.PlayfieldHeight, 0);
  return field;
}

export const initialFieldMatrix: number[][] = init();