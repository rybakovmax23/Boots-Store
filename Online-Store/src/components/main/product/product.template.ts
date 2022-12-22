import './product.scss';

export const mainTemplate = (
    name: string,
    imageSrc: string,
    price: number,
    amount: number,
    spikes: number,
    color: string,
    popular: string
): string => {
    return `
    <div class="shop-card" data-favorite="${name}">
    <div class="product product-name">${name}</div>
    <div class="product product-image_wrapper">
    <img src="${imageSrc}" alt="boots" class="product-image">
    </div>
    <div class="product product-price">Цена: ${price}$</div>
    <div class="product product-amount">Количество: ${amount}</div>
    <div class="product product-spikes">Количество шипов: ${spikes}</div>
    <div class="product product-color">Цвет: ${color}</div>
    <div class="product product-popular">Популярная модель: ${popular}</div>
</div>`;
};
