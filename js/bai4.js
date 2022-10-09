/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   chieuDai, chieuRong : nhập chiều dài, rộng hình chữ nhật
 * 
 * Khối 2 : Các bước xử lý
 *     B1: Khai báo biến và lưu giá trị input
 *     B2: Lập công thức tính toán
 *   dienTich = chieuDai * chieuRong;
 *   chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
 *     B3: Thông báo kết quả
 *        console.log(dienTich, chuVi);
 * 
 * Khối 3 : Output
 *      Diện tích, Chu vi.
 * 
 */
//? B1
var chieuDai = 3;
var chieuRong = 4;

var dienTich = 0;
var chuVi = 0;

//?B2

    dienTich = chieuDai * chieuRong;
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2; 

//?B3
console.log("Diện tích là", dienTich);
console.log("Chu vi là", chuVi);

