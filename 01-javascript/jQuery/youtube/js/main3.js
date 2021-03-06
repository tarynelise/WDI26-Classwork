console.log("connected");
//
// Step by Step:
// Create an array of every link on the page using document.querySelectorAll(cssSelector)
//
// Iterate through the array. In each iteration of the loop:
//
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)
// Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the DOM Review here

let $links = $( 'a' );

let thumbnailify = function () {
    let $link = $( this );

    let href = $link.attr('href');
    let thumbnailURL = youtube.generateThumbnailUrl( href );

    let $thumbnail = $( '<img />').attr( 'src', thumbnailURL );
    $link.prepend( $thumbnail );

    $link.on('click', function (event) {
      event.preventDefault(); //Don't let the browser follow the link

      const embedURL = youtube.generateEmbedUrl( $link.attr('href') );

      const embedCode = `<iframe width="560" height="315" src= ${embedURL}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

      $('#player').hide().html( embedCode ).fadeIn(300);
    });
  };


$links.each( thumbnailify );







// $( '<img />' ).attr('src', thumbnailURL).prependTO( $link );



  // node.getAttribute('href');
  // node.setAttribute('href', 'http://www.twitter.com');
  //
  // Variadic
  // $node.attr('href') //getter
  // $node.attr('href', 'http://www.twitter.com') // setter

  // let imageUrl = youtube.generateThumbnailUrl(href);
  // let thumbnail = document.createElement("img");
  // thumbnail.setAttribute("src", imageUrl);
  //
  // $links[i].appendChild(thumbnail);
