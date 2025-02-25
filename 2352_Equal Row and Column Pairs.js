var equalPairs = function(grid) {
    let mapRow = new Map();
    let heigth = grid.length;
    let width = grid[0].length;
    let count = 0;

    // create row
    for(let i = 0; i < heigth; i++){
        let row = "";
        for(let j = 0; j < width; j++){
            row += grid[i][j] + ",";
        }
        mapRow.set(row, (mapRow.get(row) || 0) + 1)
    }

    // compare row with comlum.
    for(let j = 0; j < width; j++){
        let column = "";
        for(let i = 0; i < heigth; i++){
            column += grid[i][j] + ",";
        }
        count += (mapRow.get(column) || 0);
    }

    return count;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))