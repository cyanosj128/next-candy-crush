export class Coordinate {
  constructor(private x: number, private y: number) {}

  getCoord(): number[] {
    return [this.x, this.y];
  }

  toKey(): string {
    return `${this.x}-${this.y}`;
  }
}
