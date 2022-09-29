import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const LShape: PieceMatrix[] = [
  {
    shape: PieceShape.L, 
    direction: PieceDirection.UP, 
    /**
     * ▣◻◻◻ -> 8
     * ▣◻◻◻ -> 8
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     */
    value: 0x88c0,   
  },
  {
     shape: PieceShape.L, 
     direction: PieceDirection.RIGHT,
     /**
     * ▣▣▣◻ -> e
     * ▣◻◻◻ -> 8
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0xe800,
  },
  {
    shape: PieceShape.L, 
    direction: PieceDirection.DOWN,    
    /**
     * ▣▣◻◻ -> c
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     * ◻◻◻◻ -> 0
     */
     value: 0xc440,
  },
  {
    /**
     * ◻◻▣◻ -> 2
     * ▣▣▣◻ -> e
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     shape: PieceShape.L, 
     direction: PieceDirection.LEFT,
     value: 0x2e00,
  }
];