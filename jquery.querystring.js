jQuery.extend(jQuery,{
  queryValue : function(){
    var vars,

    getVar  = function(key,src){
      if(!key){return getVars();}
      return getVars(src)[key];
    },

    getVars = function(src){
      //if(vars){return vars;}
      vars = {};
      var hashes;
      if(!!(hashes = (src || window.location.href).split('?')[1])) {
        var hash;
        hashes = hashes.split('&');
        for(var i=hashes.length;i--;){
          hash = hashes[i].split('=');
          vars[hash[0]] = hash[1];
        }
      }
      return vars;
    };

    return getVar;
  }()
});
