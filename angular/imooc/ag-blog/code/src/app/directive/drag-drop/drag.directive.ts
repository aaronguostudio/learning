import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[app-draggable][draggedClass]'
})
export class DragDirective {

  private _isDraggable = false;

  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }

  get isDraggable() {
    return this._isDraggable;
  }

  @Input() draggedClass: string;

  // Using ElementRef to ref current element
  // Using Renderer2 to manipulate dom
  constructor(private el: ElementRef, private rd: Renderer2) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      console.log('> rd', this.rd.addClass)
      this.rd.addClass(this.el.nativeElement, this.draggedClass)
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass)
    }
  }

}
