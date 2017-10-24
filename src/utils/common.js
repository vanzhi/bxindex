/* setInterval对象list */
const _INTERVALLIST = {}

export const setScrollTop = (top) => {
    _INTERVALLIST['setScrollTop'] = _INTERVALLIST['setScrollTop'] || [];
    
    let time = 300;
    let tick = 10;
    let count = 0;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let step = (top - scrollTop) / time * tick;
    
    while(_INTERVALLIST['setScrollTop'].length > 0) {
    clearInterval(_INTERVALLIST['setScrollTop'][0])
    _INTERVALLIST['setScrollTop'].splice(0, 1)
    }
    
    let interval = setInterval(() => {
    count ++;
    
    if (count * tick > 300) {
    clearInterval(interval);
    document.documentElement.scrollTop = document.body.scrollTop = top;
    _INTERVALLIST['setScrollTop'].splice(0, 1)
    } else {
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop + step * count;
    }
    }, tick)
    
    _INTERVALLIST['setScrollTop'].push(interval);
}

const common = {
    setScrollTop
}

export default common