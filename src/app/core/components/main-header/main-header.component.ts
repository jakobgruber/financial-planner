import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {RouterData} from '../../models/router-data.model';
import {filter, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  $routerData: Observable<RouterData>;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.$routerData = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.getCurrentChildRoute()),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      switchMap(route => route.data),
      map((data: RouterData) => {
        return this.setRouterData(data);
      }));
  }

  navigateBack() {
    this.router.navigateByUrl('..');
  }

  private getCurrentChildRoute(): ActivatedRoute {
    let route = this.route;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  private setRouterData(newRouterData: RouterData = {}) {
    return {
      hasBackButton: !!newRouterData.hasBackButton,
      title: newRouterData.title
    };
  }
}
