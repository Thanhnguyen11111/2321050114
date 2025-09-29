// var myString = '        Thanh dz 12 Thanh Thanh         ';
// console.log (myString.length );
// console.log(myString.lastIndexOf('an'))
// let danhSach = ["Thanh Nguyen" , "Phat freestyle"]
// console.log(danhSach[1].startsWith(''))
// console.log(myString.trim())
//  var languages = [
//     'Java',
//     'PHP',
//     'Ruby',
//  ];
//   var languages2 = [
//     'Dart',
//     'PHP',
//     'Ruby',
//  ];
// console.log(languages.toString())
// console.log(languages.join(''))
// console.log(languages.pop()) //Xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.push('Dart', 'java')) //thêm 1 hoặc nhiều phần tử vào cuối mảng trả về số giá trị của mảng
// console.log(languages.shift())// lấy 1 phần tử ở đầu mảng
// console.log(languages.unshift('Java'))// thêm 1 phần tử vào đầu mảng
// languages.splice(1, 1, 'Dart')
// console.log(languages.concat(languages2))
// console.log(languages.slice(1 ,2)) //cắt từ n đến n-1
// console.log(languages)

// function writeDialog(){
//    var myString = '';
//    for (var param of arguments){
//       myString += `${param} - `
//    }
//    console.log(myString)
// }
// writeDialog(10,10,10);
// function showDialog() {
//    alert('Hello');
// }
// showDialog();
// function cong(a, b){
//    return a + b;
// }
// var result = cong(2,8)
// console.log(result)
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
var author = new User('Nguyen', 'Thanh', 'Avatar');
 var user = new User('Nguyen', 'Thanh', 'Avatar');

 console.log(author.className);
 console.log(user.getName());
