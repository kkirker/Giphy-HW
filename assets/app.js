$(document).ready( function() {

console.log('I am linked');

let pocketMonsters = [];
let addPocketMonster;
let buttonCount = 0;
addButtons();

function addButtons() {
pocketMonsters.forEach( function(index) {
    let button = $(`<button data-name=${index}>${index}</button>`);
    $('#page').append(button);
    console.log(index);
})
};

$('#addButton').on('click', function(e){
    //console.log('you clicked me');
    e.preventDefault();
    addPocketMonster = $("#addMonsterinput").val().trim().toLowerCase();
    if(addPocketMonster === '') {
        return;
    }
    if ($.inArray(addPocketMonster, pocketMonsters) === -1 ) {
        //checks if the monster is already in the array, if not it will add, if it is it will return.
        pocketMonsters.push(addPocketMonster);
        //addButtons();
        button = $(`<button class='button' data-name=${addPocketMonster}>${addPocketMonster}</button>`);
        console.log(addPocketMonster);
        $('#page').append(button);
        console.log(pocketMonsters);
        } else {
        //console.log(addPocketMonster);
        return;
        }
        
    
});

//needs to register when a new button is clicked and get its text value set to a variable to use as the search for api.
$(document).on('click', ".button", function() {
    console.log('button was clicked');
    let searchTerm = $(this).attr('data-name');
    console.log(searchTerm);
    getGifs(searchTerm);
});

function getGifs(searchTerm) {
let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=By34pghdv10qJ3yKmiMyBOcdauuaBY7W&limit=6";
//console.log(queryURL);
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    //console.log(queryURL);
    //console.log(response);
    
    let gif1 = response.data[0].images.downsized_still.url;
    console.log(response.data[0].images.downsized_still.url);
    console.log(gif1);

    $('#gifs-Here').html(`<div><img src=${gif1}>
    </div>`);
});
};

























});