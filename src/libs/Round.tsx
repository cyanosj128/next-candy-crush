import BaseCandy from '@/components/BaseCandy';

export enum CandyColor {
  'R',
  'G',
  'B',
  'Y',
}

const candyColorArr: CandyColor[] = [
  CandyColor.B,
  CandyColor.G,
  CandyColor.R,
  CandyColor.Y,
];

export class Round {
  private from: undefined | string;
  private to: undefined | string;

  private roundInfo: CandyColor[][];

  private constructor(roundInfo: CandyColor[][]) {
    this.roundInfo = roundInfo;
  }

  setFrom(rowIndex: number, colIndex: number) {
    this.from = `${rowIndex},${colIndex}`;
  }

  setTo(rowIndex: number, colIndex: number) {
    this.to = `${rowIndex},${colIndex}`;
  }

  drawRound() {
    return this.roundInfo.map((r, rowIndex) => (
      <div className="flex">
        {r.map((c, columnIndex) => {
          let bgStyle = '';
          if (c === CandyColor.R) {
            bgStyle = 'bg-[#ff0000]';
          } else if (c === CandyColor.B) {
            bgStyle = 'bg-[#0000ff]';
          } else if (c === CandyColor.Y) {
            bgStyle = 'bg-[#ffff00]';
          } else {
            bgStyle = 'bg-[#00ff00]';
          }
          return (
            <BaseCandy
              key={`r-${rowIndex}-c-${columnIndex}`}
              bgStyle={bgStyle}
              colIndex={columnIndex}
              rowIndex={rowIndex}
            />
          );
        })}
      </div>
    ));
  }

  static create() {
    const newRound: CandyColor[][] = [];
    for (let i = 0; i < 5; i++) {
      const newRow = [];
      for (let j = 0; j < 5; j++) {
        newRow.push(
          candyColorArr[Math.floor(Math.random() * candyColorArr.length)]
        );
      }
      newRound.push(newRow);
    }

    console.log(newRound);

    return new Round(newRound);
  }
}
