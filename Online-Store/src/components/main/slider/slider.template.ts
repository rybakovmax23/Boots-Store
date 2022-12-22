import './slider.scss';

export const SLIDER_TEMPLATE = (
    fromInputClass: string,
    fromSliderClass: string,
    toSliderClass: string,
    toInputClass: string,
    minValue: string,
    maxValue: string,
    step: string
): string => {
    return `<div class="range_container">
<div class="form_control_container">
<div class="${fromInputClass}">${minValue}
  </div>
</div>
<div class="sliders_control">
  <input class="${fromSliderClass}" type="range" value="${minValue}" min="${minValue}" max="${maxValue}" step="${step}"/>
  <input class="${toSliderClass}" type="range" value="${maxValue}" min="${minValue}" max="${maxValue}"  step="${step}"/>
</div>
<div class="form_control_container">
<div class="${toInputClass}">${maxValue}
  </div>
</div>
</div>`;
};
