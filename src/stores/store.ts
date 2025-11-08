import { makeAutoObservable } from 'mobx';
import { createContext } from "react";

class Store {
    cart = [];
    categories = [];
    products = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export const store = new Store();
export const storeContext = createContext(store);