# Easing Animation Resources
- A website for easing concept
  https://easings.net/
- Generating cubic-bezier
  http://cubic-bezier.com


# Angular Animation key points
- trigger, state, transition, style, animation, keyframes
```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    trigger(
      'square',
      [
        state('green', style({'background-color': 'green', height: '50px', transform: 'translateY(-100%)'})),
        state('red', style({'background-color': 'red', height: '100px', transform: 'translateY(100%)'})),
        transition('green => red', animate('.8s ease-in')),
        transition('red => green', animate(5000, keyframes([
            style({transform: 'translateY(100%)'}),
            style({transform: 'translateY(980%)'}),
            style({transform: 'translateY(950%)'}),
            style({transform: 'translateY(90%)'}),
            style({transform: 'translateY(80%)'}),
            style({transform: 'translateY(60%)'}),
            style({transform: 'translateY(30%)'}),
            style({transform: 'translateY(0%)'}),
            style({transform: 'translateY(010%)'}),
            style({transform: 'translateY(-50%)'}),
            style({transform: 'translateY(-80%)'}),
            style({transform: 'translateY(-90%)'}),
            style({transform: 'translateY(-100%)'}),
            style({transform: 'translateY(-90%)'}),
            style({transform: 'translateY(-80%)'}),
            style({transform: 'translateY(-50%)'}),
            style({transform: 'translateY(010%)'}),
            style({transform: 'translateY(0%)'}),
          ])
        )),
      ]
    )
  ]
})
export class AppComponent implements OnDestroy {
}
```

```html
<div class="square" [@square]="squareState" (click)="onClick()"></div>
```

- 单独分离动画组件，不要混在 component 里面使用



# 路由动画