const until = (condition, checkInterval=400) => {
    if(!!condition()) return true;
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval)
    })
}

const SCROLL_PARAMS = Object.freeze({
    sensitivity: 10 * 1300,
    minAvgSpeed: 0.5 * 1300,
    maxScrollTime: 150
});

if(typeof location === 'undefined') var location = {origin: '', href: ''};
const isEditor = location.origin.endsWith('8080') || location.href.endsWith('editor');

export default { until, SCROLL_PARAMS, isEditor };