!function(t){var e={};function A(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,A),n.l=!0,n.exports}A.m=t,A.c=e,A.d=function(t,e,r){A.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},A.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},A.t=function(t,e){if(1&e&&(t=A(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(A.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)A.d(r,n,function(e){return t[e]}.bind(null,n));return r},A.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return A.d(e,"a",e),e},A.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},A.p="",A(A.s=12)}([function(t,e,A){t.exports=A(7)},function(t,e){function A(t,e,A,r,n,i,o){try{var a=t[i](o),u=a.value}catch(t){return void A(t)}a.done?e(u):Promise.resolve(u).then(r,n)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){A(o,n,i,a,u,"next",t)}function u(t){A(o,n,i,a,u,"throw",t)}a(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function A(t,e){for(var A=0;A<e.length;A++){var r=e[A];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&A(t.prototype,e),r&&A(t,r),t}},function(t,e,A){"use strict";A.d(e,"a",(function(){return r})),A.d(e,"d",(function(){return n})),A.d(e,"b",(function(){return i})),A.d(e,"c",(function(){return o}));var r="https://habitica.com/api/v3",n={DONE:"done",DOING:"doing"},i={ASSIGNED_TO_ME:"me",NONE:"none"},o={TRELLO_LOGO:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACRQTFRFAGbMA3a9A3e8Ane9A3e9GYPCR5rMa63Ud7PXvNfm4Onu7O/xNljIFwAAAAN0Uk5TBWHLjO1H6wAAAGRJREFUGNNjYFQ2hgIjAQZhYzgwZFBGcIwYjM1X794ZbDp7965iYwZjq927dxebA4nFQI41kG62ABKbacMxAxKTYRyTjI72YBgH4jiiOZZATjKMY1rR0eYM4yABVG+jBAhyUAEAulltP7yEQqgAAAAASUVORK5CYII=",HABITICA_LOGO:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC0UExURUdwTAAAAEEjdUEjdUIzeDQvaQAA/0EidUEjdVMiiEQndkEjdUAidUEjdUIidkEjdUEidUAidUEidEEjdUEidUEjdkAjdUMic0EjdUEjdUEjdUEidUEjdUEjdUAjdUIkdEEidEAjdUEjdUEjdUAidUMidEEjd0EidUEidUEjdUEjdUIidkEkdUEjdEEjdT4ndkEjdUIidEIjdkEjdUQlekUlfEMkeEYnfUcngEopg0UnfEwqh08GzoYAAAAzdFJOUwABn9ADBQH9/gIKwq/7QJbLj1VD33ZwD/iKslvZ9UkvUL25pE0iKoPw5Zo2HHFnGMZ8ps6c3PwAAAF2SURBVBgZZcBVluMwEEDR57hsyaCQw8zQMFSSA73/fY3TZ/7mEvEBKf8T3npIxj/SSDKAhOFjCAkQiaR8ywChqn0HMskAqs5o3nkng5R8UIe4DYzbq5m/Bf/oQgTC8L709bYfUTxuxjkXBgkpJBHF3TgfFhWbQe100j+mQArkf5yvbR36FMGpHkgjoL8GqtF5oeqqrndWw5QM2PXyjHIQT9TVZqJWjb0dEBI6BWzu3lk1qlZVXZghJJz9DobeG+eM1YapY4GE3telt2bVre83tapq1bTJEOaxfh2A9Xx6UauqJvxAQDheL2WUkJ9nS7Wq6kKJAJGM096I8eIR1GrDPd8QXoTPIb/vS2O1Ya2vEICEapuzDU5VXcNPyQCE9+4HaeyNWhPCU+s2AqTkv9YIsTdW/W4zWoYVAgibFrlQBOd8D+jfViQRZJy6Y2Drl3rlZTDnW8bnotXpPkO4+SLejafhWhY/ASKOo86+9VLOWqf9fl+Wp78TOCsCfttvbQAAAABJRU5ErkJggg==",TRIVIAL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAR2LVAAAAEXRSTlMAFKIxCKvcF5kPOYV7ziAEc3trLr0AAACgSURBVBgZ7cFZisMwFEXBq1nykOTsf7ONMaE7E9hPkJ9WlYZhGL5mUp9GU5eZWT0iENVhBhbZRTZRZgubRVaRXZTRjd1NNhfuLjIoiV+p6KTieeSdTnCeV9XpoFZ5rzYdca18Uq86pFXeqU2HOc8z73RKSfyVik4ribtUZLKyW2UU2AVZZTZZZoFNkF0GsjpMQFCPTFaXiUl9Vg3DMPwbP7XEEQha8GZ+AAAAAElFTkSuQmCC",EASY:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADZo62CAAAAFnRSTlMAr8sx0UTtxksKeVG4ciDmKls5bOMQ1FHhSgAAAOJJREFUWMPtlcsSgjAQBEEgEMS39v9/qgexRElmrPJkVfq6PVubB6SqCoVCIcn4o3Lm7PJamZhcA6k0QKPzWpmA2g0glAbcCFqpwY0glSMPjvm8Vuq5WrsBMsqJJ6dcXinblhftkIorZdjwzmbVQindZw2g75ZxpXQ9aV4tpLLPFaHfP/JOyfRfrsEpw3qFn7volKF9q6XO0SmLU2636XvklMNcPOSvslYuc/WSb6CVGAAI4ms2yg6AnfofaCUGIMTKjZBXRjeAU2IwA1hlxD5NWonX6BoY5ebfxi+UQqFQ+FPuW6MsGdDOH+AAAAAASUVORK5CYII=",MEDIUM:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAKlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHrpZrAAAADXRSTlMAIKDgYEC/gBDwkM9Qsgnf8QAAAVxJREFUWMPdldkWgyAMBcWExC78/++2ttiDLBchb/W5mY6omWX5+8t7I0DEKBCCTUFCEKOATUF2gBgFLAryBYhRYFrBPQ7Aw82MryG5VmcaH0aU40OI+vgAojn/JtgUBo6hhhh8EDlidaYXYXVTr6Ie8zr5LWy37/xtm/2a1CZwKMwLRAU1rLRdwSLwUbAI7Ao2gbfCoEDxxm1b9yfpxRcWsKAVS/0F7NGW5wsNELTlqd8Aj0LDFzIkKDTUz5BHreMLJRTUOuqX8KilAAGoIO3cphuQuHGP1NyS+Q6uIdLxDFGrQI7IxxNEq0MpojZ+ILRdQoqSjtq/0TY9uclmr6NlFXE+5ioiuckCUbasQGTHfELUU3hCVB70PT+7CuL3L3dQwsBw44BaxgdKC9x5oJZRgeHWhbnWrkBUUBRjxgCGudauwEdBUYy5B2CYa6V+mQjVcnv2AU9jrv/wegGERSd0TQVf/QAAAABJRU5ErkJggg==",HARD:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAIVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt9G3DAAAACnRSTlMAEPBAwIB/IKJwAyvMcQAAAYdJREFUWMPtV8uWhSAME1oE+/8fPL5wUGnKub2LWQzb0CRHoaTT1K6wTOZaAgBTDFZ9iAmBkiyCJEAkiVgWVg1dZAMtC6uGLrKBhoVdQxM5QGxh19BEDhBaODX6IhVEFk6NrkgoUlHS6qlqSHkyhPnC1sVdCuJmS5yDWt6nuJXfKd7lb4pX+S9Fv/xO0S2vFItWvzLkoz6zuiWu1zekaBhQLcR0fIYexfMrdihqeY+i9x8fFG35k4KVk9RQPMt3+Dpl+lG+GAihWSeoIozQgq4zAwMVzYiAgIETLbilMTBwoBkTEDCwo8Vq6wwMbGi2CAgYWNFiP21MsG3bBHn6X399ZecWYudBYiHXUSYRdl0mFrEswOtMIqYF2FBYxLIAWxqJmBZgU2URywJs69fDwh89LG1MGHna5gAi0tjj2lD0QsrI835SaBlnJGBsFO6IoyWcsZC1x4Q+xUjMu1LGm2IkaN5Cyp1iJOq+Mo4zbH8h7vsHDv/I4x66/GOfe/D0j77u4fuT8f8HqE0oB/XJcWkAAAAASUVORK5CYII=",CHECKED:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjBR4BLB+R2WA8AAACvklEQVRo3u2Yv09TURTHP632vTJojSZ1gKSUSIwO6mSMRhsXjcgkgwwEdyf9AyRgCaQGHFj4MWAcjXGRCGliYmICYWgEHdiMUBSQHwE1WITS61CEdx8FWuAdBt9ZX+79fN9955zvPQ/ccMON/z08B8D0cpKLlLLMCP2HDwBfShV3OcMSA2Tk8WU8YgyFQvGHl7J4DyHqSK7hFatMyuJLqLfgFWmGJPFBony14DPM8kBOQIBmJjT8PF34pPAmLUxZ8IoFujGl8H7amdPwM7RhyOE7mSFjwU/RSkAWv2rBfyNGUKoHm7Tb8OM0USKD9xCghTnt8JM0EpbCB2m2Zf4YUU5J4YuJanWvGOMx5TJ4LyHqGdfwSaKU45XBhzXLyaZeo9Th64b7r/CapFLPS3gTfoqYXOGFqLPhZ2iVajseim1+n2GBNgJydR/VMj/DPN1ylpPL75/JGe4e/N7Lfd7zgRind/2t/HTY/H6ap/nedh4yxwppUvQR2ZUEP13MapYzwROO5rt8hPTashRxbhTcLPfs99MW7Yu84WZBp2DSYcMniRbWdl6xbFn+kx5u5bncw7FNfj9KA6HCPuRlhjQJP3hNRR5bZP3+u5Z6X6inrNA88nGHBEtaAfVwe4dcyO33DbtzPINqBklpp9BLxTYS9t3vDWoY4Ldlu1/0bVkRjvi9SS39moRF4lzPIcExvze5Z5OQ4i1XbNs66vcmtQxoubDCOy6w8RfFcb83qWFQqwhFnPNrliri9wbVJLS+oIhzDkPO7w2qGF73hw0JJ3L4vUMDtkElI5oARS+9tq43T6dztx0fET7ZJChb6jk83/u5to0Ekfm+iKtbSBCa7z0U5TwFwfke/EQsNybh+T4bPioZXu8LDsz3h3Z4nmGUSY5wHMVHnvOCz6j9FJDP2xhc4iwGoySY3F+8G2644Qb8BSHeLEPgAmSrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1LTI5VDIzOjQ0OjMxKzAyOjAwhLix6wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0yOVQyMzo0NDozMSswMjowMPXlCVcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC",NOTIFICATIONS:{BLACK:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAE3RSTlMA8KDPPzBgQMC/EJBwgLDgIFB/TeX9tgAAAQ9JREFUWMPtl1GzgiAYRBcIIUCt9v//1x6kshIHPm8vdziP6h7BWQYEADht2IzRDgthopApAEAwFGMCgIkHiIDjIRw0SdIn10jyeQiGJD0EeJI0IEkmiSCRJJFnIsB1waYgniuIOwJfUz7/vwXRVxB7E38r6E38A4Gt2RFsb+KuwJ4qsL2JvxX0Jh4QDBLBsAgUSWqJQJPknI/Kt9AaD7flwJ4H8n2GLrzxkwGYC9e3D6YfzACsqjJsjlRZ1Bp28kAYVflmOa/G1ZdfbwhX9WXIeXXd2B6KFVsZHpO0bR1bfqlW+aG1pdkgyL8ZRHlgzEVJKedH0VJ5oYWL7UD+zSDKP79DYXHWcImGNPGy98wd4OV99UW+D+wAAAAASUVORK5CYII=",WHITE:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEz///+flKJDAAAAAXRSTlMAQObYZgAAAH1JREFUKM/N0bENwyAUBuGzKFwyAqMwGh7NozACJQXiUoDkIlVSRHnV190vPaKqNvLCoCzMB+57MAAgf4tTtX6KP0n8YPwbXBAdkJXihLLeBDrJeh06SHoH7QStp95AarEDEHtqAJwjVwDCLDcAh167s3uUuZH3FFLfiA14AVTO7CnEdrzkAAAAAElFTkSuQmCC"},GOLD:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFcUExURUdwTPujIv+mIv+mI/+AAP+nAP2kIv+nI/+aIv+nI/+mIvmjIv+mIv+mIv+hG/+mIv+pIvehIf+mI/+mIv+mIP+lIv+kIv+nI/+mI/+mIv+mIv+lI/+mI/+lIP+dJ/+kIv+mI/+iH/+lIv+nI/+lJP+mI/ehIf+mIv+nI/+mI/+kI/+mIv+mI//Tkd6RH//Ukv+nI/+oI/6lI/+wJeWWH/+qJP/SkN2RH/+tJP7Rjv+nI/WfIfegIe6bIf+zJt2MAN+TJP/WlO2aIOOUHv/Ylt6OAN6SIt+SH+CTH96QGd6PEdyQHuCUIdOKG82HGdOYQP7Qi/O6bf/Ukc6SNOSZLPGdIf+mJv+jAM2FDPS9cOuZIP+9ZP+8Ys2OLO2mQ+WcNu2vWv2jFdWUNs6UOcmKI+SwZM6HHduhTuusVeOvYvG0Yf+nHu+rTd2QH9WMHNWcSduVLu69du6+dvG0ZaaQZ4IAAAAsdFJOUwD9lfICAf/7A/ru/uoeCc8O/oiQH8o+Tdv25eGCGAY49xSzJEfH/cKzoHNyipTLOAAAApZJREFUOMtVU2dz4jAUFBB6CyUQSO/JnZGrYnuMIbaxqckRIL0nF3JpV///zEk2dYfxB3afnt7TLgA2vAEAZrN78YVcbiG+l50FIOAFE5jxgqVkHvESYlkk8SifXALemTGPy7+GeMT4XQlFSbj8DOJDX+y/h/zaOo/8YVVoHWC0BDXsR/z62lARAJk873fpLaveKGM06lZNd/n5fMZRBEA0JAWLhlU3e7f/jo/fbntm3TKKQSmUJgoviM1JQQVa5t1Fu6NVKlqnfdEzIVSC0lwM0wGQLAWL8MC8b2t0YR+jQGvtj4YFi8HSIjki7WF9hmW+afR+YQBZ69w2LMPHeqL4Dm7er1vmvVYY8YUCff2uQlH38268vwgKtxp3Mqmnadr+0NdnFCfAWhhFZkEWMaplXmikXpZl+3N9dsoxChRVBmVJB6Hea5NS+Vf3udN5fnp8OKUoijNEgfTYklyt8g+aNJa/fX+tVF7PDznMU8xls+aStsA8ShyUjyv7tuDm5c/fF0fAMSfNagLNgxyrjAXd7s3Ref/QZ59wIkKFzQHPlODppt+fEnimW3R/q2rzyBaMWuxMXdJAyDganGBfcgekJsZ8PBcoyuj/tKdwxkyBzcGi5IJ29cBhivM5QziL2hyvmr46O2WoEUardh6rfK9hfkxTjD58LBAlzw3hxzvFjarxjBAOnjsAFolhqg2VYwhFfgynw+rQMF6w7FgOCgrH2OAUATqWW8Y0MW2EmFbEh16eYFzihiIxbSQ6tPUKtrVPr4li81MUP5uiWNN92NQr42Ck4yWGBKdWhbBaE1QcrlI8PRmtmHvVjt62omzb0Vt1x8a8ncKNVJ7leYllJZ5nF1IbYJJ34h/LJHfjHk98N5mJjeP/H2u0q0e5TrInAAAAAElFTkSuQmCC",EXP:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD8UExURUdwTP+lHv+/QP+mI/+mIv+mI/+mI/+pAP/yAP+mIv+mIf+mIP+mIv+mIv+mI/+kG/+jDv+mIv+lE/+mIv+lHv+kF/+mI/+nIv+sJP+uJf+rJP+9Wv+sJf+4Tv+sNf+mJP+8WP/UlP/Tkf/Rjf/cqe6cJvekK//ox//erP+qMeCTIv+/Yv+kFP+6U//Hev+uJ/+2TP++XvujIfWfIP/Da//itv/CafymKv20S//Tlv/Wmu+cIP+yRt2PGPfIh//fsffOkO6hLf+uPP+zTP+xRv/HeOObOe6aFuiXIueWHeq4dvGkOu6YAPDJjvbQmO/JkN6MAPvWn/S/d+CWKhATkNUAAAAYdFJOUwD9BL1Kv/0CAUj9/8rBRv79w/xq/P3GaXKR1V0AAAGcSURBVDjLhZPpUsIwFIVTaVNatoJVm6RLTMu+i+DKDu677/8upliUAQL3R2Yy58x3k7sAsBoqkGV+iCMOkkl+CEMFaYzTOxBxELOsmBgRAiDcgYgDBZkmEiJUoNlHs0lGiOCAZm5OcyLEAZBtY+q3yxLW+GWLDlJNo8HaLRMpYMOhcughNqbMJ9TN4BOeUF2T5Sz2ag122qOO7uGsvGJZyCkbSbVb5nevHHKR8JCVWlpCWVO4bLoOOb8ulnqFfOcMQoQVLbKkFYwyuXKLUqcaFIeD8cv9TefM1BGOpbksJ7EFzQltt0nvqlTqfo5GX883+XzhAkILJ7XIMJv7zD/tFovDt1LAqnVCL8t6aJDDFDGMjnLTBmP+dRC8D3p1ShxXX6aIHtk0DG45rwav32PSck0J2X+PjL7ZNGq3pM6ePiqFRIbLG5XI2l7NIdW7/kNirVD/pZZcUq/0O95GqZfNQqZDK49wW7OidksurXTg9nb/Tpx+mQ+7HReNHNbLBZ0DVPHQ6lA8tAvEzrHfuzj7Vy9c3uOd283Xfx3wA4kALaPyZ1lJAAAAAElFTkSuQmCC"}},function(t,e,A){"use strict";A.d(e,"a",(function(){return a}));var r=A(2),n=A.n(r),i=A(3),o=A.n(i),a=function(){function t(e){n()(this,t),this.t=e}return o()(t,[{key:"getAll",value:function(){return this.t.getAll()}},{key:"removeAll",value:function(){return Promise.all([this.t.remove("board","private","lists"),this.t.remove("board","private","settings"),this.t.remove("board","private","user")])}},{key:"getUser",value:function(){return this.t.get("board","private","user",{})}},{key:"setUser",value:function(t){var e=this;return this.t.get("board","private","user",{}).then((function(A){return e.t.set("board","private","user",Object.assign({},A,t))}))}},{key:"removeUser",value:function(){return this.t.remove("board","private","user")}},{key:"getTask",value:function(){return this.t.get("card","private","task",{})}},{key:"setTask",value:function(t){var e=this;return this.t.get("card","private","task",{}).then((function(A){return e.t.set("card","private","task",Object.assign({},A,t))}))}},{key:"removeTask",value:function(){return this.t.remove("card","private","task")}},{key:"getSettings",value:function(){var t={scope:"me",priority:1,prependIcon:!0,showBadges:!0,showStats:!0,showStatsNotifications:!0};return this.t.get("board","private","settings",{}).then((function(e){return Object.assign({},t,e)}))}},{key:"setSettings",value:function(t){var e=this;return this.t.get("board","private","settings",{}).then((function(A){return e.t.set("board","private","settings",Object.assign({},A,t))}))}},{key:"getLists",value:function(){return this.t.get("board","private","lists",{})}},{key:"setLists",value:function(t){return this.t.set("board","private","lists",t)}}]),t}()},function(t,e,A){"use strict";A.d(e,"a",(function(){return l}));var r=A(0),n=A.n(r),i=A(1),o=A.n(i),a=A(2),u=A.n(a),s=A(3),c=A.n(s),f=A(4),h=A(5),l=function(){function t(e){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new h.a(e);u()(this,t),this.t=e,this.storage=A}var e,A,r;return c()(t,[{key:"request",value:(r=o()(n.a.mark((function t(e){var A,r,i,o,a=this,u=arguments;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A=u.length>1&&void 0!==u[1]?u[1]:{},r=f.a+e,t.next=4,this.authHeaders();case 4:return t.t0=t.sent,i={headers:t.t0},o=Object.assign({},i,A),t.abrupt("return",fetch(r,o).then((function(t){return a.handleResponse(t)})));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"authHeaders",value:(A=o()(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.t.get("board","private","userId","");case 2:return t.t0=t.sent,t.next=5,this.t.get("board","private","apiToken","");case 5:return t.t1=t.sent,t.abrupt("return",{"x-api-user":t.t0,"x-api-key":t.t1,"Content-Type":"application/json"});case 7:case"end":return t.stop()}}),t,this)}))),function(){return A.apply(this,arguments)})},{key:"handleResponse",value:function(t){return t.ok?t.json():this.handleError(t)}},{key:"handleError",value:(e=o()(n.a.mark((function t(e){var A=this;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(401!==e.status){t.next=5;break}return t.next=3,this.storage.removeUser().then((function(){return A.notify("Wrong User ID or API Token. Try to login again.","error")}));case 3:t.next=8;break;case 5:if(404!==e.status){t.next=8;break}return t.next=8,this.storage.removeTask();case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"addTask",value:function(t){return this.request("/tasks/user",{method:"POST",body:JSON.stringify(t)})}},{key:"updateTask",value:function(t,e){return this.request("/tasks/".concat(t),{method:"PUT",body:JSON.stringify(e)})}},{key:"doTask",value:function(t){return this.request("/tasks/".concat(t,"/score/up"),{method:"POST"})}},{key:"undoTask",value:function(t){return this.request("/tasks/".concat(t,"/score/down"),{method:"POST"})}},{key:"removeTask",value:function(t){return this.request("/tasks/".concat(t),{method:"DELETE"})}},{key:"getUserProfile",value:function(){return this.request("/user?userFields=profile",{method:"GET"})}},{key:"getUserStats",value:function(){return this.request("/user?userFields=stats",{method:"GET"})}},{key:"notify",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.t.alert({message:t,display:e,duration:10})}}]),t}()},function(t,e,A){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=A(8),n)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var A=Object.prototype,r=A.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag",u="object"==typeof t,s=e.regeneratorRuntime;if(s)u&&(t.exports=s);else{(s=e.regeneratorRuntime=u?t.exports:{}).wrap=v;var c={},f={};f[i]=function(){return this};var h=Object.getPrototypeOf,l=h&&h(h(B([])));l&&l!==A&&r.call(l,i)&&(f=l);var d=E.prototype=p.prototype=Object.create(f);m.prototype=d.constructor=E,E.constructor=m,E[a]=m.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(d),t},s.awrap=function(t){return{__await:t}},y(I.prototype),I.prototype[o]=function(){return this},s.AsyncIterator=I,s.async=function(t,e,A,r){var n=new I(v(t,e,A,r));return s.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},y(d),d[a]="Generator",d[i]=function(){return this},d.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var A in t)e.push(A);return e.reverse(),function A(){for(;e.length;){var r=e.pop();if(r in t)return A.value=r,A.done=!1,A}return A.done=!0,A}},s.values=B,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function A(A,r){return o.type="throw",o.arg=t,e.next=A,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return A("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return A(i.catchLoc,!0);if(this.prev<i.finallyLoc)return A(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return A(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return A(i.finallyLoc)}}}},abrupt:function(t,e){for(var A=this.tryEntries.length-1;A>=0;--A){var n=this.tryEntries[A];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var A=this.tryEntries[e];if(A.finallyLoc===t)return this.complete(A.completion,A.afterLoc),w(A),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var A=this.tryEntries[e];if(A.tryLoc===t){var r=A.completion;if("throw"===r.type){var n=r.arg;w(A)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,A){return this.delegate={iterator:B(t),resultName:e,nextLoc:A},"next"===this.method&&(this.arg=void 0),c}}}function v(t,e,A,r){var n=e&&e.prototype instanceof p?e:p,i=Object.create(n.prototype),o=new b(r||[]);return i._invoke=function(t,e,A){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return O()}for(A.method=n,A.arg=i;;){var o=A.delegate;if(o){var a=k(o,A);if(a){if(a===c)continue;return a}}if("next"===A.method)A.sent=A._sent=A.arg;else if("throw"===A.method){if("suspendedStart"===r)throw r="completed",A.arg;A.dispatchException(A.arg)}else"return"===A.method&&A.abrupt("return",A.arg);r="executing";var u=g(t,e,A);if("normal"===u.type){if(r=A.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:A.done}}"throw"===u.type&&(r="completed",A.method="throw",A.arg=u.arg)}}}(t,A,o),i}function g(t,e,A){try{return{type:"normal",arg:t.call(e,A)}}catch(t){return{type:"throw",arg:t}}}function p(){}function m(){}function E(){}function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function I(t){var e;this._invoke=function(A,n){function i(){return new Promise((function(e,i){!function e(A,n,i,o){var a=g(t[A],t,n);if("throw"!==a.type){var u=a.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,o)}))}o(a.arg)}(A,n,e,i)}))}return e=e?e.then(i,i):i()}}function k(t,e){var A=t.iterator[e.method];if(void 0===A){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=g(A,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,c;var n=r.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function U(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(U,this),this.reset(!0)}function B(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var A=-1,n=function e(){for(;++A<t.length;)if(r.call(t,A))return e.value=t[A],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},,,,function(t,e,A){"use strict";A.r(e);var r=A(0),n=A.n(r),i=A(1),o=A.n(i),a=A(2),u=A.n(a),s=A(3),c=A.n(s),f=A(5),h=A(6);new(function(){function t(e){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.a(e),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new h.a(e);u()(this,t),this.t=e,this.storage=A,this.api=r}var e;return c()(t,[{key:"initialize",value:function(){var t=this;this.initializeElements(),this.t.get("board","private","userId","").then((function(e){return t.setUserId(e)})),this.t.get("board","private","apiToken","").then((function(e){return t.setApiToken(e)})),this.listenToSubmit()}},{key:"initializeElements",value:function(){this.$submitButton=document.getElementById("submit-btn"),this.$userId=document.getElementById("user-id"),this.$apiToken=document.getElementById("api-token")}},{key:"setUserId",value:function(t){this.$userId.value=t}},{key:"setApiToken",value:function(t){this.$apiToken.value=t}},{key:"listenToSubmit",value:function(){var t=this;this.$submitButton.addEventListener("click",(function(){return t.handleSubmit()}))}},{key:"handleSubmit",value:(e=o()(n.a.mark((function t(){var e=this;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$submitButton.disabled=!0,t.next=3,Promise.all([this.t.set("board","private","userId",this.$userId.value),this.t.set("board","private","apiToken",this.$apiToken.value)]);case 3:return t.abrupt("return",this.api.getUserProfile().then((function(t){return e.storage.setUser({name:t.data.profile.name,loggedIn:!0}).then((function(){return e.t.closePopup()}))})));case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}())(TrelloPowerUp.iframe()).initialize()}]);