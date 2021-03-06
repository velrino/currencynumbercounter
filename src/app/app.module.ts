import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgxMaskModule } from "ngx-mask";

registerLocaleData(localePt);

@NgModule({
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot()],
  declarations: [AppComponent, HelloComponent],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
