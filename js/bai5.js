/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   num : số nguyên dương có 2 chữ số
 * 
 * 
 * Khối 2 : Các bước xử lý
 *     B1: Khai báo biến và lưu giá trị input
 *     B2: Lập công thức tính toán
 *     soHangchuc= num/10;
 *     soHangdonvi = num%10;
 * 
 *      tongKyso = soHangchuc + soHangdonvi;
 *     B3: Thông báo kết quả
 *        console.log(tongKyso)
 * 
 * Khối 3 : Output
 *     tongKyso : Tổng 2 ký số
 * 
 */
//? B1
var num = 78;

var soHangchuc = 0;
var soHangdonvi = 0;

//?B2

    soHangchuc= Math.floor(num/10); // Lấy phần nguyên
    soHangdonvi = num%10;
 
    tongKyso = soHangchuc + soHangdonvi; 

//?B3
console.log("Tổng 2 ký số là :" + tongKyso);



