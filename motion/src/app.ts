import {PageComponent} from './components/page.js'

class App{
    private readonly page: PageComponent;

    constructor(appRoot:HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot)
    }
}

// querySelector 는 HTMLElement | null 타입이 확실하기 때문에 ! as 사용
new App(document.querySelector('.document')! as HTMLElement)