let bio = new Array("0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca");
//splice array
console.log("Sebelum di splice :");
console.log(bio);
console.log("Sesudah di splice :");
bio.splice(1, 1, "Roman Alamsyah Elsharawy");
bio.splice(2, 1, "Provinsi Bandar Lampung");
bio.splice(4, 1, "Pria");
bio.splice(5, 0, "SMA International Metro");
console.log(bio);

//split array
console.log("Sebelum di split :");
bio1 = bio.toString().split("/");
console.log(bio1);

console.log("Sesudah di split :");
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
bio1[1] = months[bio1[1] - 1];
console.log(bio1);


let bio2 = new Array(bio1.join("-"));
console.log(bio2);

let bio3 = bio2.toString().split(",");
console.log(bio3);

let temp = bio3[1].slice(0, 15);
console.log(temp);

bio3.splice(1, 1, temp);
console.log(bio3);
