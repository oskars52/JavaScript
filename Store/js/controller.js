//
//InputCtrl
//
UAM.InputCtrl = function (inputView, store){

    inputView.on("clickToButton",function(name){
        store.add(name);
        store.update();
    });
    
}


//
//ListCtrl
//
UAM.ListCtrl = function (listView, store){
    
    store.on("addElem",function(data){
        listView.addElementList(data);        
    });
    
}


//
//FooterCtrl
//
UAM.FooterCtrl = function (footerView, store){
       
	store.on("updateLength",function(length){
        footerView.updateFooter(length);        
    });
	
}