import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {


  phones: string[] = [
    '0991234567',
    '380991234567',
    '+380991234567',
    '(099)1234567',
    '099 123 45 67',
    '099 12 345 67'
  ]
  ngOnInit(): void {
  }

}
