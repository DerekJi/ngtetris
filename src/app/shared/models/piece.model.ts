import { PieceDirection } from "./piece-direction.enum";
import { PieceShape } from "./piece-shape.enum";

/**
 * A piece in Tetris and similar games is a geometric shape consisting of a set of blocks that is moved as a unit.
 */
export interface PieceModel {
  shape: PieceShape;
  direction: PieceDirection;
  top: number;
  left: number;
}
