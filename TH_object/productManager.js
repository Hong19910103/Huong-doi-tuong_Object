class ProductManager {
    constructor() {
        this.products = [];
    }


    showListProduct() {
        let html = "";

        if (this.products.length === 0) {
            html += '<tr>';
            html += '<td colspan="5"> No data</td>';
            html += '</tr>';

        } else {
            for (let i = 0; i < this.products.length; i++) {
                html += '<tr>';
                html += `<td>${i + 1}</td>`;
                html += `<td>${this.products[i].getName()}</td>`;
                html += `<td>${this.products[i].getPrice()}</td>`;
                html += `<td>${this.products[i].getAuthor()}</td>`;
                html += `<td><button onclick="deleteProduct(${i})">Delete</button></td>`;
                html += '</tr>';

            }
        }

        document.getElementById('list-products').innerHTML = html;

    }

    add(name, price, author) {
        // khoi tao doi tuong product
        let product = new Product(name, price, author);
        this.products.push(product);

        //goi lai ham showlist de hien thi lai ket qua
        this.showListProduct();
        this.clearInput();

    }
    clearInput(){
        let name = document.getElementById('name').value;
        let price = document.getElementById('price').value;
        let author = document.getElementById('author').value;

    }
    destroy(index){
        this.products.splice(index,1);
        this.showListProduct();

    }

}