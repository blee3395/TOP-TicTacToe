const contents = document.querySelector('.contents');

let turn = true;
let count = 0;

const gameBoard = (() => {

    const resetBtn = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < 9; i++)
        {
            let sq = document.querySelector('.sq'+i);
            if (sq.hasChildNodes()) {
                let img = document.querySelector('.img');
                sq.removeChild(img);  
            }
        }
        turn = true;
        count = 0;
        document.querySelector('.win').style.display = 'none';
        
    });

    const initBoard = () => {
        const gameBoard = document.createElement('div');
        gameBoard.className = 'gameBoard';
        gameBoard.style.cssText = `
            display: flex;
            justify-content: center;
            align-content: center;        
        `;
        
        const tiles = document.createElement('div');
        tiles.className = 'tiles';
        gameBoard.appendChild(tiles);

        //Styles gameboard into grid
        tiles.style.cssText = `
            width: 500px;
            height:  500px;
        
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px 100px 100px;

            column-gap: 10px;
            row-gap: 15px;

            justify-content: center;
            align-content: center;

            background-color: black;
        `;
        
        //Assigns white squares to each grid
        for (let i = 0; i < 9; i++)
        {
            tiles.appendChild(square(i));
        }
        return gameBoard;
    }

    return {initBoard};
})();

//Module to create each square and assign it a number
const square = (num) => {
    const sq = document.createElement('div');
    sq.className = 'sq' + num;
    sq.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    
        width: 100px;
        height: 100px;
        
        background-color: white;

        border-radius: 5px;
    `;
    sq.addEventListener("click", move);

    return sq;
};

const nextTurn = () => {
    count++;
    return turn = ((turn) ? false: true);
}

const move = (e) => {
    let sq = document.querySelector('.'+ e.target.className);
    
    //Check move if possible
    if (sq.hasChildNodes()) {
        alert('There is already shit there you dumbass.');
    }
    else {
        //Make move
        sq.appendChild(setValue());

        //Check if winner
        if (check() != null) {
            console.log(check());
            endGame();
        }

        if (count >= 8) {
            document.querySelector('.win').style.visibility = 'visible';
            document.querySelector('.win').style.backdropFilter= 'blur(10px)';
            document.querySelector('.win').textContent = `Nobody f@$#&^* wins`;
        }

        //Next player turn
        nextTurn();
    }
   
}

const setValue = (player) => {
    let img = document.createElement('img');
    img.className = 'img';
    img.style.cssText = `
        width: 90px;
        height: 90px;
    `;

    //Check player turn, Assign X or O
    if (turn) {
        img.src = './src/x.png';
        img.className = 'img X'
    } 
    else {
        img.src = './src/o.png';
        img.className = 'img O';
    };

    return img;
}

const check = () => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        let sq = document.querySelector('.sq'+i);
        if (sq.hasChildNodes()) {
            let value = sq.querySelector('.img').className;
            if (/X/.test(value)) {
                arr.push(true);
            }
            else if (/O/.test(value)) {
                arr.push(false);
            }
        }
        else {
            arr.push(null);
        }
    }

    if (arr[0] == arr[3] && arr[0] == arr[6]) 
    {
        if (arr[0] == null) {
            return
        }
        return (arr[0]) ? 'X' : 'O';
    }
    if (arr[1] == arr[4] && arr[1] == arr[7]) 
    {
        if (arr[1] == null) {
            return
        }
        return (arr[1]) ? 'X' : 'O';
    }
    if (arr[2] == arr[5] && arr[2] == arr[8]) 
    {
        if (arr[2] == null) {
            return
        }
        return (arr[2]) ? 'X' : 'O';
    }
    if (arr[0] == arr[1] && arr[0] == arr[2]) 
    {
        if (arr[0] == null) {
            return
        }
        return (arr[0]) ? 'X' : 'O';
    }
    if (arr[3] == arr[4] && arr[3] == arr[5]) 
    {
        if (arr[3] == null) {
            return
        }
        return (arr[3]) ? 'X' : 'O';
    }
    if (arr[6] == arr[7] && arr[6] == arr[8]) 
    {
        if (arr[6] == null) {
            return
        }
        return (arr[6]) ? 'X' : 'O';
    }
    if (arr[0] == arr[4] && arr[0] == arr[8]) 
    {
        if (arr[0] == null) {
            return
        }
        return (arr[0]) ? 'X' : 'O';
    }
    if (arr[2] == arr[4] && arr[2] == arr[6]) 
    {
        if (arr[2] == null) {
            return
        }
        return (arr[2]) ? 'X' : 'O';
    }
}

const endGame = () => {
    // alert(`Game over bro... ${check()} has won`);
    // document.querySelector('.win').style.cssText = `
    //     visibility: visible;
    //     backdrop-filter: blur(5px) brightness(60%) contrast(80%);
    // `;
    document.querySelector('.win').style.visibility = 'visible';
    document.querySelector('.win').style.backdropFilter= 'blur(10px)';
    document.querySelector('.win').textContent = `${check()} has won`;
}

contents.appendChild(gameBoard.initBoard());