export function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
        totalElapsed += Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapsed);
}

function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
}

function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
}

export function newTimer(attrs = {}) {
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        elapsed: 0,
        runningSince: null
    };

    return timer;
}

