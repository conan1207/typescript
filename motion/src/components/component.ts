export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}
/**
 * Encapsulete the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component{
   protected readonly element: T;

   constructor(htmlStrinng: string){
    const template = document.createElement('template');
    template.innerHTML = htmlStrinng;
      // 사용자에게 받을 title, url은 innerHTML에 넣는 것은 좋지 않음. 코드를 넣으면 적용 되기에 필요한 부분만 업데이트
      this.element = template.content.firstElementChild! as T;
   }

   attachTo(parent: HTMLElement, position:InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);
}
}