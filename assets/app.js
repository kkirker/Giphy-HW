$(document).ready( function() {

console.log('I am linked');

let pocketMonsters = ['Squirtle','charmander','bulbasaur'];
let addPocketMonster;
let buttonCount = 0;
addButtons();

function addButtons() {
pocketMonsters.forEach( function(index) {
    let button = $(`<button class='button' data-name=${index}>${index}</button>`);
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
    console.log(response);
    
    let gif1 = response.data[0].images.downsized_still.url;
    let gif2 = response.data[1].images.downsized_still.url;
    let gif3 = response.data[2].images.downsized_still.url;
    let gif4 = response.data[3].images.downsized_still.url;
    let gif5 = response.data[4].images.downsized_still.url;
    let gif6 = response.data[5].images.downsized_still.url;
    let gifAnimated1 = response.data[0].images.downsized.url;
    let gifAnimated2 = response.data[1].images.downsized.url;
    let gifAnimated3 = response.data[2].images.downsized.url;
    let gifAnimated4 = response.data[3].images.downsized.url;
    let gifAnimated5 = response.data[4].images.downsized.url;
    let gifAnimated6 = response.data[5].images.downsized.url;

    console.log(response.data[0].images.downsized_still.url);
    console.log(gif1);
    console.log(gifAnimated1);

    $('#gifs-Here').html(`<div class='gif1' data-img='${gif1}'><img src=${gif1}>
    </div>`);
    $('#gifs-Here').append(`<div class='gif2' data-img='${gif2}'><img src=${gif2}>
    </div>`);
    $('#gifs-Here').append(`<div class='gif3' data-img='${gif3}'><img src=${gif3}>
    </div>`);
    $('#gifs-Here').append(`<div class='gif4' data-img='${gif4}><img src=${gif4}>
    </div>`);
    $('#gifs-Here').append(`<div class='gif5' data-img='${gif5}'><img src=${gif5}>
    </div>`);
    $('#gifs-Here').append(`<div class='gif6' data-img='${gif6}'><img src=${gif6}>
    </div>`);

    $(document).on('click', '.gif1', function(){
        console.log('gif was clicked');
        $(this).html(`<div class='gif1' data-img='${gifAnimated1}'><img src=${gifAnimated1}></div>`)
    });    
    $(document).on('click', '.gif2', function(){
        console.log('gif was clicked');
        $(this).html(`<div class='gif2' data-img='${gifAnimated2}'><img src=${gifAnimated2}></div>`)
    });
    $(document).on('click', '.gif3', function(){
        console.log('gif was clicked');
        $(this).html(`<div class='gif3' data-img='${gifAnimated3}'><img src=${gifAnimated3}></div>`)
    });
    $(document).on('click', '.gif4', function(){
        console.log('gif was clicked');
        $(this).html(`<div class='gif4' data-img='${gifAnimated4}'><img src=${gifAnimated4}></div>`)
    });
    $(document).on('click', '.gif5', function(){
        console.log('gif was clicked');
        $(this).html(`<div class='gif5' data-img='${gifAnimated5}'><img src=${gifAnimated5}></div>`)
    });
    $(document).on('click', '.gif6', function(){
        console.log('gif was clicked');
        $(this).html(`<div class='gif6' data-img='${gifAnimated6}'><img src=${gifAnimated6}></div>`)
    });
});
};



























});