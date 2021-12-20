import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { CustomObservablesComponent } from './observables/custom-observables/custom-observables.component';
import { DebounceAndDistinctComponent } from './observables/debounce-and-distinct/debounce-and-distinct.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observables/filter/filter.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { ListComponent } from './observables/list/list.component';
import { LiveSearchBarComponent } from './observables/live-search-bar/live-search-bar.component';
import { MapComponent } from './observables/map/map.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { RetryComponent } from './observables/retry/retry.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { TakeComponent } from './observables/take/take.component';
import { TapComponent } from './observables/tap/tap.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';


const routes: Routes = [
  {path:'Observables',component:ObservablesComponent,children:[
      {path:'',component:ListComponent},
      {path:'fromEvent',component:FromEventComponent},
      {path:'interval',component:IntervalComponent},
      {path:'ofFrom',component:OfFromComponent},
      {path:'toArray',component:ToArrayComponent},
      {path:'customObservables',component:CustomObservablesComponent},
      {path:'maps',component:MapComponent},
      {path:'pluck',component:PluckComponent},
      {path:'filter',component:FilterComponent},
      {path:'tap',component:TapComponent},
      {path:'take',component:TakeComponent},
      {path:'retry',component:RetryComponent},
      {path:'debounce',component:DebounceAndDistinctComponent},
      {path:'subject',component:SubjectComponent},
      {path:'replaySubject',component:ReplaySubjectComponent},
      {path:'asyncSubject',component:AsyncSubjectComponent},
      {path:'concat',component:ConcatComponent},
      {path:'mergeMap',component:MergeMapComponent},
      {path:'concatMap',component:ConcatMapComponent},
      {path:'switchMap',component:SwitchMapComponent},
      {path:'exhaustMap',component:ExhaustMapComponent},
      {path:'searchBar',component:LiveSearchBarComponent}
      
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const ArrayOfComponents=[FromEventComponent,ListComponent,ObservablesComponent,IntervalComponent,OfFromComponent]