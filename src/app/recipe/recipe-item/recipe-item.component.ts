import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Output() onDelete = new EventEmitter<{name: string, description: string, quatity: number}>();
    @Input() recipe: {name: string, description: string, quatity: number};

    constructor() { }

    ngOnInit() {
    }

    onRemove() {
        this.onDelete.emit(this.recipe);
    }
}
