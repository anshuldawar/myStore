(function(){
var app = angular.module('store',[]);

    app.controller('StoreController', function(){
        this.products= gems;
    });
    
  /*  app.controller("ReviewController",function(){
        this.review = {}; 
        this.addReview = function(product){
          product.reviews.push(this.review);  
        this.review = {};     
        };
        
    });
    */
    var gems = [
        {                 //object
        name:'Harry Potter and the Philosopher\'s Stone ',
        price: 12.10,
        description:"Harry Potter and the Philosopher\'s Stone is the first novel of the much appreciated Harry Potter series. An abridged version of the same novel, this book has been brought out by Bloomsbury Press for children aged between eight and twelve years",
        canPurchase: true,
        soldOut: false,
         images:[
        "hp1.jpg" 
            
    ],
    reviews :[
        {
            stars: 5,
            body:"I Love this book",
            author:'joe@thomas.com'
        },
         {
            stars: 4,
            body:"Recommend this one ",
            author:'larry@mark.com'
        }
    ],
    },
    {                 //object
        name:'Harry Potter and the Chamber of Secrets',
        price: 15.5,
        description:' Harry Potter\'s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors -- and then the attacks start. Students are found as though turned to stone... Dobby\'s sinister predictions seem to be coming true. ',
        canPurchase: true,
        soldOut: false,
        images:[
        "hp2.jpg"    
            
    ],
    reviews :[
        {
            stars: 5,
            body:"I Love this book",
            author:'joe@thomas.com'
        },
         {
            stars: 4,
            body:"Recommend this one ",
            author:'larry@mark.com'
        }
    ],    
    },  {                 //object
        name:'Harry Potter and the Prisoner of Azkaban',
        price: 16.46,
        description:'When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it\'s the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry\'s tea leaves ...But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss. These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It\'s time to PASS THE MAGIC ON ...',
        canPurchase: true,
        soldOut: false,
           images:[
        "hp3.jpg" 
            
    ],
    reviews :[
        {
            stars: 5,
            body:"I Love this book",
            author:'joe@thomas.com'
        },
         {
            stars: 4,
            body:"Recommend this one ",
            author:'larry@mark.com'
        }
    ],   
    },
    {                 //object
        name:'Harry Potter and the Goblet of Fire',
        price: 8.04,
        description:'here will be three tasks, spaced throughout the school year, and they will test the champions in many different ways ... their magical prowess - their daring - their powers of deduction - and, of course, their ability to cope with danger',
        canPurchase: true,
        soldOut: false,
        images:[
        "hp4.jpg" 
            
    ],
    reviews :[
        {
            stars: 5,
            body:"I Love this book",
            author:'joe@thomas.com'
        },
         {
            stars: 4,
            body:"Recommend this one ",
            author:'larry@mark.com'
        }
    ]   
    }    
    ]
    
})();    