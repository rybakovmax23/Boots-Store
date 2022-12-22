import { SECTION_FILTER, NO_RESULT } from './sectionFilter.template';

export class SectionFilter {
    drawSection() {
        document.querySelector('.filters')?.insertAdjacentHTML('beforeend', SECTION_FILTER);
        document.querySelector('.main')?.insertAdjacentHTML('beforeend', NO_RESULT);
        this.checkMark();
    }
    checkMark() {
        document.querySelector('.filter-setting')?.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;

            changeCheckMark('white', 'color');
            changeCheckMark('red', 'color');
            changeCheckMark('black', 'color');
            changeCheckMark('yellow', 'color');
            changeCheckMark('popular', 'popular');

            function changeCheckMark(queryClass: string, activeClass: string) {
                if (target.classList.contains(queryClass)) {
                    if (!document.querySelector(`.${queryClass}`)?.classList.contains(`active-${activeClass}`)) {
                        (document.querySelector(`.check-mark-${queryClass}`) as HTMLImageElement).style.display =
                            'block';
                    } else {
                        (document.querySelector(`.check-mark-${queryClass}`) as HTMLImageElement).style.display =
                            'none';
                    }
                }
            }
        });
    }
}
