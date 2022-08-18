import { Component } from './pages/common/component';

export class Router {
  constructor(private routes: Record<string, Component>) {
    window.onhashchange = () => this.handleRoute();
    this.handleRoute();
  }

  handleRoute(): void {
    this.clearPage();
    const route = window.location.hash.replace('#', '');
    const page = this.routes[route];    
    page ? page.render() : this.routes.page404.render();
  }

  clearPage(): void {
    Object.values(this.routes).forEach(page => page.remove());
  }
}
