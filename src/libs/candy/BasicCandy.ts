import { Coordinate } from '../Coordinate';
import { AbstractCandy } from './AbstractCandy';

export class BasicCandy extends AbstractCandy {
  constructor(coord: Coordinate, colorStyle: string) {
    super(coord, colorStyle);
  }
}
