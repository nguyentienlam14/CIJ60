//Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. 
//Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

var a = [1, 2, 3], b = [101, 2, 1, 10];
var c = a.concat(b);
var d = c.filter(function (item, pos) {return c.indexOf(item) == pos});


document.body.innerHTML = d;