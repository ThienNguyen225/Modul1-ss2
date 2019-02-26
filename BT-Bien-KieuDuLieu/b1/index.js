let inputVatLy;
let inputHoaHoc;
let inputSinhHoc;

inputHoaHoc = parseInt( prompt('Nhap vao diem Hoa Hoc: '));
inputVatLy = parseInt( prompt('Nhap vao diem vat Ly: '));
inputSinhHoc = parseInt(prompt('Nhap vao diem Sinh hoc: '));


let AVG = (inputSinhHoc + inputHoaHoc + inputVatLy)/3;

document.write('AVG = ' + AVG);