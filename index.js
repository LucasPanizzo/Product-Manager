class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts() {
        console.log(this.products)
    }
    addProduct(title,description,price,thumbnail,code,stock) {
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Error: Debes rellenar todos los campos.')
        } else{
            if(this.products.find((el) => el.code === code)){
                console.log(`El producto con el code: ${code} ya existe.`);
            } else{
                const product = {
                    id: this.#generarId(),
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                this.products.push(product)
            }
        }
    }
    getProductsByID(id) {
        const existe = this.products.find((el) => el.id === id)
        if(existe){
            console.log(existe)
        } else (console.log("Not found"))
    }
    #generarId() {
        let id = 1
        if (this.products.length !== 0) {
          id = this.products[this.products.length - 1].id + 1
        }
        return id
    }

}