import createElement from '../utils';
import './ui.css';
import Image from './images/yellow.jpg';

const ui = (() => {
    const render = () => {
        const app = document.querySelector('#content');

        const header = createElement('div', 'header');
        const headerTitle = createElement('h1', 'header-title', 'ToDoTrackr');

        const sidebar = createElement('div', 'sidebar');
        const all = createElement('h3', 'all', 'All');
        const projects = createElement('ul', 'projects', 'Projects');
        const defaultProject = createElement('li', 'default-project', 'Default');

        const main = createElement('div', 'main');
        const mainContainer = createElement('div', 'main-container');
        const mainTitle = createElement('h2', 'main-title', 'Default');
        const addTask = createElement('div', 'add-task', 'Add task');
        const imageContainer = createElement('div', 'image-container');
        const mainImage = createElement('img', 'main-image', null, Image);

        header.append(headerTitle);

        projects.append(defaultProject);
        sidebar.append(all, projects);

        imageContainer.append(mainImage)
        mainContainer.append(mainTitle, addTask)
        main.append(mainContainer, imageContainer);

        app.append(header, sidebar, main);
    }

    return { render };
})();

export default ui;
