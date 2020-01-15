import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CheckboxModule,} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {PanelModule,} from "primeng/panel";
import {SpinnerModule} from "primeng/spinner";
import {AppComponent} from "./app.component";
import {AppEffects} from "./store/app.effects";
import {reducers} from "./store/app.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      initialState: {},
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({}),
    ButtonModule,
    PanelModule,
    CheckboxModule,
    SpinnerModule,
    CardModule,
    KeyFilterModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
