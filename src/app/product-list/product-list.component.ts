import { Component, Input } from "@angular/core";

import { products } from "../products";

import { FormControl } from "@angular/forms";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  min = 1;

  share() {
    window.alert("The product has been shared!");
  }
  join() {
    window.alert("You have joined the group!");
  }
  constructor() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
