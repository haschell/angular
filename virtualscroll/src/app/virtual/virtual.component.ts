import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "app-virtual",
  templateUrl: "./virtual.component.html",
  styleUrls: ["./virtual.component.css"]
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;
  personas = Array(500).fill(0);

  constructor() {}

  ngOnInit() {}

  irInicio() {
    this.viewport.scrollToIndex(this.personas[0]);
  }
  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
  irMitad() {
    this.viewport.scrollToIndex(this.personas.length/2);
  }
}
