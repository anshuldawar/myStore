(function(){
var app = angular.module('store',[]);

    app.controller('StoreController', function(){
        this.products= gems;
    });
    
    var gems = [
        {                 //object
        name:'AXL guitar',
        price: 122.95,
        description:'lorem ipsum',
        canPurchase: true,
        soldOut: false,
         images:[
        "axl.jpg",
        "guitar0.jpg"    
            
    ]       
    },
    {                 //object
        name:'Guitar Capo',
        price: 15.5,
        description:'lorem ipsum',
        canPurchase: true,
        soldOut: false,
        images:[
        "capo.jpg"    
            
    ]    
    },  {                 //object
        name:'Guitar Strings',
        price: 32.5,
        description:'lorem ipsum',
        canPurchase: true,
        soldOut: false,
    },
    {                 //object
        name:'Gsuitar pic',
        price: 1.22,
        description:'lorem ipsum',
        canPurchase: true,
        soldOut: false,
    }    
    ]
    
})();    