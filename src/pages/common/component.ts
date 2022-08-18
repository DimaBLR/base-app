export class Component<T extends keyof HTMLElementTagNameMap = 'div'> {
  root: HTMLElementTagNameMap[T];
  
  constructor(public parent: HTMLElement | null, tag: T, styles: string[] = [],
    content?: string, attributes?: Record<string, string>) {
      
    this.root = document.createElement(tag);      
    if (styles.length > 0) this.root.classList.add(...styles);
    if (parent) parent.appendChild(this.root);
    if (content) this.root.innerHTML = content;
    if (attributes) Object.entries(attributes).forEach(([name, value]) => this.root.setAttribute(name, value));      
  }
  
  remove(): void {
    this.root.remove();
  }

  render(): void {
    if (this.parent) this.parent.append(this.root);
  }
}