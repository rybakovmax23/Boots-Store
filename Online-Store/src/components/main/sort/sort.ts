import { SORT_TEMPLATE } from './sort.template';
export class Sort {
    drawSort() {
        document.querySelector('.filters__sort')?.insertAdjacentHTML('beforeend', SORT_TEMPLATE);
        this.openSortList();
        this.choiceSortItem();
    }
    openSortList() {
        const sortTittle = document.querySelector('.sort_tittle') as HTMLElement;
        const sortList = document.querySelector('.list-sort') as HTMLElement;
        document.querySelector('body')?.addEventListener('click', () => {
            const target = event?.target as HTMLElement;
            if (target.classList.contains('sort_tittle')) {
                sortTittle.classList.toggle('active-tittleSort');
                if (!sortTittle.classList.contains('active-tittleSort')) {
                    sortList.style.display = 'none';
                } else {
                    sortList.style.display = 'block';
                }
            } else {
                sortTittle.classList.remove('active-tittleSort');
                sortList.style.display = 'none';
            }
        });
    }
    choiceSortItem() {
        const sortTittle = document.querySelector('.sort_tittle') as HTMLElement;
        const sortList = document.querySelector('.list-sort') as HTMLElement;
        const sortItems = document.querySelectorAll('.item-sort');
        sortList.addEventListener('click', (event) => {
            if (sortTittle.classList.contains('active-tittleSort')) {
                sortTittle.classList.remove('active-tittleSort');
            }
            sortItems.forEach((el) => {
                if (el.classList.contains('active-sort')) {
                    el.classList.remove('active-sort');
                }
            });
            const target = event?.target as HTMLElement;
            target.classList.add('active-sort');
            sortTittle.innerHTML = target.innerHTML;
            sortList.style.display = 'none';
        });
    }
}
