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
  private score: number = 0;
  private roundInfo: AbstractCandy[][];
  private hasDrawn = false;

  private constructor(roundInfo: AbstractCandy[][]) {
    this.roundInfo = roundInfo;
  }

  getScore() {
    return this.score;
  }

  inspectRound() {
    console.log('inspect round');
    for (let ri = 0; ri < this.roundInfo.length; ri++) {
      for (let ci = 0; ci < this.roundInfo[ri].length; ci++) {
        const currentCandy = this.roundInfo[ri][ci];
        const horizontalCount = this.horizontal3MatchCounter(
          ri,
          ci,
          currentCandy
        );
        const verticalCount = this.vertical3MatchCounter(ri, ci, currentCandy);
        if (horizontalCount < 3 && verticalCount < 3) {
          continue;
        }

        if (horizontalCount >= 3 && verticalCount >= 3) {
        }

        if (horizontalCount >= 3) {
          return this.removeHorizontal3MatchCandies(ri, ci, currentCandy);
        } else {
        }
      }
    }
  }

  private removeHorizontal3MatchCandies(
    ri: number,
    ci: number,
    currentCandy: AbstractCandy
  ) {
    console.log(currentCandy.getColorStyle());
    this.roundInfo[ri][ci] = new BasicCandy(new Coordinate(ri, ci), 'bg-black');
  }

  private removeVertical3MatchCandies(
    ri: number,
    ci: number,
    currentCandy: AbstractCandy
  ) {
    console.log(currentCandy.getColorStyle());
    this.roundInfo[ri][ci] = new BasicCandy(new Coordinate(ri, ci), 'bg-black');
  }

  private horizontal3MatchCounter(
    ri: number,
    ci: number,
    candy: AbstractCandy,
    count = 1
  ): number {
    const leftCandy = this.toLeft(ri, ci);
    if (
      !candy ||
      !leftCandy ||
      leftCandy.getColorStyle() !== candy.getColorStyle()
    ) {
      return count;
    }
    return this.horizontal3MatchCounter(ri, ci - 1, leftCandy, count + 1);
  }

  private vertical3MatchCounter(
    ri: number,
    ci: number,
    candy: AbstractCandy,
    count = 1
  ): number {
    const upCandy = this.toUp(ri, ci);
    if (
      !candy ||
      !upCandy ||
      upCandy.getColorStyle() !== candy.getColorStyle()
    ) {
      return count;
    }
    return this.vertical3MatchCounter(ri - 1, ci, upCandy, count + 1);
  }

  private toLeft(ri: number, ci: number): AbstractCandy | null {
    if (ci === 0) {
      return null;
    }
    return this.roundInfo[ri][ci - 1];
  }

  private toUp(ri: number, ci: number): AbstractCandy | null {
    if (ri === 0) {
      return null;
    }
    return this.roundInfo[ri - 1][ci];
  }

  getHasDrawn() {
    return this.hasDrawn;
  }

  drawRound() {
    this.hasDrawn = true;
    return this.roundInfo.map((r, ri) => (
      <div key={`row-${ri}`} className="flex gap-1">
        {r.map((c) => c.draw())}
      </div>
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
