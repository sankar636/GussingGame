
const fruits = ["Apple", "Cherry", "Watermelon", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Peach"];

const fruitPages = {
    Apple: [1, 1, 0, 0, 0, 1],
    Cherry: [1, 1, 0, 0, 1, 1],
    Watermelon: [1, 1, 1, 1, 1, 1],
    Orange: [1, 0, 0, 0, 0, 0],
    Mango: [1, 1, 1, 0, 1, 0],
    Pineapple: [0, 1, 0, 1, 0, 1],
    Grapes: [0, 0, 0, 1, 1, 1],
    Strawberry: [0, 0, 0, 1, 0, 1],
    Peach: [1, 1, 0, 1, 0, 0],
};

function showFruitList(List) {
    return `<ul>${List.map(fr => `<li>${fr}</li>`).join(' ')}</ul>`
}
let pages = 0;
let answer = [];

function renderPage() {
    const game = document.getElementById('game');
    if (pages == 0) {
        // game.innerHTML = "<div>Hello</div>"
        game.innerHTML = `<p>Think Any Fruit from this List</p>
        ${showFruitList(fruits)}
        <button onclick="nextPage()">Next</button>
        `
    }else if(pages > 0 && pages <= 6){

    }else{// page == 7(To Know The Guessed Fruit Name)

    }
}
function nextPage(){
    pages++;
    renderPage()
}

function guessAnswer(){
    
}
function resetGame(){
    pages = 0;
    answer = [];
    renderPage()
}
renderPage()

