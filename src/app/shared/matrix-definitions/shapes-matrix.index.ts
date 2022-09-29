import { IShape } from "./shape-i.matrix";
import { JShape } from "./shape-j.matrix";
import { LShape } from "./shape-l.matrix";
import { OShape } from "./shape-o.matrix";
import { SShape } from "./shape-s.matrix";
import { TShape } from "./shape-t.matris";
import { ZShape } from "./shape-z.matrix";
import { PieceMatrix } from "../models/piece-matrix.model";

export const ShapeMatrixDefinitions: PieceMatrix[] = [
  ...IShape,
  ...ZShape,
  ...SShape,
  ...TShape,
  ...LShape,
  ...JShape,
  ...OShape,
];