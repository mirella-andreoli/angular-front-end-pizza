/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, AfterViewInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet  class="image-container"></router-outlet>',
})
export class AppComponent implements AfterViewInit {

  constructor(private analytics: AnalyticsService) {
  }

  ngAfterViewInit(): void {
    this.analytics.trackPageViews();
  }
}
