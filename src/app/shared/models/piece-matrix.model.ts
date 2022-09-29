import { PieceDirection } from "./piece-direction.enum";
import { PieceShape } from "./piece-shape.enum";

export interface PieceMatrix {
  /**
   * I, O, L, J, Z, S, T
   */
  shape: PieceShape,
  
  /**
   * Up, Right, Left, Down
   */
  direction: PieceDirection,

  /**
   * Hex value,
   * @example: 0x4e00
   */
  value: number,
}
