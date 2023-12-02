export default new class Storage {
    #todoAppData;

    constructor() {
        this.#todoAppData = this.retrieveFromLocalStorage('todoAppData') || [];
    }

    get todoAppData() {
        return this.#todoAppData;
    }

    set todoAppData(value) {
        this.#todoAppData = value;
        this.saveToLocalStorage('todoAppData', value);
    }

    retrieveFromLocalStorage(key) {
        const dataJSON = localStorage.getItem(key);
        return JSON.parse(dataJSON);
    }

    saveToLocalStorage(key, data) {
        const dataJSON = JSON.stringify(data);
        localStorage.setItem(key, dataJSON);
    }
}
