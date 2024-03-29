import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty',
  standalone: true,
  templateUrl: './empty.component.html',
  imports: [RouterLink],
})
export class EmptyComponent {}
