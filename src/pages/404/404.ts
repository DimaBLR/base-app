import './styles.scss';
import { Component } from '../common/component';

export class Page404 extends Component {
  constructor(parent: HTMLElement) {
    super(parent, 'div', ['page-404'], 'Извините, такая страница не найдена');
  }    
}