let data = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45 
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39 
    },
    {
        name: "Manchester united",
        points: 100,
        GD: 50 
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    }   
];

document.write("<hr>nhap vao<hr>");
document.write("<p>" + data[0].name + " _ " + data[0].points + "<p>")
document.write("<p>" + data[1].name + " _ " + data[1].points + "<p>")
document.write("<p>" + data[2].name + " _ " + data[2].points + "<p>")
document.write("<p>" + data[3].name + " _ " + data[3].points + "<p>")

data.sort(function(a, b){return b.points - a.points})

document.write("<hr>dau ra tra ve<hr>")
document.write("<p>" + data[0].name + " _ " + data[0].points + "<p>")
document.write("<p>" + data[1].name + " _ " + data[1].points + "<p>")
document.write("<p>" + data[2].name + " _ " + data[2].points + "<p>")
document.write("<p>" + data[3].name + " _ " + data[3].points + "<p>")
