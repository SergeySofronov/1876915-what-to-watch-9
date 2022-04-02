import { store } from '../store/index.js';
type State = ReturnType<typeof store.getState>;

export type { State };
