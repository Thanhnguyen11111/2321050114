var myString = '        Thanh dz 12 Thanh Thanh         ';
console.log (myString.length );
console.log(myString.lastIndexOf('an'))
let danhSach = ["Thanh Nguyen" , "Phat freestyle"]
console.log(danhSach[1].startsWith('Phat'))
// console.log(myString.trim())
 var languages = [
    'Java',
    'PHP',
    'Ruby',
 ];
  var languages2 = [
    'Dart',
    'PHP',
    'Ruby',
 ];
// console.log(languages.toString())
// console.log(languages.join(''))
// console.log(languages.pop()) //Xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.push('Dart', 'java')) //thêm 1 hoặc nhiều phần tử vào cuối mảng trả về số giá trị của mảng
// console.log(languages.shift())// lấy 1 phần tử ở đầu mảng
// console.log(languages.unshift('Java'))// thêm 1 phần tử vào đầu mảng
console.log(languages2.splice(1, 1, 'Dart'));//xóa số phần tử tại ví trí bắt đầu và chèn phần tủ vào vị trí bắt đầu
// console.log(languages.concat(languages2))
// console.log(languages.slice(1 ,2)) //cắt từ n đến n-1
console.log(languages2)

function writeDialog(){
   var myString = '';
   for (var param of arguments){
      myString += `${param} - `
   }
   console.log(myString)
}
writeDialog(10,10,10);
function showDialog() {
   alert('Hello');
}
showDialog();
function cong(a, b){
   return a + b;
}
console.log(cong(2,8))
//Declaration function
function showDialog(){
   
}
//Expression function
var showDialog2 = function testName(){

}
setTimeout(function testName(){

});
var myObject = {
   myFunction: function testName() {

   }
}
var emailKey = 'email';
var myInfo = {
   name: 'Thanh',
   age: 20,
   address: 'Ha Noi',
   [emailKey] : 12312313,
   getName: function(){
      return this.name;
   }
};
console.log(myInfo)

function User(firtsName, lastName, avatar) {
   this.firtsName = firtsName;
   this.lastName = lastName;
   this.avatar = avatar;
   this.getName = function(){
      return `${this.firtsName} ${this.lastName}`
   }
}
User.prototype.className = 'F8'
//thêm phương thức riêng lẻ 

var author = new User('Nguyen', 'Thanh', 'Avatar');
 var user = new User('Nguyen', 'Thanh', 'Avatar');

 console.log(author.className);
 console.log(user.getName());

 //Toán tử 3 ngôi
//  var course = {
//     name: 'Javascript',
//     coin : 250,
//  }
// if(course.coin > 0){
//     console.log(course.coin + ' Coins')
// }else{
//     console.log('Free')
// }
// var result = course.coin > 0 ? course.coin + ' Coins': 'Free';
// console.log(result);
//Vòng lặp for
// for(var i =1;i<=1000;i++){
//     console.log(i);
// }
// var myArray = [
//     'javascript',
//     'PHP',
//     'Java',
//     'Dart'
// ]
// var myInfo = {
//     name: 'Thanh',
//     age:20
// }
// var myString = 'Javascript';
// // key của array là số
// // for in duyệt key của object hoặc index của array của 1 chuỗi
// //for of duyệt các giá trị của array string 
// for (var value of myInfo){
//     console.log(value)
// }
// //while 
// var i = 0;
// while(i<10){
//     i++;
//     console.log(i);
// }
// //do /  while lặp 1 lần sau mới kiểm tra điều kiện
// var i = 0;
// do{
//     i++;
//     console.log(i);
// }while(i>10);
//Array methods
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML CSS',
        coin: 0,
    },
];
//forEach() : duyệt tất cả phần tử trong mảng
//every(): duyệt và kiểm tra tất cả điều kiện thỏa mãn trong mảng kiểm tra đúng thì duyệt tiếp không thì dừng luôn
// some(): duyệt kiểm tra diều kiện trong mảng nhưng chỉ cần kiểm tra thấy 1 phần tử thỏa mãn thì dừng luôn
// find(): duyêt tim kiếm nếu thỏa mãn điều kiện thì trả ra 1 phần tử thỏa mãn và dừng lại(chỉ 1 phần tử )
// filter(): duyệt và tím kiếm nếu thỏa mãn đk thì trả về tất cả phần tử thỏa mã
var course = courses.map(function(course){
    return {
        id: course.id,
        name: `Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
});
console.log(course)
// vòng lặp lồng nhau
// for (var i = 0; i <myArray.length;i++){
//     for(var j = 0;j<myArray[i].length;j++){
//         console.log(myArray[i][j])
//     }
// }
function myFunction(param){
    if(typeof param === 'function'){
        param('Học lập trình');
    }
}
function callBack(value){
    console.log('Value: ', value);
}
myFunction(callBack);