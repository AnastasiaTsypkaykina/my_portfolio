import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionDivider } from '../../../../../shared/section-divider/section-divider';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionDivider],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class Feedback {
  feedbacks: string[] = ['anna', 'john'];
  currentIndex = 0;

  next(): void {
    if (this.currentIndex < this.feedbacks.length - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get isFirst(): boolean {
    return this.currentIndex === 0;
  }

  get isLast(): boolean {
    return this.currentIndex === this.feedbacks.length - 1;
  }
}
