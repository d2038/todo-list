// import createElement from '../utils';
// import './ui.css';
// import Image from './images/yellow.jpg';
// import Icon from './images/plus.svg';

// const ui = (projects, todos) => {
//     const render = () => {
//         const app = document.querySelector('#content');

//         const header = createElement('div', 'header');
//         const headerTitle = createElement('h1', 'header-title', 'ToDoTrackr');

//         const sidebar = createElement('div', 'sidebar');
//         const all = createElement('h3', 'all', 'All');
//         const projects = createElement('ul', 'projects', 'Projects');
//         const addProjectContainer = createElement('div', 'add-project-container');
//         const projectIcon = createElement('img', 'project-icon', null, Icon);
//         const addProjectTitle = createElement('div', 'add-project', 'Add project');
//         // const defaultProject = createElement('li', 'default-project', 'Default');

//         const main = createElement('div', 'main');
//         const mainContainer = createElement('div', 'main-container');
//         const mainTitle = createElement('h2', 'main-title', 'Default');
//         const addTaskContainer = createElement('div', 'add-task-container');
//         const addTaskTitle = createElement('div', 'add-task-title', 'Add task');
//         const taskIcon = createElement('img', 'task-icon', null, Icon);
//         const imageContainer = createElement('div', 'image-container');
//         const mainImage = createElement('img', 'main-image', null, Image);

//         header.append(headerTitle);

//         // projects.append(defaultProject);
//         addProjectContainer.append(projectIcon, addProjectTitle);
//         projects.append(addProjectContainer);
//         sidebar.append(all, projects);

//         imageContainer.append(mainImage)
//         addTaskContainer.append(taskIcon, addTaskTitle);
//         mainContainer.append(mainTitle, addTaskContainer)
//         main.append(mainContainer, imageContainer);

//         app.append(header, sidebar, main);
//     }

//     return { render };
// };

// export default ui;
