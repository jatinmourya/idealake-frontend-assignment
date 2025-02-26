import { Component, inject } from '@angular/core';
import { ServiceService } from './service.service';
import { model } from './models';
import { FilterDataPipe } from './filter-data.pipe';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgFor } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  imports: [
    FilterDataPipe,
    FormsModule,
    NgFor,
    CurrencyPipe,
    OrderModule,
    StarRatingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'idealake-frontend';
  titleSearch = '';
  allProducts: Array<model> = [];
  service = inject(ServiceService);
  isLoading: boolean = true;
  sortBy = 'price';

  ngOnInit() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.allProducts = res;
      this.isLoading = false;
    });
  }
  myRating: number = 3;

  onRatingChange(rating: number): void {
    console.log('New rating:', rating);
  }
}
