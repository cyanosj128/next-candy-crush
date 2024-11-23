import { AbstractCandy } from './candy/AbstractCandy';
import { BasicCandy } from './candy/BasicCandy';
import { Coordinate } from './Coordinate';

export enum CandyColor {
  'R' = 'bg-[#ff0000]',
  'G' = 'bg-[#00ff00]',
  'B' = 'bg-[#0000ff]',
  'Y' = 'bg-[#ffff00]',
  'C' = 'bg-[#00ffff]',
}

const candyColorArr: CandyColor[] = [
  CandyColor.B,
  CandyColor.G,
  CandyColor.R,
  CandyColor.Y,
  CandyColor.C,
];

export class Round {
  private roundInfo: AbstractCandy[][];

  private constructor(roundInfo: AbstractCandy[][]) {
    this.roundInfo = roundInfo;
  }

  drawRound() {
    return this.roundInfo.map((r, ri) => (
      <div className='flex gap-1'>{r.map((c, ci) => c.draw())}</div>
    ));
  }

  static create() {
    const newRound: AbstractCandy[][] = [];
    for (let i = 0; i < 8; i++) {
      const newRow = [];
      for (let j = 0; j < 8; j++) {
        const color =
          candyColorArr[Math.floor(Math.random() * candyColorArr.length)];

        newRow.push(new BasicCandy(new Coordinate(i, j), color));
      }
      newRound.push(newRow);
    }

    return new Round(newRound);
  }
}
