 
 fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });

    
        
      