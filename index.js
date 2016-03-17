var UMDDefine= function(name, definition) {
    'use strict';
    if (window && typeof window.define === 'function') {
        return window.define(definition);
    } else if (global && typeof global.module !== 'undefined' && global.module.exports) {
        return global.module.exports = definition();
    } else {
        return window[name] = definition();
    }
};

UMDDefine("UMDdefine",function(){
    return UMDDefine;
})