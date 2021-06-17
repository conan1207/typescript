import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement>{


    constructor(title: string, url: string) {
      super(`<section class="image">
              <div class="image__holder">
                <img class="image__thumbnail">
                <p class="image__title"></p>
              </div>
            </section>`);
      
      // 사용자에게 받을 title, url은 innerHTML에 넣는 것은 좋지 않음. 코드를 넣으면 적용 되기에 필요한 부분만 업데이트
      const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
      imageElement.src = url;
      imageElement.alt = title;

      const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
      titleElement.textContent = title;
    }
}