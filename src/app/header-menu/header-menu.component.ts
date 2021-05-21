import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent implements OnInit {
  menuArr: string[]=['Bakery','Fruit and vegetables','Meat and fish','Drinks','Kitchen','Special nutrition','Baby','Pharmacy']
  media: MediaQueryList
  constructor(private cd: ChangeDetectorRef) { }
  showMenu: boolean = false
  ngOnInit(): void {

  }
  detectWindowSize(minSize: number, maxSize: number) {
    this.media = window.matchMedia(`(min-width: ${minSize}px) and (max-width: ${maxSize}px)`)
    this.media.addEventListener<'change'>('change', () => this.cd.detectChanges())

    return this.media.matches
  }
  onClick(option: string){
    console.log(option)
  }
}
