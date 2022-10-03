import { PieceDirection } from "./piece-direction.enum";
import { PieceShape } from "./piece-shape.enum";

/**
 * A piece in Tetris and similar games is a geometric shape consisting of a set of blocks that is moved as a unit.
 */
export class PieceModel {
  constructor(
    /**
     * the absolute X axis position of the top-left block in the piece in the playfield. 
     */
    public left: number,

    /**
     * the absolute Y axis position of the top-left block in the piece in the playfield. 
     */
    public top: number,
    public shape?: PieceShape,
    public direction?: PieceDirection) {

    }
}
