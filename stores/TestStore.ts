import { makeObservable, observable, action, runInAction, computed } from 'mobx';
import { testData } from '../src/api/controllers/common-controller';
import { TestDataItem, TestDataResponse } from '../types/test-data-types';

export class TestStore {
    testData: TestDataItem[] = [];
    loading = false;
    error = false;

    constructor() {
        makeObservable(this, {
            testData: observable,
            loading: observable,
            error: observable,
            dataLength: computed,
            fetchData: action
        });
    }

    fetchData = async () => {
        this.loading = true;

        try {
            const response: TestDataResponse = await testData(); 
            runInAction(() => {
                this.testData = response.data;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.error = true;
                this.loading = false;
            });
        }
    };

    get dataLength() {
        return this.testData.length;
    }
}