import { NAME_ABC, NAME_ZYX, PRICE_123, PRICE_321, COUNT_123, COUNT_321 } from './../../../constants/constants';
import { changeInfo, dataProduct } from './../../../interfaces/interfaces';

export class SortArray {
    sort(changes: changeInfo, array: dataProduct[]) {
        if (changes.sort.join() === Object.keys(NAME_ABC).join('')) {
            array == array.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
        }
        if (changes.sort.join() === Object.keys(NAME_ZYX).join('')) {
            array == array.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)).reverse();
        }
        if (changes.sort.join() === Object.keys(PRICE_123).join('')) {
            array = array.sort((a, b) => a.price - b.price);
        }
        if (changes.sort.join() === Object.keys(PRICE_321).join('')) {
            array = array.sort((a, b) => a.price - b.price).reverse();
        }
        if (changes.sort.join() === Object.keys(COUNT_123).join('')) {
            array = array.sort((a, b) => a.amount - b.amount);
        }
        if (changes.sort.join() === Object.keys(COUNT_321).join('')) {
            array = array.sort((a, b) => a.amount - b.amount).reverse();
        }

        return array;
    }
}
