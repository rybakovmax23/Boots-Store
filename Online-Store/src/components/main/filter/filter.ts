import { Favorites } from './../favorites/favorites';
import { FilterArray } from './filterArray';
import { dataProduct, changeInfo } from './../../../interfaces/interfaces';
import { Product } from './../product/product.components';
const jsonBoots = require('./../../../boots.json');

export class Filter {
    product: Product;
    filterArray: FilterArray;
    jsonBoots: dataProduct[];
    changesInCards: changeInfo;
    favorites: Favorites;

    constructor() {
        this.product = new Product();
        this.filterArray = new FilterArray();
        this.favorites = new Favorites();
        this.jsonBoots = jsonBoots;
        this.changesInCards = {
            companies: [],
            spikes: [],
            colors: [],
            popular: [],
            count: [],
            price: [],
            search: [],
            sort: ['name_abc'],
        };
    }

    init() {
        this.filterSetting();
        this.filterRange();
        this.filterSearch();
        this.sortCards();
    }

    filterSetting() {
        document.querySelector('.filter-setting')?.addEventListener('click', (event) => {
            if (localStorage.getItem('filters')) {
                this.changesInCards = JSON.parse(localStorage.getItem('filters') as string);
            }
            const target = event.target as HTMLElement;
            const dataValue = target.dataset.value as string;

            if (target.parentElement?.classList.contains('companies')) {
                target.classList.toggle('active-company');
                if (target.classList.contains('active-company')) {
                    if (!this.changesInCards.companies.includes(dataValue)) {
                        this.changesInCards.companies.push(dataValue);
                    }
                } else {
                    this.changesInCards.companies = this.changesInCards.companies.filter((el) => el !== dataValue);
                }
            }
            if (target.parentElement?.classList.contains('spikes')) {
                target.classList.toggle('active-spike');
                if (target.classList.contains('active-spike')) {
                    if (!this.changesInCards.spikes.includes(parseInt(dataValue)))
                        this.changesInCards.spikes.push(parseInt(dataValue));
                } else {
                    this.changesInCards.spikes = this.changesInCards.spikes.filter((el) => el !== parseInt(dataValue));
                }
            }

            if (target.parentElement?.classList.contains('colors')) {
                target.classList.toggle('active-color');
                if (target.classList.contains('active-color')) {
                    if (!this.changesInCards.colors.includes(dataValue)) {
                        this.changesInCards.colors.push(dataValue);
                    }
                } else {
                    this.changesInCards.colors = this.changesInCards.colors.filter((el) => el !== dataValue);
                }
            }

            if (target.classList.contains('popular')) {
                target.classList.toggle('active-popular');
                if (target.classList.contains('active-popular')) {
                    this.changesInCards.popular.push('да');
                } else {
                    this.changesInCards.popular = this.changesInCards.popular.filter((el) => el !== 'да');
                }
            }
            localStorage.setItem('filters', JSON.stringify(this.changesInCards));
            this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            this.favorites.favoritesActive();
            if (this.filterArray.filter(this.changesInCards, this.jsonBoots).length) {
                (document.querySelector('.no-product') as HTMLElement).style.display = 'none';
            } else {
                (document.querySelector('.no-product') as HTMLElement).style.display = 'block';
            }
        });
    }
    filterRange() {
        const fromSliderCount = document.querySelector('.fromSliderCount') as HTMLInputElement;
        const toSliderCount = document.querySelector('.toSliderCount') as HTMLInputElement;
        const fromSliderPrice = document.querySelector('.fromSliderPrice') as HTMLInputElement;
        const toSliderPrice = document.querySelector('.toSliderPrice') as HTMLInputElement;

        const inputListenerCount = (
            inputChange: HTMLInputElement,
            fromInput: HTMLInputElement,
            toInput: HTMLInputElement
        ) => {
            inputChange.addEventListener('input', () => {
                if (localStorage.getItem('filters')) {
                    this.changesInCards = JSON.parse(localStorage.getItem('filters') as string);
                }
                this.changesInCards.count = [parseInt(fromInput.value), parseInt(toInput.value)];
                this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
                this.favorites.favoritesActive();
                if (this.filterArray.filter(this.changesInCards, this.jsonBoots).length) {
                    (document.querySelector('.no-product') as HTMLElement).style.display = 'none';
                } else {
                    (document.querySelector('.no-product') as HTMLElement).style.display = 'block';
                }
                localStorage.setItem('filters', JSON.stringify(this.changesInCards));
            });
        };
        const inputListenerPrice = (
            inputChange: HTMLInputElement,
            fromInput: HTMLInputElement,
            toInput: HTMLInputElement
        ) => {
            inputChange.addEventListener('input', () => {
                if (localStorage.getItem('filters')) {
                    this.changesInCards = JSON.parse(localStorage.getItem('filters') as string);
                }
                this.changesInCards.price = [parseInt(fromInput.value), parseInt(toInput.value)];
                this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
                this.favorites.favoritesActive();
                if (this.filterArray.filter(this.changesInCards, this.jsonBoots).length) {
                    (document.querySelector('.no-product') as HTMLElement).style.display = 'none';
                } else {
                    (document.querySelector('.no-product') as HTMLElement).style.display = 'block';
                }
                localStorage.setItem('filters', JSON.stringify(this.changesInCards));
            });
        };
        inputListenerCount(fromSliderCount, fromSliderCount, toSliderCount);
        inputListenerCount(toSliderCount, fromSliderCount, toSliderCount);
        inputListenerPrice(fromSliderPrice, fromSliderPrice, toSliderPrice);
        inputListenerPrice(toSliderPrice, fromSliderCount, toSliderPrice);
    }
    filterSearch() {
        const search = document.querySelector('.search') as HTMLInputElement;
        search.addEventListener('input', () => {
            if (localStorage.getItem('filters')) {
                this.changesInCards = JSON.parse(localStorage.getItem('filters') as string);
            }
            this.changesInCards.search = [search.value.toLowerCase()];
            this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            this.favorites.favoritesActive();
            if (this.filterArray.filter(this.changesInCards, this.jsonBoots).length) {
                (document.querySelector('.no-product') as HTMLElement).style.display = 'none';
            } else {
                (document.querySelector('.no-product') as HTMLElement).style.display = 'block';
            }
            localStorage.setItem('filters', JSON.stringify(this.changesInCards));
        });
        document.querySelector('.cross-search')?.addEventListener('click', () => {
            this.changesInCards.search = [];

            this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            this.favorites.favoritesActive();
            localStorage.setItem('filters', JSON.stringify(this.changesInCards));
        });
    }
    sortCards() {
        const sortList = document.querySelector('.list-sort') as HTMLElement;
        sortList.addEventListener('click', (event) => {
            if (localStorage.getItem('filters')) {
                this.changesInCards = JSON.parse(localStorage.getItem('filters') as string);
            }
            const target = event.target as HTMLElement;
            this.changesInCards.sort = [target.dataset.sort as string];
            localStorage.setItem('filters', JSON.stringify(this.changesInCards));
            this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            this.favorites.favoritesActive();
        });
    }
}
