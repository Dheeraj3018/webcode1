var creatDiv = document.createElement('div')
creatDiv.setAttribute('id', 'search-items')
creatDiv.innerHTML = `
<label for='search'><h2>Makeup items</h2></label>
<input type='search' id='search' placeholder='search..'>`
document.querySelector('body').append(creatDiv)

var newDiv1 = document.createElement('div')
newDiv1.setAttribute('id', 'products')
document.querySelector('body').append(newDiv1)

async function getMakeup() {

    var makeupApi = 'https://makeup-api.herokuapp.com/api/v1/products.json';

    try {

        var fetchApi = await fetch(makeupApi);
        var finalOut = await fetchApi.json();
        console.log(finalOut);

        for (var i of finalOut) {

            console.log(i.brand, i.name, i.price, i.product_link, i.image_link, i.description);

            var newDiv2 = document.createElement('div')
            newDiv2.setAttribute('class', 'productList')

            newDiv2.innerHTML = `
            <h3><strong style='color:black;'>Brand</strong>-${i.brand}</h3>
            <p><strong>Name</strong>-${i.name}</p>
            <p><strong>Price</strong>-${i.price}</p>
            <a href='${i.product_link}'>Product-link</a><br>
            <a href='${i.image_link}'>Image-link</a>
            <p><strong>Description</strong>-${i.description}</p>`
            document.querySelector('#products').append(newDiv2)

        }

    } catch (error) {
        console.log(error);
        console.log('error')
    }

}
getMakeup()

document.getElementById('search').addEventListener('keyup', keyupfun)

function keyupfun() {

    var a = document.querySelectorAll('.productList');

    for (var i = 0; i < a.length; i++) {
        var val = document.getElementById('search').value.toLowerCase();
        if (a[i].innerHTML.toLowerCase().indexOf(val) != -1) {
            a[i].style.display = 'block';

        } else {
            a[i].style.display = 'none';
        }

    }

}
