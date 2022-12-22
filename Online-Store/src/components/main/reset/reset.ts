import { LoadPage } from './../load-page/load';
// import { Filter } from './../filter/filter';

export class Reset extends LoadPage {
    resetButtons() {
        this.resetAll();
        this.resetFilters();
    }
    resetAll() {
        document.querySelector('.reset-all')?.addEventListener('click', () => {
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
            localStorage.clear();
            localStorage.setItem('filters', JSON.stringify(this.changesInCards));
            this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            this.activeClasses();
            this.activeSort();
            (document.querySelector('.purchases') as HTMLElement).innerHTML = '0';
        });
    }
    resetFilters() {
        document.querySelector('.reset-filters')?.addEventListener('click', () => {
            this.changesInCards = {
                companies: [],
                spikes: [],
                colors: [],
                popular: [],
                count: [],
                price: [],
                search: [],
                sort: JSON.parse(localStorage.getItem('filters') as string).sort,
            };
            localStorage.setItem('filters', JSON.stringify(this.changesInCards));
            this.product.drawCards(this.filterArray.filter(this.changesInCards, this.jsonBoots));
            this.favorites.favoritesActive();
            this.activeClasses();
        });
    }
}
