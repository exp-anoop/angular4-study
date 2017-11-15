import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = ['Home', 'Products', 'Category', 'Cart'];

  title = 'app';


  json = {
    "message": "3 record(s) found",
    "status": 200,
    "data": {
      "searchRequest": "/",
      "startAt": 0,
      "numResults": 10,
      "totalResults": 3,
      "activeCount": 2,
      "inactiveCount": 1,
      "foodItems": [
        {
          "id": 2,
          "nameEn": "Biriyani",
          "nameAr": "البرياني",
          "price": "2.000",
          "currency": "KWD",
          "statusId": 0,
          "statusText": "Inactive",
          "addonCount": 1,
          "cuisine": {
            "id": 1,
            "nameEn": "South Indian",
            "nameAr": "جنوب الهند"
          }
        },
        {
          "id": 1,
          "nameEn": "Chocolate Ice Cream",
          "nameAr": "آيس كريم شوكولاته",
          "price": "1.000",
          "currency": "KWD",
          "statusId": 1,
          "statusText": "Active",
          "addonCount": 0,
          "cuisine": {
            "id": 2,
            "nameEn": "Scottish",
            "nameAr": "الاسكتلندي"
          }
        },
        {
          "id": 3,
          "nameEn": "Fried Chicken",
          "nameAr": "دجاج مقلي",
          "price": "3.000",
          "currency": "KWD",
          "statusId": 1,
          "statusText": "Active",
          "addonCount": 1,
          "cuisine": {
            "id": 1,
            "nameEn": "South Indian",
            "nameAr": "جنوب الهند"
          }
        }
      ]
    }
  };

  data = JSON.stringify(this.json);
}
