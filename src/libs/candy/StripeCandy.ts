import { Coordinate } from '../Coordinate';
import { AbstractCandy } from './AbstractCandy';

export class StripeCandy extends AbstractCandy {
  constructor(coord: Coordinate, colorStyle: string) {
    super(coord, colorStyle);
  }
}
