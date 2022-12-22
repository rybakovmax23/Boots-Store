import { Favorites } from './favorites/favorites';
import { Reset } from './reset/reset';
import { SectionFilter } from './section-filter/sectionFilter.components';
import { LoadPage } from './load-page/load';
import { Filter } from './filter/filter';
import { Search } from './search/search';
import { Slider } from './slider/slider';
import { Sort } from './sort/sort';
export class Main {
    sort: Sort;
    slider: Slider;
    search: Search;
    filter: Filter;
    loadPage: LoadPage;
    sectionFilter: SectionFilter;
    reset: Reset;
    favorites: Favorites;

    constructor() {
        this.sort = new Sort();
        this.slider = new Slider();
        this.search = new Search();
        this.filter = new Filter();
        this.loadPage = new LoadPage();
        this.sectionFilter = new SectionFilter();
        this.reset = new Reset();
        this.favorites = new Favorites();
    }
    init() {
        this.sectionFilter.drawSection();
        this.loadPage.load();
        this.slider.initSlider(
            '.filters__count-slider',
            'fromInputCount',
            'fromSliderCount',
            'toSliderCount',
            'toInputCount',
            '1',
            '10',
            '1'
        );
        this.slider.initSlider(
            '.filters__price-slider',
            'fromInputPrice',
            'fromSliderPrice',
            'toSliderPrice',
            'toInputPrice',
            '180',
            '250',
            '10'
        );
        this.search.drawSearch();
        this.sort.drawSort();
        this.filter.init();
        this.reset.resetButtons();
        this.favorites.addFavorites();
    }
}
