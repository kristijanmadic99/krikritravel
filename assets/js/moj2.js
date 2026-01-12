let arrDealsName=['Caribbean','Switzerland','France','Thailand'];
let arrDealsRangeG=['$0 - $500','$500 - $1000','$1000 - $2000'];
let arrDealsRangeV=['0-500','500-1000','1000-2000'];
let ispis='<fieldset>'+
                '<select name="Location" class="form-select" id="desSel">'+
                    '<option value="0" selected>Destinations</option>';
for (let i = 0; i <= arrDealsName.length-1; i++) {
    ispis+='<option value="'+arrDealsName[i]+'">'+arrDealsName[i]+'</option>';
}
ispis+='</select>'+
            '</fieldset>';
document.getElementById("chooseLoc").innerHTML=ispis;
ispis='<fieldset>'+
                '<select name="Price" class="form-select" id="priceRangeSel">'+
                '<option value="0" selected>Price Range</option>';
for (let i = 0; i <= arrDealsRangeV.length-1; i++) {
    ispis+='<option value="'+arrDealsRangeV[i]+'">'+arrDealsRangeG[i]+'</option>';
}
ispis+='</select>'+
            '</fieldset>';
document.getElementById("choosePrice").innerHTML=ispis;


const destinations = [
    {
        name: "Havana",
        image: "assets/images/havana1.jpg",
        price: 1200,
        checkIns: 250,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Caribbean"
    },
    {
        name: "Kingston",
        image: "assets/images/kingston1.jpg",
        price: 1400,
        checkIns: 120,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Caribbean"
    },
    {
        name: "George Town",
        image: "assets/images/georgetown.jpg",
        price: 950,
        checkIns: 150,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Caribbean"
    },
    {
        name: "Zurich",
        image: "assets/images/Zurich.jpg",
        price: 1050,
        checkIns: 250,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Switzerland"
    },
    {
        name: "Geneva",
        image: "assets/images/Geneva.jpg",
        price: 950,
        checkIns: 120,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Switzerland"
    },
    {
        name: "Bern",
        image: "assets/images/Bern.jpg",
        price: 850,
        checkIns: 150,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Switzerland"
    },
    {
        name: "Paris",
        image: "assets/images/paris.jpg",
        price: 830,
        checkIns: 250,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "France"
    },
    {
        name: "Colmar",
        image: "assets/images/colmar.jpg",
        price: 800,
        checkIns: 120,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "France"
    },
    {
        name: "Lyon",
        image: "assets/images/lyon.jpg",
        price: 650,
        checkIns: 150,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "France"
    },
    {
        name: "Bangkok",
        image: "assets/images/Bangkok.jpg",
        price: 650,
        checkIns: 250,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Thailand"
    },
    {
        name: "Chiang Mai",
        image: "assets/images/Chiang_Mai.jpg",
        price: 450,
        checkIns: 120,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Thailand"
    },
    {
        name: "Phuket",
        image: "assets/images/Phuket.jpg",
        price: 550,
        checkIns: 200,
        details: [
            "7 Days Trip > Hotel Included",
            "Airplane Bill Included", 
            "Daily Places Visit"
        ],
        country: "Thailand"
    },
];


document.addEventListener('DOMContentLoaded', function() {
    const desSel = document.getElementById('desSel');
    const priceRangeSel = document.getElementById('priceRangeSel');
    const searchFilter = document.getElementById('searchFilter');
    const desRes = document.getElementById('desRes');

    searchFilter.addEventListener('click', function(event) {
        event.preventDefault();
        desRes.innerHTML = '';
        const selectedDestination = desSel.value;
        const selectedPriceRange = priceRangeSel.value;

        const [minPrice, maxPrice] = selectedPriceRange !== 'Price Range'
            ? selectedPriceRange.split('-').map(Number)
            : [0, Infinity];

        const filteredDestinations = destinations.filter(dest => {
            const destinationMatch = selectedDestination === 'Destinations' || dest.country === selectedDestination;
            const priceMatch = dest.price >= minPrice && dest.price <= maxPrice;
            return destinationMatch && priceMatch;
        });

        if (filteredDestinations.length === 0) {
            desRes.innerHTML = '<p>No destinations found matching your criteria.</p>';
            return;
        }

        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'container-fluid ';
        carouselContainer.innerHTML = `
            <div class="row">
                <div class="col-lg-12" id="dealID">
                    <div class="owl-weekly-offers owl-carousel" id="destinationCarousel">
                        ${filteredDestinations.map(dest => `
                            <div class="item dealsItm">
                                <div class="thumb d-flex flex-column justify-content-center align-items-center">
                                    <img src="${dest.image}" alt="${dest.name}" class="dealImg">
                                    <div class="text">
                                        <h4 class="cities">${dest.name}<br>
                                            <span><i class="fa fa-users"></i> ${dest.checkIns} Check Ins</span>
                                        </h4>
                                        <h6 class="dealsItm">$${dest.price}<br><span>/person</span></h6>
                                        <div class="line-dec"></div>
                                        <ul>
                                            <li>Deal Includes:</li>
                                            ${dest.details.map(detail => `
                                                <li><i class="fa fa-check"></i> ${detail}</li>
                                            `).join('')}
                                        </ul>
                                        <div class="main-button">
                                            <a href="reservation.html">Make a Reservation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        desRes.appendChild(carouselContainer);

        if (window.jQuery && $.fn.owlCarousel) {
            $('#destinationCarousel').owlCarousel({
                items: 3,
                nav: true,
                dots: true,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 3 }
                }
            });
        }
    });
});



