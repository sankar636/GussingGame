
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

// function renderPage() {
//     const game = document.getElementById('game');
//     if (pages == 0) {
//         // game.innerHTML = "<div>Hello</div>"
//         game.innerHTML = `<p>Think Any Fruit from this List</p>
//         ${showFruitList(fruits)}
//         <button onclick="nextPage()" id="nextBtn">Next</button>
//         `
//     } else if (pages > 0 && pages <= 6) {
//         console.log("Page 2");
//         const subSetFruit = fruits.filter(fruit =>
//             fruitPages[fruit][pages - 1] === 1
//         );
//         game.innerHTML = `
//         <p>Is Present in this Page</p>
//         ${showFruitList(subSetFruit)}
//         <button onclick="guessAnswer(true)">Yes</button>
//         <button onclick="guessAnswer(false)">No</button>
//         `
//     } else if (pages == 7) {// page == 7(To Know The Guessed Fruit Name)
//         const result = Object.keys(fruitPages).find(fruit => fruitPages[fruit].every((bit, i) => bit === answer[i]))
//         game.innerHTML = `
//             ${`<p>${result}</p>`}
//                 <button onclick="resetGame()">Reset Game</button>
//         `
//         // ${console.log(result)}
//     }
// }

function renderPage() {
    const game = document.getElementById('game');
    game.classList.add('fade-out');

    setTimeout(() => {
        if (pages === 0) {
            game.innerHTML = `
                <div id="content">
                    <p>Think Any Fruit from this List</p>
                    ${showFruitList(fruits)}
                    <button onclick="nextPage()" id="nextBtn">Next</button>
                </div>
            `;
        } else if (pages > 0 && pages <= 6) {
            const subSetFruit = fruits.filter(fruit =>
                fruitPages[fruit][pages - 1] === 1
            );
            game.innerHTML = `
                <div id="content">
                    <p>Is your fruit present on this page?</p>
                    ${showFruitList(subSetFruit)}
                    <button onclick="guessAnswer(true)">Yes</button>
                    <button onclick="guessAnswer(false)">No</button>
                </div>
            `;
        } else if (pages === 7) {
            const result = Object.keys(fruitPages).find(fruit =>
                fruitPages[fruit].every((bit, i) => bit === answer[i])
            );
            game.innerHTML = `
                <div id="content">
                    <h2>Your fruit is: ${result}</h2>
                    <button onclick="resetGame()">Reset Game</button>
                </div>
            `;
        }

        game.classList.remove('fade-out');
        game.classList.add('fade-in');

        // setTimeout(() => {
        //     game.classList.remove('fade-in');
        // }, 500);

    }, 1000);
}

function nextPage() {
    pages++;
    renderPage();
}

function guessAnswer(isYes) {
    answer.push(isYes ? 1 : 0)
    nextPage()
}
function resetGame() {
    pages = 0;
    answer = [];
    renderPage()
}
renderPage()

