function disablee(e){
    e.disabled=true;
}

Array.prototype.remove_by_value = function(val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  }
  var l=["11","12","13","14","15","16","17","1M","1K","1R","21","22","23","24","25","26","27","2M","2K","2R",
  "31","32","33","34","35","36","37","3M","3K","3R","41","42","43","44","45","46","47","4M","4K","4R"];

  function choix(id){
      var ch="";
    if (l.length>4){
    l = l.remove_by_value(id);
    }
    else {
        for (var i =0 ; i<l.length;i++){
            switch(l[i][0]){
             case "1":   ch+=" " + l[i][1] +" DINARY "; break;
case "2":   ch+=" " + l[i][1] +" TREFEL ";  break;
case "3":   ch+=" " + l[i][1] +" SBATA ";  break;
case "4":   ch+=" " + l[i][1] +" COEUR "; break;
            }
        }
        alert(ch);
    }

    
  }
  function verif(){
    if (l.length!=2){
      return true;
     }
       else{
           return false;
       }
  }