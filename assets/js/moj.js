/**/
let arrDealsIName=['Caribbean','Switzerland','France','Thailand'];
let arrDealsIPop=['44.48 M','8.66 M','67.41 M','69.86 M'];
let arrDealsILink=['caribbean','switzerland','france','thailand'];
let arrDealsITer=['275.400 KM','41.290 KM','551.500 KM','513.120 KM'];
let arrDealsIPrice=['$950','$850','$650','$450'];
let ispisDealsN="";
for (let i = 1; i <= arrDealsIName.length; i++) {
    ispisDealsN+='<div id="top-banner-'+i+'" class="banner">'+
        '<div class="banner-inner-wrapper header-text">'+
            '<div class="main-caption">'+
                '<h2>Take a Glimpse Into The Beautiful Country Of:</h2>'+
                '<h1>'+arrDealsIName[i-1]+'</h1>'+
                '<div class="border-button"><a href="'+arrDealsILink[i-1]+'.html">Go There</a></div>'+
            '</div>'+
            '<div class="container">'+
              '<div class="row">'+
                '<div class="col-lg-12">'+
                    '<div class="more-info">'+
                        '<div class="row">'+
                            '<div class="col-lg-3 col-sm-6 col-6">'+
                                '<i class="fa fa-user"></i>'+
                                '<h4><span>Population:</span><br>'+arrDealsIPop[i-1]+'</h4>'+
                            '</div>'+
                            '<div class="col-lg-3 col-sm-6 col-6">'+
                                '<i class="fa fa-globe"></i>'+
                                '<h4><span>Territory:</span><br>'+arrDealsITer[i-1]+'<em>2</em></h4>'+
                            '</div>'+
                            '<div class="col-lg-3 col-sm-6 col-6">'+
                                '<i class="fa fa-home"></i>'+
                                '<h4><span>MIN Price:</span><br>'+arrDealsIPrice[i-1]+'</h4>'+
                            '</div>'+
                                '<div class="col-lg-3 col-sm-6 col-6">'+
                                    '<div class="main-button">'+
                                        '<a href="'+arrDealsILink[i-1]+'.html">Explore More</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
}
document.getElementById("slide").innerHTML=ispisDealsN;

let arrDealsIContinent=['North America','Europe','Europe','Asia'];
let arrDealsIDetails=['The Caribbean is a beautiful region in the middle of the Americas centered around the Caribbean Sea in the North Atlantic Ocean.',
                    'Switzerland, officially the Swiss Confederation, is a landlocked country located at the intersection of Central, Western, and Southern Europe.',
                    'France, officially the French Republic, is a country primarily located in Western Europe.',
                    'Thailand, officially the Kingdom of Thailand, and formerly known as Siam until 1939, is a country located in mainland Southeast Asia.'];
let ispisDealsD="";
for (let i = 1; i <= arrDealsIName.length; i++) {
ispisDealsD+='<div class="col-lg-12">'+
        '<div class="item">'+
            '<div class="row">'+
                '<div class="col-lg-4 col-sm-5">'+
                    '<div class="image">'+
                        '<img src="assets/images/country-0'+i+'.jpg" alt="'+arrDealsIName[i-1]+' nature">'+
                    '</div>'+
                '</div>'+
                '<div class="col-lg-8 col-sm-7">'+
                    '<div class="right-content">'+
                        '<h4>'+arrDealsIName[i-1].toUpperCase()+'</h4>'+
                        '<span>'+arrDealsIContinent[i-1]+'</span>'+
                        '<div class="main-button">'+
                          '<a href="'+arrDealsILink[i-1]+'.html">Explore More</a>'+
                        '</div>'+
                        '<p>'+arrDealsIDetails[i-1]+'</p>'+
                        '<ul class="info">'+
                          '<li><i class="fa fa-user"></i> '+arrDealsIPop[i-1]+' People</li>'+
                          '<li><i class="fa fa-globe"></i> '+arrDealsITer[i-1]+'</li>'+
                          '<li><i class="fa fa-home"></i> '+arrDealsIPrice[i-1]+' MIN Price</li>'+
                        '</ul>'+
                        '<div class="text-button">'+
                          '<a href="'+arrDealsILink[i-1]+'.html">Need Directions ? <i class="fa fa-arrow-right"></i></a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
}
document.getElementById("dealsI").innerHTML=ispisDealsD;
