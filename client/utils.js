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
    sensitivity: 10,
    minAvgSpeed: 0.5,
    maxScrollTime: 150
});

const isEditor = location.href.endsWith('8080') || location.href.endsWith('editor');

export default { until, SCROLL_PARAMS, isEditor };