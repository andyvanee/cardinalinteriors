// String encoder
function strToArr(s) {
  return s.split('').map(function(e){
    return e.charCodeAt()
  })
}

// String decoder
function arrToStr(a) {
  return a.map(function(e){
    return String.fromCharCode(e)
  }).join('')
}

// Polyfill for Array.prototype.map
if(!Array.prototype.map){Array.prototype.map=function(callback,thisArg){var T,A,k;if(this==null){throw new TypeError(' this is null or not defined');}var O=Object(this);var len=O.length>>>0;if(typeof callback!=='function'){throw new TypeError(callback+' is not a function');}if(arguments.length>1){T=thisArg}A=new Array(len);k=0;while(k<len){var kValue,mappedValue;if(k in O){kValue=O[k];mappedValue=callback.call(T,kValue,k,O);A[k]=mappedValue}k++}return A}}

//
// Setup function
//
(function(doc){
  var loopClass = function(cls, cb) {
    var elems = doc.getElementsByClassName(cls);
    for (var i=0; i < elems.length; i++) {
      cb.apply(elems[i], [elems[i], i]);
    }
  };

  var email = [109, 97, 105, 108, 116, 111, 58, 106, 97, 121, 64, 99, 97, 114, 100, 105, 110, 97, 108, 105, 110, 116, 101, 114, 105, 111, 114, 115, 46, 99, 97];
  var phone = [116, 101, 108, 58, 43, 49, 52, 48, 51, 54, 48, 52, 57, 51, 51, 57];

  loopClass('link-to-phone', function(){
    this.setAttribute("href", arrToStr(phone));
  });

  loopClass('link-to-email', function(){
    this.setAttribute("href", arrToStr(email));
  });
}(document));

