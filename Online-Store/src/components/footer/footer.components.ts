import { FOOTER_TEMPlATE } from './footer.template';

export class Footer {
    init() {
        document.querySelector('.footer')?.insertAdjacentHTML('beforeend', FOOTER_TEMPlATE);
    }
}
