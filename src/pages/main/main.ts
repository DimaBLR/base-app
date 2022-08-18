import './styles.scss';
import { Component } from '../common/component';

export class Main extends Component {
  constructor(parent: HTMLElement) {
    super(parent, 'div', ['main-page'], 'Im main page');
  }    
}