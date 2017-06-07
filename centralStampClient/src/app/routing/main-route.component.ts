/**
 * Created by seif on 6/7/17.
 */
import {Component} from "@angular/core";


@Component({
  selector: 'route-demo-app',
  template: `
<div>
<div class="mdl-layout mdl-js-layout">
 <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">DEMO ROUTING</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" [routerLink]="['home']">Home</a>
        <a class="mdl-navigation__link" [routerLink]="['contact']">Contact</a>
        <a class="mdl-navigation__link" [routerLink]="['persons']">Persons</a>
      </nav>
    </div>
    
  </header>
</div>
<div style="position: fixed;top: 100px;"><router-outlet></router-outlet></div>
</div>
`,
})
export class MainRouteComponent {

}
