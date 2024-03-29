import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { startWith } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ajax } from 'rxjs/internal/ajax/ajax';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ajax',
  standalone: true,
  templateUrl: './ajax.component.html',
  imports: [RouterLink],
})
export class AjaxComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private readonly compType = 'ajax ';
  aVarMember = '';

  ngOnInit(): void {
    const subscription = ajax({
      url: 'https://httpbin.org/delay/10',
      method: 'GET',
    })
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
