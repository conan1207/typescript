type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

// Page = key, PageInfo = value
// MAP과 비슷 하나를 키로 쓰고 하나를 다른 타입으로 묶고 싶을 때...
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'