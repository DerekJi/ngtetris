import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const SShape: PieceMatrix[] = [
  {
    shape: PieceShape.S,
    direction: PieceDirection.UP,
    /**
     * ▣◻◻◻ -> 8
     * ▣▣◻◻ -> c
     * ◻▣◻◻ -> 4
     * ◻◻◻◻ -> 0
     */
     value: 0x8c40,
  },
  {
    shape: PieceShape.S,
    direction: PieceDirection.RIGHT,
    /**
     * ◻▣▣◻ -> 6
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     value: 0x6c00,
  },
  {
    shape: PieceShape.S,
    direction: PieceDirection.DOWN,
    /**
     * ▣◻◻◻ -> 8
     * ▣▣◻◻ -> c
     * ◻▣◻◻ -> 4
     * ◻◻◻◻ -> 0
     */
     value: 0x8c40,
  },
  {
    shape: PieceShape.S,
    direction: PieceDirection.LEFT,
    /**
     * ◻▣▣◻ -> 6
     * ▣▣◻◻ -> c
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     value: 0x6c00,
  },
];