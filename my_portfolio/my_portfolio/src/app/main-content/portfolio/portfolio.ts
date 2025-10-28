import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Project } from './components/project/project';

import { SectionDivider } from '../../shared/section-divider/section-divider';

@Component({
  selector: 'app-portfolio',
  imports: [TranslateModule, Project,  SectionDivider],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  @ViewChild('contentContainer', { static: true }) contentContainerRef!: ElementRef;
  
  constructor(private translate: TranslateService) {
  }
}
