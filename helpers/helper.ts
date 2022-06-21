export function userUid() {
    return Math.random().toString(16).slice(2);
}

export function taskUid() {
    return Math.random().toString(16).slice(2) + "_TS";
}