<!-- autcomplete -->

```html
<mat-autocomplete
  #auto="matAutocomplete"
  [displayWith]="diaplayWithBlog"
>
  <mat-option
    *ngFor="let b of filteredBlogs"
    [value]="b"
  >
    {{b.title}}
  </mat-option>
</mat-autocomplete>
```