export interface dataProduct {
    company: string;
    name: string;
    image: string;
    price: number;
    amount: number;
    numberOfSpikes: number;
    popular: string;
    color: string;
}

export interface changeInfo {
    companies: string[];
    spikes: number[];
    colors: string[];
    popular: string[];
    count: number[];
    price: number[];
    search: string[];
    sort: string[];
}
