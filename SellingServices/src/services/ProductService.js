export default class ProductService {

    constructor(){
        this.products = []
    }

    add(product) {
        if (typeof (product) == "object") {
            this.products.push(product)
            //apiye yollarız
        }
    }

    list() {
        //apiden gelen ürünleri listeleriz
        return this.products;
    }
}