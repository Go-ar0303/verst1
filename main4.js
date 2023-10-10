



const cart = {
    id: 's1', 's1': {
        "price": 300,
        "count": 1,
        "name": 'mini - Burgers'
    },
    id: 's2', 's2': {
        "price": 360,
        "count": 1,
        "name": 'Burgers - clasic',
    },
    id: 's3', 's3': {
        "price": 320,
        "count": 1,
        "name": 'max - Burgers'
    },
    id: 's4', 's4': {
        "price": 750,
        "count": 1,
        "name": 'Margherita'
    },
    id: 's5', 's5': {
        "price": 625,
        "count": 1,
        "name": 'Formaggio'
    },
    id: 's6', 's6': {
        "price": 560,
        "count": 1,
        "name": 'Chicken'
    },
    id: 's7', 's7': {
        "price": 800,
        "count": 1,
        "name": 'Meat - Town'
    },
    id: 's8', 's8': {
        "price": 100,
        "count": 1,
        "name": 'Lasagna'
    },
    id: 's9', 's9': {
        "price": 460,
        "count": 1,
        "name": 'Ravioli'
    },
    id: 's10', 's10': {
        "price": 320,
        "count": 1,
        "name": 'Pasta - clasic'
    },
    id: 's11', 's11': {
        "price": 550,
        "count": 1,
        "name": 'Spaghetti - Classica'
    }
};
document.onclick = event => {
    //console.log(event.target.classList);
    if (event.target.classList.contains('plus')) {
        //console.log(event.target.dataset.id)
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}
const sum = document.querySelector("#sum");

//uvelichit

const plusFunction = id => {
    let count = cart[id]['count']++;
    let price = cart[id]['price'];
    console.log(price);
    sum = count * price;
    console.log(sum);
    document.getElementById('sum').innerHTML = sum;

    renderCart();

}


//umenshit
const minusFunction = id => {
    if (cart[id]['count'] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    let count = cart[id]['count']--;
    let price = cart[id]['price'];
    console.log(price);
    sum = count * price;
    console.log(sum);
    document.getElementById('sum').innerHTML = sum;

    renderCart();
}
//udalit tovar
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}
renderCart();

const sumFunction = cart =>{
    let id = cart[id]++;
    plusFunction();

    renderCart();
}
sumFunction();



