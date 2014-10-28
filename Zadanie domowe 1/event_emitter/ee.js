(function (global) {
    var EE;

    if (!global.UAM) {
        global.UAM = {};
    }

    EE = function () {
        //store the listeners somewhere
        this.listeners = [];
    };

    EE.prototype.on = function (eventName, listener, context) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = {
                tab: [],
                con: null
            };
        }
        this.listeners[eventName].tab.push(listener);
        this.listeners[eventName].con = context;

        return function () {            
            for (var i = 0; i < this.listeners[eventName].tab.length; ++i) {
                if (this.listeners[eventName].tab[i] === listener) {                    
                    if (i !== -1) {
                        this.listeners[eventName].tab.splice(i, 1);
                    }
                    break;
                }
            }            
        }.bind(this);
    };

    EE.prototype.emit = function (eventName /*, other args...*/ ) {
        var pom = this.listeners[eventName].tab;
        var argumenty = [];
        for (var i = 1; i < arguments.length; ++i) {
            argumenty.push(arguments[i]);
        }
        for (var i = 0; i < pom.length; ++i) {
            pom[i].apply(this.listeners[eventName].con, argumenty);
        }
    };

    var ee = new EE();

    var removeListener = ee.on('test', function (arg1, arg2) {}, {
        key: 'value'
    });

    ee.emit('test', 1, 2); // 1, 2 value;
    removeListener(); //removes my listener from the event emitter;
    ee.emit('test'); //nothing will execute

    global.UAM.EventEmitter = EE;

}(window));
