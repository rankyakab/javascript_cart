var pracShoppingCart  = (function(){
	//public api
	var Cart = [];
	function Item(name,price,count){
        this.name=name
        this.price=price
        this.count=count
      }
	function saveCart(){
		localStorage.setItem("shopping_cart", JSON.stringify(Cart));
	  }
	 function loadCart(){
		  Cart = JSON.parse(localStorage.getItem("shopping_cart"));
	  }
	
	  
	
		//private api
	var obj = {};
		//this creates a new object and adds to cart and save
	obj.addItemToCart= function (name, price, count){
         for(var item in Cart){
           if(Cart[item].name===name){
             Cart[item].count +=count;
			 saveCart();

             return;
           }
         }
        var item = new Item(name,price,count);
        Cart.push(item);
		saveCart();
      }
	    // removes one item from charset
	  obj.removeItemFromCart =  function(name){
      for(var item in Cart){
        if(Cart[item].name===name){
          Cart[item].count--;

          if(Cart[item].count===0){
           Cart.splice(item, 1);
          }
          break;
        }

      }
	saveCart();
    }
	//removeItemFromCartAll() removes all item from chart
     obj.removeItemFromCartAll = function(name){
      for(var item in Cart){
        if(Cart[item].name===name){
            Cart.splice(item, 1);

            break;
			
        }

      }

	  
	  saveCart();

    }
	
	
	obj.setCountForItem = function (itemName, count){
		   for(var item in Cart){
        if(Cart[item].name===itemName){
            Cart[item].count=count;
			 saveCart();
            return;
			
        }

      }

	  
	
	}
	//clearCart ()
      obj.clearCart= function(){
       Cart = [];
		saveCart();
      }
	  

	  //countCart()  returns total count
      obj.countCart = function(){
        var totalCount=0;
        for(let item in Cart){
          totalCount+=Cart[item].count;
        }
        return totalCount
      }
	  
	             //totalCount() returns total cost
      obj.totalCount = function(){

        var total=0;
		loadCart();
        for(let item in Cart){
				total+=Cart[item].price*Cart[item].count;
	        }
        return total.toFixed(2);
      }
	 //second partern of listing the objects in the shopping cart into another array
     obj.listCart = function(){
		 loadCart();
        var arrayObject=[];
        for(var i in Cart){
           var listobj = {};
          for(var keys in Cart[i]){
            listobj[keys] = Cart[i][keys];
          }
		  listobj.total = (listobj.count * listobj.price).toFixed(2)
          arrayObject.push(listobj);
        }
        return arrayObject;
      }

return obj;
	
})()

  
      
    
 


