//
//InputCtrl
//
UAM.InputCtrl = function (inputView, store){

    //action after click to button
    inputView.on("clickToButton",function(name){
        store.add(name);        
    });
    
}


//
//ListCtrl
//
UAM.ListCtrl = function (listView, store){
    
    //action from Store to view that add element to list
    store.on("addElem",function(data){
        listView.addElementList(data);        
    });

    //action from view that element li was pressed
    listView.on("sendChangeActivity",function(text){        
        store.update(text);        
    });

    //action from Store that update active element in view list
    store.on("afterChangeActivity",function(elem){
        listView.updateElementList(elem);
    });    
    
}


//
//FooterCtrl
//
UAM.FooterCtrl = function (footerView, store){
    
    //action from Store that update footer view, this is length of two list
	store.on("updateLength",function(length, activeLength){
        footerView.updateFooter(length, activeLength);        
    });
	
}