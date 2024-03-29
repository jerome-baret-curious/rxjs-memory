import { Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { EmptyComponent } from './empty/empty.component';
import { AjaxComponent } from './ajax/ajax.component';
import { IntervalComponent } from './interval/interval.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { NevercompletesComponent } from './nevercompletes/nevercompletes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/empty', pathMatch: 'full' },
  { path: 'ajax', component: AjaxComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'fromevent', component: FromeventComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'never', component: NevercompletesComponent },
  { path: 'timer', component: TimerComponent },
];
