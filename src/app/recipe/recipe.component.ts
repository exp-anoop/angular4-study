import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
    list = [
        {name: 'Apple', description: 'Nice Apple', quatity: 12},
        {name: 'Orange', description: 'Nice Orange', quatity: 12},
        {name: 'Tomatto', description: 'Nice Tomattoo', quatity: 12}
    ];
    recipie: {name: string, description: string, quatity: number};

    constructor() { }

    ngOnInit() {
    }

    onSelect(item) {
        this.recipie = item;
    }

    onDeleted(item: {name: string, description: string, quatity: number}) {
        this.list.splice(0, 1);
    }
}
