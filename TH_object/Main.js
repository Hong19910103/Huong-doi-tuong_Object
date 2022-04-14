let productManage = new ProductManager();
productManage.showListProduct();


function save() {
    //lay gia tri tu 3 o input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let author = document.getElementById('author').value;

productManage.add(name,price,author);
}
function deleteProduct(index){
    if (confirm('Are you sure?')){
        productManage.destroy(index);
    }

}