import { makeObservable } from 'mobx';
import { TestStore } from './TestStore';
import counterStore from './CounterStore';

export class RootStore {
    testStore: TestStore;
    counterStore = counterStore;

    constructor() {
        this.testStore = new TestStore(); 

        makeObservable(this, {}, { autoBind: true });
    }
}

const rootStore = new RootStore();
export default rootStore;