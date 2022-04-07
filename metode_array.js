const dataHandling2 = (arr) => {
    console.log('Sebelum di splice : ');
    console.log(arr);
    arr.splice(1 , 1, 'Roman Alamsyah Elsharawy');
    arr.splice(2 , 1, 'Provinsi Bandar Lampung');
    arr.splice(4 , 1, 'Pria');
    arr.splice(5 , 1, 'SMA Internasional Metro');
    console.log('Sesudah di splice : ');
    console.log(arr);
    console.log('Tanggal sebelum di split : ');
    console.log(arr[3]);
    let tanggal = arr[3].split('/');
    console.log('Tanggal setelah di split : ')
    console.log(tanggal);
    let bulan = tanggal[1];
    console.log('Format Bulan Sebelum Diubah :' + bulan);
    switch (bulan) {
        case '01':
            bulan = 'Januari';
            break;
        case '02':
            bulan = 'Februari';
            break;
        case '03':
            bulan = 'Maret';
            break;
        case '04':
            bulan = 'April';
            break;
        case '05':
            bulan = 'Mei';
            break;
        case '06':
            bulan = 'Juni';
            break;
        case '07':
            bulan = 'Juli';
            break;
        case '08':
            bulan = 'Agustus';
            break;
        case '09':
            bulan = 'September';
            break;
        case '10':
            bulan = 'Oktober';
            break;
        case '11':
            bulan = 'November';
            break;  
        case '12':
            bulan = 'Desember';
            break;
        default:
            break;
    }
    console.log('Format Bulan Setelah Diubah:' + bulan);
    let date = [ ...tanggal ].sort((a,b) => {
        return b - a;
    });
    console.log('Tanggal awal sebelum di sort descending :');
    console.log(tanggal);
    console.log('Tanggal awal setelah di sort descending :');
    console.log(date);
    console.log('Tanggal awal sebelum di join dengan strip :');
    console.log(tanggal);
    console.log('Tanggal awal setelah di join dengan strip :' +
    tanggal.splice(1, 1, bulan));
    let nama = arr[1];
    console.log('Nama awal sebelum dilimit 15 karakter:' + nama)
    let nama2 = nama.slice(0, 15);
    console.log('Nama awal setelah dilimit 15 karakter:' + nama2)
    arr.splice(1, 1, nama2);
    let kota = arr[2].slice(9);
    arr.splice(2, 1, kota);
    arr.splice(3, 1, tanggal.join('/'));
    arr.splice(4, 1, 'Membaca');
    arr.splice(5, 1,);
    console.log('Hasil Akhir:');
    console.log(arr);
};

dataHandling2(['0001', 'Roman Alamsyah', 'Bandar Lampung', "21/05/1989", "Membaca"]);