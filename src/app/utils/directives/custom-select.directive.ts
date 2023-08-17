import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[customSelect]',
})
export class CustomSelectDirective implements OnInit, OnDestroy {
  @Input() options$: Observable<string[]> | undefined;
  private subscription!: Subscription;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.options$) {
      this.subscription = this.options$.subscribe((options) => {
        const selectElement = this.el.nativeElement;

        while (selectElement.firstChild) {
          selectElement.removeChild(selectElement.firstChild);
        }

        options.forEach((option) => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option;
          selectElement.appendChild(optionElement);
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
