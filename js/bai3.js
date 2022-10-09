/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   soTienUSD : nhập số tiền USD
 * 
 * Khối 2 : Các bước xử lý
 *     B1: Khai báo biến và lưu giá trị input
 *     B2: Lập công thức tính toán
 *    tienquydoiVND = soTienUSD * 23500;
 *     B3: Thông báo kết quả
 *        console.log(tienquydoiVND)
 * 
 * Khối 3 : Output
 *      tienquydoiVND : tiền quy đổi thành VND
 * 
 */
//? B1
var soTienUSD = 10;

var tienquydoiVND = 0;
//?B2
tienquydoiVND = soTienUSD * 23500;

//?B3
console.log("Quy đổi sang tiền Việt là :" + tienquydoiVND + "VND");

