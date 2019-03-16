import { ChangeDetectorRef, Component, OnDestroy, Inject} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { cardAnim } from './anims/card.anim'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    cardAnim
  ]
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title = 'code';
  cardState: string;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    @Inject('BASE_CONFIG') config
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    console.log('> inject', config);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
