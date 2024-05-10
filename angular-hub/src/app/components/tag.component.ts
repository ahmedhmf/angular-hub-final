import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="inline-block px-2 text-sm leading-6 font-semibold rounded-md text-black"
      [style.background]="color()"
    >
      {{ title() }}
    </div>
  `,
})
export class TagComponent {
  title = input.required<string>();
  color = input<string>('#9051ff');
}
