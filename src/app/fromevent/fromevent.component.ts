import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { startWith, fromEvent } from 'rxjs';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-fromevent',
  standalone: true,
  templateUrl: './fromevent.component.html',
  imports: [RouterLink],
})
export class FromeventComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private readonly compType = 'fromEvent ';
  aVarMember = '';

  ngOnInit(): void {
    const subscription = fromEvent(document, 'click')
      .pipe(
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
