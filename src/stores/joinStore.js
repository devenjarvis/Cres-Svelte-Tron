/*** Imports ***/
import { writable } from 'svelte/store';
import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';

// This function holds all the definition for a join. Namely it handles:
// 1. Subscribing to the signal
// 2. Simplifying the process to publish an event to the signal
// 3. Unsubscribing from the signal when the app closes
function createJoin(signalType, signalName, initValue) {
	const { subscribe, set, update } = writable(initValue, function start(set) {
        const subId = CrComLib.subscribeState(signalType, signalName, (value) => set(value));
    
        return function stop() {
            CrComLib.unsubscribeState(signalType, signalName, subId);
        };
    });

	return {
		subscribe,
        set,
        update,
        publish: (value) => {CrComLib.publishEvent(signalType, signalName, value);}
	};
}

// This is where you define all joins oyu want. One line per join
export const serialJoin1 = createJoin('s', '1', null);
export const analogJoin2 = createJoin('n', '2', 0);
export const digitalJoin3 = createJoin('b', '3', false);
export const digitalJoin4 = createJoin('b', '4', false);
export const digitalJoin5 = createJoin('b', '5', false);
export const digitalJoin6 = createJoin('b', '6', false);

export const currentDate = createJoin('s', '11', null);
export const currentTime = createJoin('s', '12', null);
export const currentPage = createJoin('s', '13', null);