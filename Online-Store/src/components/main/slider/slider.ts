import { colors, MAX_PERCENT_RANGE } from './../../../constants/constants';
import { SLIDER_TEMPLATE } from './slider.template';

export class Slider {
    initSlider(
        path: string,
        fromInputClass: string,
        fromSliderClass: string,
        toSliderClass: string,
        toInputClass: string,
        minValue: string,
        maxValue: string,
        step: string
    ) {
        document
            .querySelector(path)
            ?.insertAdjacentHTML(
                'beforeend',
                SLIDER_TEMPLATE(fromInputClass, fromSliderClass, toSliderClass, toInputClass, minValue, maxValue, step)
            );
        this.listeners(fromInputClass, fromSliderClass, toSliderClass, toInputClass);
    }

    listeners(fromInputClass: string, fromSliderClass: string, toSliderClass: string, toInputClass: string) {
        const fromSlider = document.querySelector(`.${fromSliderClass}`) as HTMLInputElement;
        const toSlider = document.querySelector(`.${toSliderClass}`) as HTMLInputElement;
        const fromInput = document.querySelector(`.${fromInputClass}`) as HTMLElement;
        const toInput = document.querySelector(`.${toInputClass}`) as HTMLElement;
        this.fillSlider(fromSlider, toSlider, colors.fromInput, colors.toInput, toSlider);
        this.setToggleAccessible(toSlider);
        fromSlider.addEventListener('input', () => this.controlFromSlider(fromSlider, toSlider, fromInput));
        toSlider.addEventListener('input', () => this.controlToSlider(fromSlider, toSlider, toInput));
    }

    controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLElement) {
        const [from, to] = this.getParsed(fromSlider, toSlider);
        this.fillSlider(fromSlider, toSlider, colors.fromInput, colors.toInput, toSlider);
        if (from > to) {
            fromSlider.value = `${to}`;
        }
        fromInput.innerHTML = `${fromSlider.value}`;
    }

    controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLElement) {
        const [from, to] = this.getParsed(fromSlider, toSlider);
        this.fillSlider(fromSlider, toSlider, colors.fromInput, colors.toInput, toSlider);
        this.setToggleAccessible(toSlider);
        if (to < from) {
            toSlider.value = `${from}`;
        }
        toInput.innerHTML = `${toSlider.value}`;
    }

    getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
    }

    fillSlider(
        from: HTMLInputElement,
        to: HTMLInputElement,
        sliderColor: string,
        rangeColor: string,
        controlSlider: HTMLInputElement
    ) {
        const rangeDistance = parseInt(to.max) - parseInt(to.min);
        const fromPosition = parseInt(from.value) - parseInt(to.min);
        const toPosition = parseInt(to.value) - parseInt(to.min);
        controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition / rangeDistance) * MAX_PERCENT_RANGE}%,
        ${rangeColor} ${(fromPosition / rangeDistance) * MAX_PERCENT_RANGE}%,
        ${rangeColor} ${(toPosition / rangeDistance) * MAX_PERCENT_RANGE}%, 
        ${sliderColor} ${(toPosition / rangeDistance) * MAX_PERCENT_RANGE}%, 
        ${sliderColor} 100%)`;
    }

    setToggleAccessible(currentTarget: HTMLInputElement) {
        if (currentTarget.value === currentTarget.min) {
            currentTarget.style.zIndex = '2';
        } else {
            currentTarget.style.zIndex = '0';
        }
    }
}
