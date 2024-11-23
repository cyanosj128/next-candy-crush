import BaseCandy from '@/components/BaseCandy';
import { Coordinate } from '../Coordinate';

export abstract class AbstractCandy {
  constructor(private coord: Coordinate, private colorStyle: string) {}

  draw() {
    return <BaseCandy key={this.coord.toKey()} bgStyle={this.colorStyle} />;
  }
}
