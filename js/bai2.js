/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   num1,num2,num3,num4,num5 : nhập 5 số thực
 * 
 * Khối 2 : Các bước xử lý
 *     B1: Khai báo biến và lưu giá trị input
 *     B2: Lập công thức tính toán
 *   trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /5 ;
 *     B3: Thông báo kết quả
 *        console.log(trungBinh)
 * 
 * Khối 3 : Output
 *      trungBinh
 * 
 */
//? B1
var num1=5;
var num2=10;
var num3=15;
var num4=20;
var num5=25;

var trungBinh = 0;
//?B2
trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /5 ;

//?B3
console.log("Trung bình là :" + trungBinh);

