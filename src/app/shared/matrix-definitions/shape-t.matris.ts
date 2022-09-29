import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const TShape: PieceMatrix[] = [
  {
    shape: PieceShape.T,
    direction: PieceDirection.UP,
    /**
     * ◻▣◻◻ -> 4
     * ▣▣▣◻ -> e
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     value: 0x4e00,
  },
  {
    shape: PieceShape.T,
    direction: PieceDirection.RIGHT,
    /**
     * ▣◻◻◻ -> 8
     * ▣▣◻◻ -> c
     * ▣◻◻◻ -> 8
     * ◻◻◻◻ -> 0
     */
     value: 0x8c80,
  },
  {
    shape: PieceShape.T,
    direction: PieceDirection.DOWN,
    /**
     * ▣▣▣◻ -> e
     * ◻▣◻◻ -> 4
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
     value: 0xe400,
  },
  {
    shape: PieceShape.T,
    direction: PieceDirection.LEFT,
    /**
     * ◻▣◻◻ -> 4
     * ▣▣◻◻ -> c
     * ◻▣◻◻ -> 4
     * ◻◻◻◻ -> 0
     */
     value: 0x4c40,
  },
];
