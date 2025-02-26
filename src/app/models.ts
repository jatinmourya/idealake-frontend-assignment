export class model2 {
  rate: number = 0;
  count: number = 0;
}

export class model {
  id: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category: string = '';
  image: string = '';
  rating: model2 = new model2();
}
