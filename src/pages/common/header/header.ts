import { Component } from '../component';
import './styles.scss';

export class Header extends Component<'header'> {
  constructor(parent: HTMLElement) {
    super(parent, 'header');
               
  }

  addLinks(pages: string[]): void {
    pages.forEach(page => (page == 'page404') ? '' : 
      new Component(this.root, 'a', ['page-link'], page || 'main', { href: `#${page}` }));
  }
}