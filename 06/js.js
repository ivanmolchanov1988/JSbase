


class Cart {
    constructor() {
        this.cart = [];
        this.sum = 0;
    }

    addInCart(product) {
        this.cart.push(product)
        this.sum += Number(product.price);
        alert(this.sum);
        let crt = document.getElementById("checkout");
        crt.textContent = this.sum;
        console.log(crt.textContent);
    }
}

let cart = new Cart();

document.querySelector(".item_box").addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-id");
    console.log(id);
    console.log(e.target.parentNode.querySelector(".item_title").textContent);
    console.log(e.target.parentNode.querySelector(".item_price").textContent);

    if (id) {
        let name = e.target.parentNode.querySelector(".item_title").textContent;
        let price = e.target.parentNode.querySelector(".item_price").textContent;
        cart.addInCart({ "name": name, "price": price });
    }

})

