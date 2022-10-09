/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   luongNgay : lương một ngày
 *   soNgay : số ngày làm
 * 
 * Khối 2 : Các bước xử lý
 *     B1: Khai báo biến và lưu giá trị input
 *     B2: Lập công thức tính toán
 *   tongLuong = luongNgay * soNgay;
 *     B3: thông báo kết quả (console.log())
 * 
 * Khối 3 : Output
 *    tongLuong (Tổng lương)
 * 
 * 
 */
//? B1
var luongNgay = 100000;
var soNgay = 26;

var tongLuong = 0;
//?B2
tongLuong = luongNgay * soNgay;

//?B3
console.log("Tổng lương là :" + tongLuong);

