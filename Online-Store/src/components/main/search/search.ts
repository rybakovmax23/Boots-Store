import { SEARCH_TEMPLATE } from './search.template';
export class Search {
    drawSearch() {
        document.querySelector('.searching')?.insertAdjacentHTML('beforeend', SEARCH_TEMPLATE);
        this.deleteLettersCross();
    }

    deleteLettersCross() {
        const inputSearch = document.querySelector('#search') as HTMLInputElement;
        const cross = document.querySelector('.cross-search') as HTMLElement;
        inputSearch.addEventListener('input', () => {
            if (inputSearch.value.length) {
                cross.style.display = 'block';
                inputSearch.style.backgroundImage = 'none';
            } else {
                cross.style.display = 'none';
                inputSearch.style.backgroundImage = 'url(./src/assets/img/search.svg)';
            }
        });
        cross.addEventListener('click', () => {
            inputSearch.value = '';
            cross.style.display = 'none';
            inputSearch.style.backgroundImage = 'url(./src/assets/img/search.svg)';
        });
    }
}
