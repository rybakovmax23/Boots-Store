import {
    PRICE_123,
    PRICE_321,
    COUNT_123,
    COUNT_321,
    MAX_PERCENT_RANGE,
    twelveCount,
    thirteenCount,
    adidas,
    nike,
    puma,
} from './../../../constants/constants';
import { NAME_ABC, NAME_ZYX } from '../../../constants/constants';
import { Filter } from './../filter/filter';

export class LoadPage extends Filter {
    load() {
        window.addEventListener('load', () => {
            if (!localStorage.getItem('filters')) {
                localStorage.setItem('filters', JSON.stringify(this.changesInCards));
                this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            } else {
                this.changesInCards = JSON.parse(localStorage.getItem('filters') as string);
                this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
                this.favorites.favoritesActive();
                if (this.filterArray.filter(this.changesInCards, this.jsonBoots).length) {
                    (document.querySelector('.no-product') as HTMLElement).style.display = 'none';
                } else {
                    (document.querySelector('.no-product') as HTMLElement).style.display = 'block';
                }
            }
            this.activeClasses();
            this.activeSort();
        });
    }

    activeClasses() {
        if (this.changesInCards.companies.length) {
            this.changesInCards.companies.forEach((el) => {
                if (el === adidas) {
                    document.querySelector('.adidas')?.classList.add('active-company');
                }
                if (el === nike) {
                    document.querySelector('.nike')?.classList.add('active-company');
                }
                if (el === puma) {
                    document.querySelector('.puma')?.classList.add('active-company');
                }
            });
        } else {
            document.querySelectorAll('.img-company').forEach((el) => {
                if (el.classList.contains('active-company')) {
                    el.classList.remove('active-company');
                }
            });
        }
        if (this.changesInCards.spikes.length) {
            this.changesInCards.spikes.forEach((el) => {
                if (el === twelveCount) {
                    document.querySelector('[data-value="12"]')?.classList.add('active-spike');
                }
                if (el === thirteenCount) {
                    document.querySelector('[data-value="13"]')?.classList.add('active-spike');
                }
            });
        } else {
            document.querySelectorAll('.spikes-count').forEach((el) => {
                if (el.classList.contains('active-spike')) {
                    el.classList.remove('active-spike');
                }
            });
        }
        if (this.changesInCards.colors.length) {
            this.changesInCards.colors.forEach((el) => {
                activeColor('белый', 'white');
                activeColor('красный', 'red');
                activeColor('чёрный', 'black');
                activeColor('жёлтый', 'yellow');
                function activeColor(color: string, colorClass: string) {
                    if (el === color) {
                        document.querySelector(`.${colorClass}`)?.classList.add('active-color');
                        (document.querySelector(`.check-mark-${colorClass}`) as HTMLImageElement).style.display =
                            'block';
                    }
                }
            });
        } else {
            document.querySelectorAll('.color-background').forEach((el) => {
                if (el.classList.contains('active-color')) {
                    el.classList.remove('active-color');
                }
            });
            document.querySelectorAll('.img-color').forEach((el) => {
                if (el as HTMLImageElement) {
                    (el as HTMLImageElement).style.display = 'none';
                }
            });
        }
        if (this.changesInCards.popular.length) {
            this.changesInCards.popular.forEach((el) => {
                if (el === 'да') {
                    (document.querySelector('.popular') as HTMLElement).classList.add('active-popular');
                    (document.querySelector('.check-mark-popular') as HTMLImageElement).style.display = 'block';
                }
            });
        } else {
            if ((document.querySelector('.popular') as HTMLElement).classList.contains('active-popular')) {
                (document.querySelector('.popular') as HTMLElement).classList.remove('active-popular');
                (document.querySelector('.check-mark-popular') as HTMLImageElement).style.display = 'none';
            }
        }
        const inputValueLoad = (
            fromSliderElement: HTMLInputElement,
            toSliderElement: HTMLInputElement,
            fromValue: string,
            toValue: string,
            fromInputElement: HTMLElement,
            toInputElement: HTMLElement
        ) => {
            const from = fromSliderElement as HTMLInputElement;
            const to = toSliderElement as HTMLInputElement;
            from.value = fromValue;
            to.value = toValue;
            const rangeDistance = parseInt(to.max) - parseInt(to.min);
            const fromPosition = parseInt(from.value) - parseInt(to.min);
            const toPosition = parseInt(to.value) - parseInt(to.min);
            to.style.background = `linear-gradient(
                to right,
                rgb(198, 198, 198) 0%,
                rgb(198, 198, 198) ${(fromPosition / rangeDistance) * MAX_PERCENT_RANGE}%,
                rgb(37, 218, 165) ${(fromPosition / rangeDistance) * MAX_PERCENT_RANGE}%,
                rgb(37, 218, 165) ${(toPosition / rangeDistance) * MAX_PERCENT_RANGE}%, 
                rgb(198, 198, 198) ${(toPosition / rangeDistance) * MAX_PERCENT_RANGE}%, 
                rgb(198, 198, 198) 100%)`;
            (fromInputElement as HTMLElement).innerHTML = `${from.value}`;
            (toInputElement as HTMLElement).innerHTML = `${to.value}`;
        };

        if (this.changesInCards.count.length) {
            const [minCount, maxCount] = this.changesInCards.count;
            inputValueLoad(
                document.querySelector('.fromSliderCount') as HTMLInputElement,
                document.querySelector('.toSliderCount') as HTMLInputElement,
                minCount.toString(),
                maxCount.toString(),
                document.querySelector('.fromInputCount') as HTMLElement,
                document.querySelector('.toInputCount') as HTMLElement
            );
        } else {
            inputValueLoad(
                document.querySelector('.fromSliderCount') as HTMLInputElement,
                document.querySelector('.toSliderCount') as HTMLInputElement,
                (document.querySelector('.fromSliderCount') as HTMLInputElement).min,
                (document.querySelector('.toSliderCount') as HTMLInputElement).max,
                document.querySelector('.fromInputCount') as HTMLElement,
                document.querySelector('.toInputCount') as HTMLElement
            );
        }
        if (this.changesInCards.price.length) {
            const [minPrice, maxPrice] = this.changesInCards.count;
            inputValueLoad(
                document.querySelector('.fromSliderPrice') as HTMLInputElement,
                document.querySelector('.toSliderPrice') as HTMLInputElement,
                minPrice.toString(),
                maxPrice.toString(),
                document.querySelector('.fromInputPrice') as HTMLElement,
                document.querySelector('.toInputPrice') as HTMLElement
            );
        } else {
            inputValueLoad(
                document.querySelector('.fromSliderPrice') as HTMLInputElement,
                document.querySelector('.toSliderPrice') as HTMLInputElement,
                (document.querySelector('.fromSliderPrice') as HTMLInputElement).min,
                (document.querySelector('.toSliderPrice') as HTMLInputElement).max,
                document.querySelector('.fromInputPrice') as HTMLElement,
                document.querySelector('.toInputPrice') as HTMLElement
            );
        }
        if (this.changesInCards.search.length) {
            const searchInput = document.querySelector('.search') as HTMLInputElement;
            searchInput.value = this.changesInCards.search[0];
            searchInput.style.backgroundImage = 'none';
            (document.querySelector('.cross-search') as HTMLElement).style.display = 'block';
        } else {
            const searchInput = document.querySelector('.search') as HTMLInputElement;
            searchInput.value = '';
            searchInput.style.backgroundImage = 'url(./src/assets/img/search.svg)';
            (document.querySelector('.cross-search') as HTMLElement).style.display = 'none';
        }
    }
    activeSort() {
        if (this.changesInCards.sort.length) {
            const sortTittleLoad = (valueName: string, valueText: string) => {
                if (this.changesInCards.sort.join() === valueName) {
                    const sortTittle = document.querySelector('.sort_tittle') as HTMLElement;
                    const sortItems = document.querySelectorAll('.item-sort');
                    sortTittle.innerHTML = valueText;
                    sortItems.forEach((el) => {
                        if (el.classList.contains('active-sort')) {
                            el.classList.remove('active-sort');
                        }
                        if (el.innerHTML === sortTittle.innerHTML) {
                            el.classList.add('active-sort');
                        }
                    });
                }
            };
            sortTittleLoad(Object.keys(NAME_ABC).join(''), NAME_ABC.name_abc);
            sortTittleLoad(Object.keys(NAME_ZYX).join(''), NAME_ZYX.name_zyx);
            sortTittleLoad(Object.keys(PRICE_123).join(''), PRICE_123.price_123);
            sortTittleLoad(Object.keys(PRICE_321).join(''), PRICE_321.price_321);
            sortTittleLoad(Object.keys(COUNT_123).join(''), COUNT_123.count_123);
            sortTittleLoad(Object.keys(COUNT_321).join(''), COUNT_321.count_321);
        }
    }
}
