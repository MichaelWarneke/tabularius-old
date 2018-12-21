import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'tabu-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  @ViewChild('drawer') sidenav?: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeDrawer() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      if (this.sidenav) {
        this.sidenav.close();
      }
    }
  }
}
