import {Component, OnInit} from '@angular/core';
import {Event, Router} from '@angular/router';
import {RouterData} from '../../models/router-data.model';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  routerData: RouterData = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {

    });
  }

  private setRouterData(newRouterData: RouterData = {}) {
    this.routerData = {
      hasBackButton: !!newRouterData.hasBackButton,
      title: newRouterData.title
    };
  }

}
