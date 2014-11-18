UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {

	this.data.push(data);
	this.emit("addElem",data);
	
};

UAM.Store.prototype.update = function (id, data) {

	this.emit("updateLength",this.data.length);

};
