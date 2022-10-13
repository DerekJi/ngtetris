import { score } from "./score.helper";

describe('score.helper', () => {
  let initScore = 20;
  
  it('onPieceToBottom() should increase "units.fall"', () => {
    var calc = score.onPieceToBottom(initScore);
    expect(calc - initScore).toBe(10);
  });

  it('onRemovingFullRows() should not increase for 0 full row', () => {
    var calc = score.onRemovingFullRows(initScore, 0);
    expect(calc).toBe(initScore);
  });

  it('onRemovingFullRows() should increase 100 for 1 full row', () => {
    var calc = score.onRemovingFullRows(initScore, 1);
    expect(calc - initScore).toBe(100);
  });

  it('onRemovingFullRows() should increase 300 for 2 full rows', () => {
    var calc = score.onRemovingFullRows(initScore, 2);
    expect(calc - initScore).toBe(300);
  });

  it('onRemovingFullRows() should increase 500 for 3 full rows', () => {
    var calc = score.onRemovingFullRows(initScore, 3);
    expect(calc - initScore).toBe(500);
  });

  it('onRemovingFullRows() should increase 700 for 4 full rows', () => {
    var calc = score.onRemovingFullRows(initScore, 4);
    expect(calc - initScore).toBe(700);
  });
});