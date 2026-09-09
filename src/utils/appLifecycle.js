// Module-level in-memory flag tracking if the initial browser app load has occurred
let hasAppLoadedInitial = false;

export function isInitialAppLoad() {
  if (hasAppLoadedInitial) {
    return false;
  }
  return true;
}

export function markAppLoaded() {
  hasAppLoadedInitial = true;
}
