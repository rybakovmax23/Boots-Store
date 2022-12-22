import { HEADER_TEMPLATE } from './header.template';
export class Header {
    init() {
        (document.querySelector('.header') as HTMLElement).insertAdjacentHTML('beforeend', HEADER_TEMPLATE);
    }
}
