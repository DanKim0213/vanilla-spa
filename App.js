// App.js
import ProductListPage from "./ProductListPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import CartPage from "./CartPage.js";
import { init } from "./router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({
        $target,
        productId,
      }).render();
    } else if (pathname === "/cart") {
      new CartPage({
        $target,
      }).render();
    }
  };

  // ROUTE_CHANGE 이벤트 발생 시 마다 App의 this.route 함수가 호출되게 하는 효과
  init(this.route);

  // TODO: route()를 실행하기 전에 이벤트 리스너 등록해줘야할까?
  this.route();

  // 뒤로가기, 앞으로가기 발생 시 popstate 이벤트가 발생합니다.
  window.addEventListener("popstate", this.route);
}
