import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { defer, of, timer, concatMap, startWith } from 'rxjs';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-mem',
  standalone: true,
  templateUrl: './timer.component.html',
  imports: [RouterLink],
})
export class TimerComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private readonly compType = 'timer ';
  aVarMember = '';

  ngOnInit(): void {
    const randomSource = defer(() => of(Math.round(1000 * Math.random())));

    const subscription = timer(2000, 1000)
      .pipe(
        concatMap(() => randomSource),
        startWith('started'),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (value) => {
          console.log(this.compType + value);
          //this.aVarMember = this.compType + value;
        },
        error: (err) => {
          console.log(this.compType + err);
          //this.aVarMember = this.compType + err;
        },
        complete: () => {
          console.log(this.compType + 'completed');
          //this.aVarMember = this.compType + 'completed';
        },
      });
  }
}
