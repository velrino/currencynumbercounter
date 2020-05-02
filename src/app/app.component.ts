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
        number: 5.23,
        seconds: 10
    };

    counterNumber(endNumber: number) {
        console.log(endNumber);
        this.counter = 0;
        const self = this;
        var funcNameHere = function () {
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

        setInterval(funcNameHere, this.form.seconds);
        funcNameHere();
    }

    start() {
        console.log(this.form);
        this.counterNumber(this.form.number);
    }

    render(element, endNumber) {
        let counter = 0;
        const self = this;
        var funcNameHere = function () {
            if (counter >= Math.floor(endNumber)) {
                clearInterval(this);
                self.currencyElementInnerHTML(element, endNumber);
            } else {
                let numjdskhds = counter + 0.05;
                if (numjdskhds > 0) {
                    self.currencyElementInnerHTML(element, numjdskhds);
                }
            }
        };

        setInterval(funcNameHere, this.form.seconds);
        funcNameHere();
    }

    currencyElementInnerHTML(element, value){
        element.innerHTML = Number(value/100).toLocaleString('pt-br', {minimumFractionDigits: 2})
    }

    ngOnInit() {
        this.start();
    }
}
