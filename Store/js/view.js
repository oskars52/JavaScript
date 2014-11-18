//
// InputView
//
UAM.InputView = function (item) {
	UAM.EventEmitter.call(this);
	this.textToAdd = "";
	this.clickButton = null;
	this.view = item;

    var _this = this;
    this.textToAdd = document.getElementById("inputview");
    this.clickButton = document.getElementById("addview");
    
    this.clickButton.addEventListener("click" ,function(){

        _this.emit("clickToButton", this.textToAdd.value);   
        
    }.bind(_this),false);

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

	var list = document.getElementById("listview");
    var li = document.createElement("li");
    li.innerHTML = text;
    list.appendChild(li);

}


//
//FooterView
//
UAM.FooterView = function (item) {
	UAM.EventEmitter.call(this);
	this.view = item;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.updateFooter = function(length) {
	
	var textInFooter = document.getElementById("footerview");	
	textInFooter.innerHTML = "Wszystkie/aktywne: " + length + "/0";	

}