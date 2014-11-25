//
// InputView
//
UAM.InputView = function (item) {
	UAM.EventEmitter.call(this);
	this.clickButton = null;
	this.view = item;

    var _this = this;
    this.textToAdd = this.view.querySelector("#inputview");    
    this.clickButton = this.view.querySelector("#addview");
    
    this.clickButton.addEventListener("click" ,function(){

        this.emit("clickToButton", this.textToAdd.value);   
        
    }.bind(this),false);

};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


//
//ListView
//
UAM.ListView = function (item) {
	UAM.EventEmitter.call(this);
	this.view = item;

};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addElementList = function(text){

    var li = document.createElement("li");
    li.innerHTML = text;
    this.view.appendChild(li);
    
	this.addChangeActivity(li);
}

UAM.ListView.prototype.addChangeActivity = function(elem){
	    
    elem.addEventListener("click" ,function(){

    	this.emit("sendChangeActivity", elem);// or elem.innerHTML    	
        
    }.bind(this),false);

}

UAM.ListView.prototype.updateElementList = function(elem){
	    
    if (elem.className === ""){
    	elem.className = "active";
    } else {
    	elem.removeAttribute("class");
    }

}


//
//FooterView
//
UAM.FooterView = function (item) {
	UAM.EventEmitter.call(this);
	this.view = item;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.updateFooter = function(length, activLength) {
	
	this.view.innerHTML = "Wszystkie/aktywne: " + length + " / " + activLength;	

}