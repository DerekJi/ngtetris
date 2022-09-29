import { PieceDirection } from "./piece-direction.enum";
import { PieceShape } from "./piece-shape.enum";

/**
 * A piece in Tetris and similar games is a geometric shape consisting of a set of blocks that is moved as a unit.
 */
export interface PieceModel {
  shape: PieceShape;
  direction: PieceDirection;

  /**
   * the absolute Y axis position of the top-left block in the piece in the playfield. 
   */
  top: number;

  /**
   * the absolute X axis position of the top-left block in the piece in the playfield. 
   */
  left: number;
}
