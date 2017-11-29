import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <img src="http://5.196.89.92/projetaubergine.png" title="Projet Aubergine" class="home-image">
          <a class="navbar-brand">
            Projet Aubergine
          </a>
          <ul class="nav navbar-nav navbar-left">
            <li><a [routerLink]="['/home']">Home</a></li>
            <li><a [routerLink]="['/contact']">Contact</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a [routerLink]="['/connexion']">Sign in</a></li>
            <li><a [routerLink]="['/inscription']">Sign up</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <h1 class="text-center pageTitle">Take a look at a bright future.</h1><br>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
