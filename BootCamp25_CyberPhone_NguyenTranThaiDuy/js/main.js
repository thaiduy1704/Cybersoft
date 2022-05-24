var service = new Services();

function getElement(id) {
  return document.getElementById(id);
}

function getListProduct() {
  getElement("loading").style.display = "block"
  var promise = service.fetchData();
  promise
    .then(function (result) {

      renderHTML(result.data);
      getElement("loading").style.display = "none"

    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(this.arr);
}
getListProduct();

function renderHTML(data) {

  var content = "";
  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    content += ` <div class="col-12 col-md-6 col-lg-4">
            <div class="card cardPhone">
              <img src="./img/${product.hinhAnh}" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h3 class="cardPhone__title">${product.tenSP}</h3>
                    <p class="cardPhone__text">${product.moTa}</p>
                  </div>
                  <div>
                    <h3 class="cardPhone__title">$${product.gia}</h3>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="cardPhone__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div>
                    <button class="btnPhone-shadow">
                      <i class="fa fa-shopping-cart"></i> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> `;
  }
  getElement("productList").innerHTML = content;
}
