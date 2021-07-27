import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';
import {Component} from './components/component.js'

class App {
    private readonly page: Component & Composable;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title?', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const note = new NoteComponent("Today's Diary", '잘 지내는 지 걱정 된다. 생각하지 않으려는 순간이 내겐 더 고통스러워.');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo List', '잠 잘 자기');
        this.page.addChild(todo);

        const video = new VideoComponent('Video Title', 'https://youtu.be/4bus7zF6K-Y');
        this.page.addChild(video);
    }
}

// querySelector 는 HTMLElement | null 타입이 확실하기 때문에 ! as 사용
new App(document.querySelector('.document')! as HTMLElement)