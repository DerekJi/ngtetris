import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const JShape: PieceMatrix[] = [
  {
    shape: PieceShape.J, 
    direction: PieceDirection.UP, 
    /**
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     * ▣▣◻◻ -> c
     * ◻◻◻◻
     */
    value: 0x44c0,   
  },
  {
     shape: PieceShape.J, 
     direction: PieceDirection.RIGHT,
     /**
     * ▣◻◻◻ -> 8
     * ▣▣▣◻ -> e
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0x8e00,
  },
  {
    shape: PieceShape.J, 
    direction: PieceDirection.DOWN,    
    /**
     * ▣▣◻◻ -> c
     * ▣◻◻◻ -> 8
     * ▣◻◻◻ -> 8
     * ◻◻◻◻ -> 0
     */
     value: 0xc880,
  },
  {
    /**
     * ▣▣▣◻ -> e
     * ◻◻▣◻ -> 2
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     shape: PieceShape.J, 
     direction: PieceDirection.LEFT,
     value: 0xe200,
  }
];