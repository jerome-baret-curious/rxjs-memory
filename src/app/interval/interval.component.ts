import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { defer, interval, of, concatMap, startWith } from 'rxjs';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-mem',
  standalone: true,
  templateUrl: './interval.component.html',
  imports: [RouterLink],
})
export class IntervalComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private readonly compType = 'interval ';
  aVarMember = '';

  ngOnInit(): void {
    const randomSource = defer(() => of(Math.round(1000 * Math.random())));

    const subscription = interval(1000)
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
