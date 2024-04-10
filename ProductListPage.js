import { request } from "./api";

export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";

  $page.innerHTML = `<h1>상품 목록</h1><a href="/shopping/cart/">shopping</a>`;

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  // TODO: 왜 useEffect() 안쓰고 그냥 명령형처럼 사용할까?
  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };

  const productList = new ProductList({
    $target: $page,
    iniitalState: this.state,
  });

  // 페이지 생성 시 API 요청해오도록 하는 처리
  fetchProducts();
}
