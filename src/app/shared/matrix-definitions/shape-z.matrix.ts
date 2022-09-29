import { PieceDirection } from "../models/piece-direction.enum";
import { PieceMatrix } from "../models/piece-matrix.model";
import { PieceShape } from "../models/piece-shape.enum";

export const ZShape: PieceMatrix[] = [
  {
    shape: PieceShape.Z,
    direction: PieceDirection.UP,
    /**
     * ◻▣◻◻ -> 4
     * ▣▣◻◻ -> c
     * ▣◻◻◻ -> 8
     * ◻◻◻◻ -> 0
     */
    value: 0x4c80,
  },
  {
    shape: PieceShape.Z,
    direction: PieceDirection.RIGHT,
    /**
     * ▣▣◻◻ -> c
     * ◻▣▣◻ -> 6
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0xc600,
  },
  {
    shape: PieceShape.Z,
    direction: PieceDirection.DOWN,
    /**
     * ◻▣◻◻ -> 4
     * ▣▣◻◻ -> c
     * ▣◻◻◻ -> 8
     * ◻◻◻◻
     */
     value: 0x4c80,
  },
  {
    shape: PieceShape.Z,
    direction: PieceDirection.LEFT,
    /**
     * ▣▣◻◻ -> c
     * ◻▣▣◻ -> 6
     * ◻◻◻◻ -> 0
     * ◻◻◻◻ -> 0
     */
    value: 0xc600,
  },
];