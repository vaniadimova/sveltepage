import {writable} from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 5,
        text: "Each of these pages mentioned a need for a svelte.config.js. It wasn't clear whether the svelte.config.js config needed to be written any differently from that of the Svelte Rollup Plugin in rollup.config.js (especially with respect to the production variable).",
    },
    {
        id: 2,
        rating: 4,
        text: " Collect some data that would be placed in the storeEach of these pages mentioned a need for a svelte.config.js. It wasn't clear whether the svelte.config.js config needed to be written any differently from that of the Svelte Rollup Plugin in rollup.config.js (especially with respect to the production variable). ",
    },
    {
        id: 3,
        rating: 3,
        text: "Each of these pages mentioned a need for a svelte.config.js. It wasn't clear whether the svelte.config.js config needed to be written any differently from that of the Svelte Rollup Plugin in rollup.config.js (especially with respect to the production variable).",
    }
]);