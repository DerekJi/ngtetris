import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const IShape: PieceMatrix[] = [
  {
    /**
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     */
    shape: PieceShape.I, 
    direction: PieceDirection.UP,    
    value: 0x4444,
  },
  {
    /**
     * ◻◻◻◻ -> 0
     * ▣▣▣▣ -> f
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     shape: PieceShape.I, 
     direction: PieceDirection.RIGHT,
     value: 0x0f00,
  },
  {
    /**
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     * ◻▣◻◻ -> 4
     */
    shape: PieceShape.I, 
    direction: PieceDirection.DOWN,    
    value: 0x4444,
  },
  {
    /**
     * ◻◻◻◻ -> 0
     * ▣▣▣▣ -> f
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     shape: PieceShape.I, 
     direction: PieceDirection.LEFT,
     value: 0x0f00,
  }
];