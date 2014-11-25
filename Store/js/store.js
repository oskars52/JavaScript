UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.elemActive = [];//table to hold active element
	this.listLength = 0;
	this.listActivElemLength = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {

	this.data.push(data);
	this.listLength++;
	this.elemActive.push(false);

	this.emit("addElem",data);
	this.emit("updateLength", this.listLength, this.listActivElemLength);
};

UAM.Store.prototype.update = function (elem) {

	var text = elem.textContent;		
	for (var i = 0; i < this.listLength; ++i) {
		if (text === this.data[i]) {
			this.elemActive[i] = !this.elemActive[i];
			if (this.elemActive[i]) {
				this.listActivElemLength++;
			} else {
				this.listActivElemLength--;
			}
			break;
		}	
	}

	this.emit("afterChangeActivity", elem);
	this.emit("updateLength", this.listLength, this.listActivElemLength);
};
