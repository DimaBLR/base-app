import './styles.scss';
declare global { interface Window {app:App;} }

import { Component } from './pages/common/component';
import { Router } from './router';
import { Main } from './pages/main/main';
import { About } from './pages/about-us/about';
import { Games } from './pages/games/games';
import { Page404 } from './pages/404/404';
import { Header } from './pages/common/header/header';
import { Footer } from './pages/common/footer.ts/footer';


class App {
  header = new Header(this.parent);

  pageContainer = new Component(this.parent, 'main');

  footer = new Footer(this.parent);

  main = new Main(this.pageContainer.root);

  about = new About(this.pageContainer.root);

  games = new Games(this.pageContainer.root);

  page404 = new Page404(this.pageContainer.root);

  constructor(private parent: HTMLElement) {
    
    const pages = { '': this.main, about: this.about, games: this.games, page404: this.page404 };                
                
    new Router(pages);
    this.header.addLinks(Object.keys(pages));
  }
}

window.app = new App(document.body);