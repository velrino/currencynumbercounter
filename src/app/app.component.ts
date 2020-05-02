import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  counter: any = 0;

  counterNumber() {
    var i = 0;
    this.counter = 0;
    const endNumber = 10.57;
    const self = this;
    var funcNameHere = function() {
      if (self.counter >= Math.floor(endNumber)) {
        clearInterval(this);
        self.counter = endNumber;
      } else {
        let numjdskhds = parseFloat(self.counter) + 0.34;
        self.counter = numjdskhds;
      }
    };
    // This block will be executed 100 times.
    setInterval(funcNameHere, 70);
    funcNameHere();
  }

  ngOnInit() {
    this.counterNumber();
  }
}
