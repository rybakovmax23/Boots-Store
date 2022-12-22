import './sectionFilter.scss';

export const SECTION_FILTER = `<div class="filters_container filter-setting">
<div class="filters__title">Фильтры по значению</div>
<div class="filters__company">
    <span class="name_filter">Компания:</span>
    <div class="companies" data-filter="company">
        <img
            src="./src/assets/img/adidas.png"
            alt="company"
            class="img-company adidas"
            data-value="adidas"
        />
        <img
            src="./src/assets/img/nike.png"
            alt="company"
            class="img-company nike"
            data-value="nike"
        />
        <img
            src="./src/assets/img/puma.png"
            alt="company"
            class="img-company puma"
            data-value="puma"
        />
    </div>
</div>
<div class="filters__spikes">
    <span class="name-filter">Количество шипов:</span>
    <div class="spikes" data-filter="numberOfSpikes">
        <div class="spikes-count" data-value="12">12</div>
        <div class="spikes-count" data-value="13">13</div>
    </div>
</div>
<div class="filters__color">
    <span class="name-filter">Цвет:</span>
    <div class="colors" data-filter="color">
        <div class="color-background white" data-value="белый">
            <img src="./src/assets/img/check.png" alt="check" class="img-color check-mark-white" />
        </div>
        <div class="color-background red" data-value="красный">
            <img src="./src/assets/img/check.png" alt="check" class="img-color check-mark-red" />
        </div>
        <div class="color-background black" data-value="чёрный">
            <img src="./src/assets/img/check.png" alt="check" class="img-color check-mark-black" />
        </div>
        <div class="color-background yellow" data-value="жёлтый">
            <img src="./src/assets/img/check.png" alt="check" class="img-color check-mark-yellow" />
        </div>
    </div>
</div>
<div class="filters__popular">
    <span class="name_filter">Только популярные:</span>
    <div class="popular" data-filter="popular">
        <img src="./src/assets/img/check.png" alt="check" class="check-mark-popular" />
    </div>
</div>
</div>
<div class="filters_container filter-range">
<div class="filters__title">Фильтры по диапазону</div>
<div class="filters__count">
    <span class="name-filter">Количество на складе:</span>
    <div class="filters__count-slider"></div>
</div>
<div class="filters__price">
    <span class="name-filter">Стоимость:</span>
    <div class="filters__price-slider"></div>
</div>
</div>
<div class="filters_container other-filter">
<div class="filters__search">
    <div class="filters__title">Поиск</div>
    <div class="searching"></div>
</div>
<div class="filters__sort">
    <div class="filters__title">Сортировка</div>
</div>
<div class="reset-buttons">
    <button class="button reset-filters">Сброс фильтров</button>
    <button class="button reset-all">Сброс настроек</button>
</div>
</div>
`;

export const NO_RESULT = `<div class="no-product">Извините, совпадений не обнаружено</div>`;
