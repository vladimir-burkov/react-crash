import { makeObservable, action, observable, computed} from "mobx"

class CartStore {

    products = [];

    inCart = (id) => this.products.some(pr => pr.id == id);

    get total() {
        return this.products.reduce((prev, current) => prev + (10000 * current.cnt), 0);
    }

    addItem = (id) => {
        if(!this.inCart(id)) {
            this.products.push({id, cnt: 1});
        }
    }

    removeItem = (id) => {
        if(this.inCart(id)) {
            this.products.splice(this.products.findIndex(pr => pr.id == id), 1);
        }
    }

    changeCnt = (id, cnt) => {
        if(this.inCart(id)) {
            const product = this.products.find(pr => pr.id == id);
            product.cnt = cnt;        
        }
    }


    constructor() {
        makeObservable(this, {
            products: observable,
            changeCnt: action,
            removeItem: action,
            total: computed,
            addItem: action
        });
    }

}

export default new CartStore();