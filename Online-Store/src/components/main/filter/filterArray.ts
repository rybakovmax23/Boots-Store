import { SortArray } from './sortArray';

import { changeInfo, dataProduct } from './../../../interfaces/interfaces';

export class FilterArray {
    sortArray: SortArray;
    constructor() {
        this.sortArray = new SortArray();
    }
    filter(changes: changeInfo, array: dataProduct[]) {
        if (changes.companies.length) {
            array = array.filter((item) => {
                return changes.companies.indexOf(item.company) !== -1;
            });
        }
        if (changes.spikes.length) {
            array = array.filter((item) => {
                return changes.spikes.indexOf(item.numberOfSpikes) !== -1;
            });
        }
        if (changes.colors.length) {
            array = array.filter((item) => {
                return changes.colors.indexOf(item.color) !== -1;
            });
        }
        if (changes.popular.length) {
            array = array.filter((item) => {
                return item.popular === 'да';
            });
        }
        if (changes.price.length) {
            const [max, min] = changes.price;
            array = array.filter((item) => {
                return item.price >= max && item.price <= min;
            });
        }
        if (changes.count.length) {
            const [max, min] = changes.count;
            array = array.filter((item) => {
                return item.amount >= max && item.amount <= min;
            });
        }
        if (changes.search.length) {
            array = array.filter((item) => {
                return item.name.toLowerCase().includes(changes.search.join());
            });
        }
        array = this.sortArray.sort(changes, array);
        return array;
    }
}
