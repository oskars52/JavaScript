(function (global) {
    var EE;

    if (!global.UAM) {
        global.UAM = {};
    }

    EE = function () {
        //store the listeners somewhere
        this.listeners = {}; //najlepiej jest jak listeners jest obiektem
    };

    //funkcja on - bierze dany listener i zapisuje w środku kolekcji
    EE.prototype.on = function (eventName, listener, context) {        
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = {
                tab: []                
            };
        }

        this.listeners[eventName].tab.push({
            listener: listener,
            con: context
        });        

        return function () {                
            var lis = this.listeners[eventName].tab,
                licznik = 0;
            lis.forEach(function(entry) {
                if (entry.listener === listener) {
                    lis.splice(licznik, 1);                    
                }
                licznik++;
            });                    
        }.bind(this);        
    };

    EE.prototype.emit = function (eventName /*, other args...*/ ) {
        var lis = this.listeners[eventName].tab;
        var argumenty = [];
        for (var i = 1; i < arguments.length; ++i) {
            argumenty.push(arguments[i]);
        }                
        lis.forEach(function(entry) {
            entry.listener.apply(entry.con, argumenty);
        });

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