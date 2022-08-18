import { Component } from '../component';
import './styles.scss';

export class Footer extends Component<'footer'> {
  constructor(parent: HTMLElement) {
    super(parent, 'footer', [], 'FOOTER');        
  }
}