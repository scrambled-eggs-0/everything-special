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
    sensitivity: 0,//10 * 700,
    minAvgSpeed: 0,//0.5 * 700,
    maxScrollTime: 150
});

const isEditor = location.origin.endsWith('8080') || location.href.endsWith('editor');

export default { until, SCROLL_PARAMS, isEditor };