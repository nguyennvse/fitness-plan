import {
  Directive,
  ElementRef,
  HostListener,
  input,
  output,
} from '@angular/core';
import {
  filter,
  from,
  fromEvent,
  map,
  Subject,
  takeUntil,
  throttleTime,
} from 'rxjs';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true,
})
export class InfiniteScrollDirective {
  threshold = input<number>(100);
  srollToBottom = output<void>();
  private destroySubject = new Subject();
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    fromEvent(this.element.nativeElement, 'scroll')
      .pipe(throttleTime(150), takeUntil(this.destroySubject))
      .subscribe(() => {
        const element: HTMLElement = this.element.nativeElement;
        const scrollPosition = element.scrollTop + element.clientHeight;
        const scrollHeight = element.scrollHeight;
        if (scrollHeight - scrollPosition < this.threshold()) {
          this.srollToBottom.emit();
        }
      });
  }

  ngOnDetroy() {
    this.destroySubject.next(true);
  }
  // @HostListener('scroll', ['$event'])
  // onScroll(event: Event) {
  //   const element: HTMLElement = this.element.nativeElement;

  //   const scrollPosition = element.scrollTop + element.clientHeight;
  //   const scrollHeight = element.scrollHeight;
  //   if (scrollHeight - scrollPosition < this.threshold()) {
  //     console.log('srollToBottom');
  //     this.srollToBottom.emit();
  //   }
  // }
}
