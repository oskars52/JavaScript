window.onload=function(){

    var liTable = [];
        
    var add = document.getElementById("add");
    add.addEventListener("click", function(){
        
        var text = document.getElementById("text");
        var addToLi = document.getElementById("data-list");        
        
        if (text.value === ""){
            //empty input
        } else {            
            
            if (liTable.indexOf(text.value) !== -1){
                //nothing
            } else {
                liTable.push(text.value); 
                var li = document.createElement("li");
                li.innerHTML = text.value;
                addToLi.appendChild(li);

                var span = document.createElement("span");
                span.innerHTML = "Usuń";
                li.appendChild(span);
            }                        
        }
        
    });

    document.getElementById("text").addEventListener("keydown", addTextToList, false);
    
    function addTextToList (e) {
        
        if ( e.keyCode == 13 ) {
            
            var text = document.getElementById("text");
            var addToLi = document.getElementById("data-list");        
            
            if (text.value === ""){
                //empty input
            } else {                
                if (liTable.indexOf(text.value) !== -1){
                    //nothing
                } else {
                    liTable.push(text.value); 
                    var li = document.createElement("li");
                    li.innerHTML = text.value;
                    addToLi.appendChild(li);

                    var span = document.createElement("span");
                    span.innerHTML = "Usuń";
                    li.appendChild(span);
                }                            
            }    
        }
    }

    //usuwanie elementu li
    var addToLi = document.getElementById("data-list");
    addToLi.addEventListener("click", function(event){
        
        if (event.target.tagName == "SPAN"){
            var removeLi = event.target.parentNode;
            event.target.remove(); //usunięcie tagu span wraz z zawartością
            
            var indexInTable = liTable.indexOf(removeLi.innerHTML);//wyszukuje dany wyraz w tablicy - jego index
            liTable.splice(indexInTable, 1);//usunięcie z tablicy danego wyrazu

            removeLi.remove();//usunięcie li            
        }
        
    });

};