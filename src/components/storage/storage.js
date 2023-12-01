export default new class Storage {
    constructor() {
        this.projects = this.retrieveFromLocalStorage('projects') || [];
        this.todos = this.retrieveFromLocalStorage('todos') || [];
    }

    get projects() {
        return this._projects;
    }

    set projects(value) {
        this._projects = value;
        this.saveToLocalStorage('projects', value);
    }

    get todos() {
        return this._todos;
    }

    set todos(value) {
        this._todos = value;
        this.saveToLocalStorage('todos', value);
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
