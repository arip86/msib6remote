function tambah(){
    let frm = document.getElementById('kal');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    let total = a1 + a2;
    frm.hasil.value = total;
}
function kurang(){
    let frm = document.getElementById('kal');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    let total = a1 - a2;
    frm.hasil.value = total;
}
function kali(){
    let frm = document.getElementById('kal');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    let total = a1 * a2;
    frm.hasil.value = total;
}
function bagi(){
    let frm = document.getElementById('kal');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    let total = a1 / a2;
    frm.hasil.value = total;
}

function pangkat(){
    let frm = document.getElementById('kal');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    let total = a1 ** a2;
    frm.hasil.value = total;
}