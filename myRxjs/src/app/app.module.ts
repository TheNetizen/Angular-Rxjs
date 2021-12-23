import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservablesComponent } from './observables/custom-observables/custom-observables.component';
import { MapComponent } from './observables/map/map.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { TakeComponent } from './observables/take/take.component';
import { RetryComponent } from './observables/retry/retry.component';
import { DebounceAndDistinctComponent } from './observables/debounce-and-distinct/debounce-and-distinct.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { Comp1Component } from './observables/subject/comp1/comp1.component';
import { Comp2Component } from './observables/subject/comp2/comp2.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { LiveSearchBarComponent } from './observables/live-search-bar/live-search-bar.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { ZipForkjoinComponent } from './observables/zip-forkjoin/zip-forkjoin.component';
@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    ListComponent,
    FromEventComponent,
    
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservablesComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceAndDistinctComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    LiveSearchBarComponent,
    CombineLatestComponent,
    ZipForkjoinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
