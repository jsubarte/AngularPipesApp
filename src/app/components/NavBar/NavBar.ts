import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './NavBar.html',
})
export class NavBar {
  routes = routes.map(
    ({ title, path }) => (
      {
        title: title ?? '',
        path: path ?? ''
      }
    )
  )
}
