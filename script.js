// Changing the first photo. //

var desertOne = document.getElementsByTagName("img")[0];
desertOne.getAttribute("src");
desertOne.setAttribute("src", "https://365ontheroad.files.wordpress.com/2014/11/dersert.jpg");



// Changing the Wired link to Google. //

var linkOne = document.getElementsByTagName("a")[1];
linkOne.getAttribute("href");
linkOne.setAttribute("href", "https://www.google.com");
linkOne.textContent = "Google";

