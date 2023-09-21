console.log("Let's get this party started!");

// - Allow the user to search for a GIF and when the form is submitted, make an AJAX request -
// to the Giphy API and return a single GIF
// - Once the Giphy API has responded with data, append the GIF to the page
// - Allow the user to search for as many GIFs as they would like and keep appending them to the page
// - Allow the user to remove all of the GIFs by clicking a button
const myBod = $('body');
const inpt = $('input');

function searchGif () {
    $("form").on("submit", async function(e) {
        e.preventDefault();

        let $inptVal = $('input').val();
        $('input').val('');
      
        const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
          params: {
            q: $inptVal,
            api_key: "5aTZb37JarXQWEHZFuQV04LsfrSjMBEr",
            limit: 100
          }
        });
        appendImg(inpt.val());
        console.log(res.data.data[0].images.original.url);
      });    
}


async function appendImg(inpt){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
        q: inpt,
        api_key: "5aTZb37JarXQWEHZFuQV04LsfrSjMBEr",
        limit: 100
        }
    });
    let $img = $('<img>');
    $img.attr('src', res.data.data[0].images.original.url);
    myBod.append($img);
}

searchGif();

