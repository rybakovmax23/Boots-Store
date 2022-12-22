import { maxFavorites } from './../../../constants/constants';

export class Favorites {
    favoritesArray: string[];
    constructor() {
        this.favoritesArray = [];
    }
    addFavorites() {
        document.querySelector('.products')?.addEventListener('click', (event: Event) => {
            this.favoritesArray = localStorage.getItem('favorites')
                ? JSON.parse(localStorage.getItem('favorites') as string)
                : [];
            const target = event.target as HTMLElement;

            if (target.classList.contains('shop-card')) {
                target.classList.toggle('active-card');
                if (target.classList.contains('active-card')) {
                    if (this.favoritesArray.length > maxFavorites.count) {
                        target.classList.remove('active-card');
                        alert(maxFavorites.message);
                    }
                    this.favoritesArray.push(target.dataset.favorite as string);
                    localStorage.setItem('favorites', JSON.stringify(this.favoritesArray));
                } else {
                    this.favoritesArray = this.favoritesArray.filter(
                        (el) => el !== (target.dataset.favorite as string)
                    );
                    localStorage.setItem('favorites', JSON.stringify(this.favoritesArray));
                }
            }
            this.favoritesActive();
        });
    }
    favoritesActive() {
        this.favoritesArray = localStorage.getItem('favorites')
            ? JSON.parse(localStorage.getItem('favorites') as string)
            : [];
        const cards = document.querySelectorAll('.shop-card');
        cards.forEach((el) => {
            if (this.favoritesArray.includes((el as HTMLElement).dataset.favorite as string)) {
                el.classList.add('active-card');
            }
        });
        (document.querySelector('.purchases') as HTMLElement).innerHTML = this.favoritesArray.length.toString();
    }
}
