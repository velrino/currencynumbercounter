import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  counter: any = 0;
  form = {
    number: 0
  };

  counterNumber(endNumber: number) {
    console.log(endNumber);
    var i = 0;
    this.counter = 0;
    const self = this;
    var funcNameHere = function() {
      if (self.counter >= Math.floor(endNumber)) {
        clearInterval(this);
        self.counter = endNumber;
      } else {
        let numjdskhds = parseFloat(self.counter) + 0.05;
        if (numjdskhds > 0) {
          self.counter = numjdskhds;
        }
      }
    };
    setInterval(funcNameHere, 70);
    funcNameHere();
  }

  again() {
    this.counterNumber(this.form.number);
  }

  ngOnInit() {
    //this.counterNumber(1.57);
  }
}
