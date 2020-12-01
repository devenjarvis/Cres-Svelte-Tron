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
export const join_1 = createJoin('s', 'j1', null);
export const join_2 = createJoin('n', 'j2', 0);