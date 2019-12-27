
// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст
//  отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с 
//  тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea 
//  появляется div с уже измененным текстом.
//  Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

printDiv = text => {
    return document.write(`<div>${text}</div>`);
}

let text = 'aaaaaaaaaaaaa';
printDiv(text);

document.body.addEventListener('keydown', (e) => {
    e = e || window.event;
    let key = e.which || e.keyCode;
    let ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false);


    if (key == 69 && ctrl) {
        console.log('asdadasd');
        e.preventDefault();
        return document.write(`<textarea>${text}</textarea>`);
    }
});

document.body.addEventListener('keydown', (e) => {
    e = e || window.event;
    let key = e.which || e.keyCode;
    let ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false);


    if (key == 81 && ctrl) {
        console.log('qqqqqqqqq');
        e.preventDefault();
        return document.write(`<div>aaaaaaaaaaaaa</div>`);
    }
});



// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо
//  отсортировать данные по этой колонке.
//  Учтите, что числовые значения должны сортироваться как числа, а не как строки.

sortColumn = (num) => {
    let arr = [];
    let table = document.querySelector('.table');
    // let num = 0;
    // for (let i = 0; i < table.cells; i++) {
    //     if (document.body.table.tr.th.querySelector('.sorting')) {
    //         num = i;
    //     }
    // }
    // console.log(num);
    for (let i = 0; i < table.rows.length; i++) {
        arr.push(table.rows[i].cells[num].innerHTML);
    }
    arr.sort((a, b) => {
        return b - a;
    });
    for (let i = 0; i < arr.length; i++) {
        table.rows[i].cells[num].innerHTML = arr[i];
    }
}



// Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, 
// если зажать мышку в правом нижнем углу и тянуть ее дальше.
// let dragObject;
let element = document.getElementById('resize');
let coordinate = element.getBoundingClientRect();
let x = coordinate.x;
let y = coordinate.y;
let endX = x + coordinate.width;
let endy = y + coordinate.width;
console.log(x);
console.log(y);
console.log(endX);
console.log(endy);
console.log(element.getBoundingClientRect());
// element.onmousedown = function(e) {
//     dragObject = this;

//     return false;
// }

// document.onmouseup = function () {
//     dragObject = null;
// }