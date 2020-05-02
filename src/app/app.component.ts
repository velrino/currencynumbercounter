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
    const endNumber = 10.57;
    const self = this;
    console.log(Math.floor(endNumber*100))
    var funcNameHere = function() {
      if (self.counter >= Math.floor(endNumber)) {
        clearInterval(this);
        self.counter = endNumber;
      } else {
        //self.counter++;
        //self.counter = parseFloat(self.counter/100)
        //self.counter = parseFloat((self.counter/100).toFixed(2) * 100)
        
          let numjdskhds = parseFloat(self.counter)+0.34;
   
          
          self.counter = numjdskhds;
         /***/
        console.log(self.counter)
        // (self.counter/100).toFixed(2) * 100
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
