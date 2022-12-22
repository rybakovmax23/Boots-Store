import './sort.scss';

export const SORT_TEMPLATE = `<div class="sorting">
<div class="sort_tittle">По названию, от А до Я</div>
<ul class="list-sort">
    <li class="item-sort active-sort" data-sort="name_abc">По названию, от А до Я</li>
    <li class="item-sort" data-sort="name_zyx">По названию, от Я до А</li>
    <li class="item-sort" data-sort="price_123">По цене, по возрастанию</li>
    <li class="item-sort" data-sort="price_321">По цене, по убыванию</li>
    <li class="item-sort" data-sort="count_123">По количеству, по возрастанию</li>
    <li class="item-sort" data-sort="count_321">По количеству, по убыванию</li>
</ul>
</div>`;
