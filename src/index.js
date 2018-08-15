'use strict';

window.onload = () => {
    loadFood();
    addCheckboxEvent();
}

const createNode = (element) => {
    return document.createElement(element);
}

const append = (parent, el) => {
    return parent.appendChild(el);
}

const classType = (type) => {
    switch (type) {
        case 'Vegetable':
            return 'badge-success';
            break;
        case 'Fruit':
            return 'badge-warning';
            break;
        case 'Meat':
            return 'badge-danger';
            break;
        default:
            return '';
            break;
    }
}

const color = (type) => {
    switch (type) {
        case 'Vegetable':
            return 'green';
            break;
        case 'Fruit':
            return 'orange';
            break;
        case 'Meat':
            return 'red';
            break;
        default:
            return '';
            break;
    }
}

const loadFood = () => {
    const divGroup = document.getElementById('food-group');
    const url = 'https://api.myjson.com/bins/11a4ds';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let food = data;
            return food.map(function (item) {
                let divCard = createNode('div'),
                    img = createNode('img'),
                    divBody = createNode('div'),
                    name = createNode('span'),
                    type = createNode('span'),
                    descr = createNode('p'),
                    info = createNode('a'),
                    infoSymbol = createNode('i');
                divCard.className = 'card ' + item.type;
                divCard.style = 'display:inline-block';
                img.className = 'card-img-top cropped';
                img.src = item.img;
                divBody.className = 'card-body';
                name.className = 'card-title';
                name.innerHTML = item.name;
                type.className = 'card-type badge badge-pill ' + classType(item.type);
                type.innerHTML = item.type;
                descr.className = 'card-text';
                descr.innerHTML = item.description;
                info.innerHTML = 'More info';
                info.className = 'more-info';
                infoSymbol.className = 'fa fa-angle-right fa-2x float-left';
                infoSymbol.style = 'color:' + color(item.type);

                append(divCard, img);
                append(divBody, name);
                append(divBody, type);
                append(divBody, descr);
                append(info, infoSymbol);
                append(divBody, info);
                append(divCard, divBody);
                append(divGroup, divCard);
            })
        })
        .then(function () {
            emptyNotification();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}

const emptyNotification = () => {
    if (Array.from(document.getElementsByClassName('card')).filter(e => e.style.display === 'inline-block').length === 0) {
        document.getElementById('no-items').style.display = 'block';
    } else {
        document.getElementById('no-items').style.display = 'none';
    }
}

const addCheckboxEvent = () => {
    const checkboxGroup = document.querySelectorAll("input[type=checkbox]");
    checkboxGroup.forEach(function (checkbox) {
        checkbox.addEventListener("change", () => {
            Array.from(document.getElementsByClassName(checkbox.name)).map(function (element) {
                element.style.display = checkbox.checked ? 'inline-block' : 'none';
            });
            emptyNotification();
        });
    });
}