class Helper{
    constructor(){

    }
    
    getCount(){
        var helperCountRef = database.ref('helperCount');
        helperCountRef.on("value",function(Data){
              helperCount = database.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            helperCount:count
        })
    }
    update(name){
        var helperIndex = "helper" + helperCount;
        database.ref(playerIndex).set({
            name:name
        }) 
    }
}