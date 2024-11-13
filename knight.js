function knightMoves(start, end, lines = [path(start)], count = 0) {
    if (-1 > start[0] || -1 > end[0] || 8 < start[0] || 8 < end[0] || -1 > start[1] || -1 > end[1] || 8 < start[1] || 8 < end[1]) {
        console.log("wrong inputs");
        return;
    }
    count++
    let check = checkEqual(lines,end);
    if(check){
        let mypath = check.path;
        let text = `you made it in ${mypath.length - 1} moves!  Here's your path: `;
        console.log(text);
        for(let i = 0; i < mypath.length; i++) {
            console.log(mypath[i]);
        }
        return;
    }
    lines = getLine(lines);
    return knightMoves(start, end, lines, count);
}

function path(position, path = [position]) {
    return {
        path: path,
        now: position
    }
}

function checkEqual(line, end) {
    for (let i = 0; i < line.length; i++) {
        if (arraysEqual(line[i].now, end)) {
            return line[i];
        }
    }
    return null;
}

function getLine(lines) {
    let newLine = [];
    for(let i = 0; i < lines.length; i++) {
        // newLine = newLine.concat([...possible_moves(line[i])]);
        newLine.push(...possible_moves(lines[i]))
    };
    return newLine;
}

function possible_moves(mypath) {
    let arr = [];
    const [row, column] = mypath.now;
    let newLinePath;
    let newPath;
    let point;
    if (-1 < row + 1 && row + 1 < 8 && -1 < column + 2 && column + 2 < 8) {
        point = [row + 1, column + 2]
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row + 1 && row + 1 < 8 && -1 < column - 2 && column - 2 < 8) {
        point = [row + 1, column - 2];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row - 1 && row - 1 < 8 && -1 < column + 2 && column + 2 < 8) {
        point = [row - 1, column + 2];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row - 1 && row - 1 < 8 && -1 < column - 2 && column - 2 < 8) {
        point = [row - 1, column - 2];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row + 2 && row + 2 < 8 && -1 < column + 1 && column + 1 < 8) {
        point = [row + 2, column + 1];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row + 2 && row + 2 < 8 && -1 < column - 1 && column - 1 < 8) {
        point = [row + 2, column - 1];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row - 2 && row - 2 < 8 && -1 < column + 1 && column + 1 < 8) {
        point = [row - 2, column + 1];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    if (-1 < row - 2 && row - 2 < 8 && -1 < column - 1 && column - 1 < 8) {
        point = [row - 2, column - 1];
        newLinePath = [...mypath.path, point];
        newPath = path(point, newLinePath);
        arr.push(newPath);
    }
    return arr;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element == arr2[index]);
}

function test(start, end) {
    if (-1 > start[0] || -1 > end[0] || 8 < start[0] || 8 < end[0] || -1 > start[1] || -1 > end[1] || 8 < start[1] || 8 < end[1]) {
        return "wrong inputs";
    }
    return "yay";
}

knightMoves([3,3],[4,3]);