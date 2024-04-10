// ProductList.js
export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }
    $productList.innerHTML = `
      ${this.state
        .map(
          (product) =>
            `
          <li class="Product">
            <a href="/products/${product.id}">
              <img src="${product.imageUrl}">
              <div class="Product__info">
                <div>${product.name}</div>
                <div>${product.price}~</div>
              </div>
            </a>
          </li>
        `
        )
        .join("")}`;
  };

  this.render();

  // 이제 ProductList에서 a 태그로 이동시키는 대신에, 아래 코드처럼 onClick 콜백 함수를 통해 처리하도록 변경합니다.
  $productList.addEventListener("click", (e) => {
    // data-product-id라는 이름으로 custom attribute를 만들고, event delegation을 통해 productId를 뽑아와서 routeChange 함수를 통해 URL 변경을 처리합니다.
    const $li = e.target.closest("li");
    const { productId } = $li.dataset;

    if (productId) {
      routeChange(`/products/${productId}`);
    }
  });
}

/*
기본적으로 location.href 등을 이용해 URL 변경 처리를 하면, 브라우저는 해당 페이지로 이동하면서 페이지를 새로 불러오게 됩니다. history.pushState를 이용하면 URL만 업데이트하면서 웹 브라우저의 기본적인 페이지 이동 처리가 되는 것을 방지할 수 있습니다.
출처: https://prgms.tistory.com/113 [프로그래머스 공식 블로그:티스토리]

*/
