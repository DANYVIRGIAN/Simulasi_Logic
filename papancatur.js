for (let i = 1; i <= 8; i++){
let baris = '';
    if (i % 2 === 0){
        for (let j = 1; j <= 8; j++){
            if (j % 2 === 0) {
                baris += ' ';
            }
            else {
                baris += '#';
            }
        }
    }
    else {
        for (let j = 1; j <= 8; j++){
            if (j % 2 === 0) {
                baris += '#';
            }
            else {
                baris += ' ';
            }
        }
    }
    console.log(baris);
}