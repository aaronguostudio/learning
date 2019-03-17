import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[app-drappable][dragEnterClass]'
})
export class DropDirective {

  @Input() dragEnterClass: string;
  constructor(private el: ElementRef, private rd: Renderer2) { }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    console.log(1)
    if(this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    console.log(1)
    if(this.el.nativeElement === ev.target) {
      // this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    console.log(3)
    if(this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragdrop', ['$event'])
  onDrop(ev: Event) {
    console.log(4)
    if(this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  // 20:00
}
