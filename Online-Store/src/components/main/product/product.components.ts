import { dataProduct } from '../../../interfaces/interfaces';
import { mainTemplate } from './product.template';

export class Product {
    drawCards(data: dataProduct[]) {
        (document.querySelector('.products') as HTMLElement).innerHTML = '';
        data.forEach((el) => {
            (document.querySelector('.products') as HTMLElement).insertAdjacentHTML(
                'beforeend',
                mainTemplate(el.name, el.image, el.price, el.amount, el.numberOfSpikes, el.color, el.popular)
            );
        });
    }
}
