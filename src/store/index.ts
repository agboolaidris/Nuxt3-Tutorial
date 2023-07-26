import { createStore, Store } from "vuex";
import { state, State } from "./state";
import { InjectionKey } from "vue";

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
});
