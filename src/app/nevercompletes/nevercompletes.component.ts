import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-never',
  standalone: true,
  templateUrl: './nevercompletes.component.html',
  imports: [RouterLink],
})
export class NevercompletesComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private readonly compType = 'never ';
  aVarMember = '';
  subscription?: Subscription;

  ngOnInit(): void {
    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      //subscriber.complete();
    });
    this.subscription = observable
      //.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (value) => {
          console.log(this.compType + value);
          this.aVarMember = this.compType + value;
        },
        error: (err) => {
          console.log(this.compType + err);
          this.aVarMember = this.compType + err;
        },
        complete: () => {
          console.log(this.compType + 'completed');
          this.aVarMember = this.compType + 'completed';
        },
      });
  }
}
