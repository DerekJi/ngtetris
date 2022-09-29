import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const OShape: PieceMatrix[] = [
  {
    shape: PieceShape.O, 
    direction: PieceDirection.UP, 
    /**
     * ▣▣◻◻ -> c
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0xcc00,   
  },
  {
     shape: PieceShape.O, 
     direction: PieceDirection.RIGHT,
     /**
     * ▣▣◻◻ -> c
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0xcc00,  
  },
  {
    shape: PieceShape.O, 
    direction: PieceDirection.DOWN,    
    /**
     * ▣▣◻◻ -> c
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     value: 0xcc00,  
  },
  {
     shape: PieceShape.O, 
     direction: PieceDirection.LEFT,
     /**
     * ▣▣◻◻ -> c
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0xcc00,  
  }
];