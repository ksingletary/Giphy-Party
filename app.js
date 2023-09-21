console.log("Let's get this party started!");

// - Allow the user to search for a GIF and when the form is submitted, make an AJAX request -
// to the Giphy API and return a single GIF
// - Once the Giphy API has responded with data, append the GIF to the page
// - Allow the user to search for as many GIFs as they would like and keep appending them to the page
// - Allow the user to remove all of the GIFs by clicking a button
const gifcontainer = $('#container');
const inpt = $('input');


$("form").on("submit", async function(e) {
    e.preventDefault();
    if (inpt.val() === ''){
        alert('You must enter something!');
        throw new Error("Did not satisfy input requirement");
    }

    let $inptVal = $('input').val();
    inpt.val('');
    
    const res = await axios.get("http://api.giphy.com/v1/gifs/random", {
        params: {
        tag: $inptVal,
        api_key: "5aTZb37JarXQWEHZFuQV04LsfrSjMBEr",
        limit: 25
        }
    });
    appendImg(res);
    console.log(res.data.data.images.original.url);
});    


function appendImg(res){
    let $img = $('<img>');
    $img.attr('src', res.data.data.images.original.url);
    gifcontainer.append($img);
}

$("#delete").on("click", function(e){
    e.preventDefault();
    $('img').remove();
})

