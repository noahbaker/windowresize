var jacks= ["Jack", "Steve", "Mike","Nick","Noah","Bohao","Brian", "Parker", "Milton","Jonathan","Luke","James","Thelonius"];
var jills= ["Jill", "Carol", "Janet","Janice","Emma","Tyler","Kelly", "Theresa", "Sheryl","Carol","Joyce","Susan","Haley"];
var hills= ["hill", "slide", "street","stairs","ladder","wall","cliff", "creek", "pile","mountain","ramp","building","knoll"];
var pails= ["pail", "handful", "bucket","pile","crock","lump","bath", "bag", "sack","box","carful","fuckton","shitload"];
var waters= ["water", "grits", "dreams","calamari","thumbs","turkey","vegetables", "swag", "ants","despair","hope","gravy","nutella"];
var crowns= ["crown", "skull", "spleen","psyche","shins","heart","pride", "collarbone", "femur","cyst","flow","patience","marbles"];
var fetchs= ["fetch", "investigate", "spill","drink","consume","chug","smoke", "steal", "snag","break","banish","scare","murder"];
var brokes= ["broke", "ruptured", "replaced","removed","ate","tossed","sucked", "cut", "tore","pinched","tickled","swallowed","inhaled"];



//get width and height of window
var width = window.innerWidth;
var height = window.innerHeight;

// //start
// var startWidth = window.innerWidth;
// var startHeight = window.innerHeight;

//call this function everytime page size changes
$(window).resize(function () {
    
    //measure current width and height
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    //random variable
    var rand= Math.round(Math.random() * 13);
    
    //if new width is more than 20 pixels larger/smaller...change word
    //change 20 to change interval
    //Math.abs= absolute value: ex Math.abs(-3)=3
    if (Math.abs(newWidth-width) > 25) {
        
        //fill span with random word from array
        // $("#Jack").html(jacks[rand]);
        changeW();
        
        //set width = new Width
        width=newWidth;
        
    }
    
    //same thing with height
    if (Math.abs(newHeight-height) > 25) {
        
        changeH();
        
        height=newHeight;
        
    }
    
    
});


function changeW() {

    var rand= Math.round(Math.random() * 13);
    var rand2= Math.round(Math.random() * 13);
    var rand3= Math.round(Math.random() * 13);
    var rand4= Math.round(Math.random() * 13);
    var rand5= Math.round(Math.random() * 13);

    var chooser = Math.round(Math.random()*5);

    if(chooser==0) {
        $(".Jack").html(jacks[rand]);

    } if(chooser=1) {
        $(".Jack").html(jacks[rand]);
        $("#hill").html(hills[rand2]);


    } if(chooser=2) {
        $(".Jack").html(jacks[rand]);
        $("#hill").html(hills[rand2]);
        $("#pail").html(pails[rand3]);

    } if(chooser=3) {
        $(".Jack").html(jacks[rand]);
        $("#hill").html(hills[rand2]);
        $("#pail").html(pails[rand3]);
        $("#water").html(waters[rand4]);

    } if(chooser=4) {
        $(".Jack").html(jacks[rand]);
        $("#hill").html(hills[rand2]);
        $("#pail").html(pails[rand3]);
        $("#water").html(waters[rand4]);
        $("#crown").html(crowns[rand5]);

    } else {
        $(".Jack").html(jacks[rand]);
        $("#water").html(waters[rand4]);

    }

}

function changeH() {

    var rand= Math.round(Math.random() * 13);
    var rand6= Math.round(Math.random() * 13);
    var rand7= Math.round(Math.random() * 13);

    var chooser = Math.round(Math.random()*2);

    if(chooser==0) {
        $(".Jill").html(jills[rand]);
        $("#broke").html(brokes[rand7]);

    } if(chooser=1) {
        $(".Jill").html(jills[rand]);
        $("#fetch").html(fetchs[rand6]);

    } else {
        $(".Jill").html(jills[rand]);
        $("#fetch").html(fetchs[rand6]);
        $("#broke").html(brokes[rand7]);
    }

}
