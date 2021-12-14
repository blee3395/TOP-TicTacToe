const contents = document.querySelector('.contents');

const gameBoard = (() => {
    
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

const move = (e) => {
    let sq = document.querySelector('.'+ e.target.className);
    
    //Check move if possible
    if (sq.hasChildNodes()) {
        alert('There is already shit there you dumbass.')
    }
    else {
        //Make move
        sq.appendChild(setValue());

        //Check if winner

        //Next player turn

    }
   
}

const setValue = (player) => {
    let img = document.createElement('img');
    img.className = 'img';
    img.style.cssText = `
        width: 90px;
        height: 90px;
    `;

    //TODO
    //Check player turn

    //Set X
    img.src = './src/x.png';

    //Set O
    // img.src = './src/o.png';

    return img;
}

contents.appendChild(gameBoard.initBoard());