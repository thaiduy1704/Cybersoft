var services = new Services();
function getElement(id) {
  return document.getElementById(id);
}
function getListPeople() {
  var promise = services.fetchData();
  promise
    .then(function (result) {
      getElement("loading").style.display = "inline-block";
      renderTable(result.data)
    })
    .catch(function (error) {
      console.log(error);
    })
}
getListPeople();

function renderTable(data) {
  var content = ""
  for (var i = 0; i < data.length; i++) {
    var people = data[i];
    if (people.loaiND == "GV") {

      content += ` <div class="col-12 col-sm-6 col-md-3">
                <div class="card card-list">
                  <div class="card__title">
                    <img class="card-img-top" src="./images/${people.hinhAnh}" alt="" />
                  </div>
                  <div class="card-body">
                    <p>${people.ngonNgu}</p>
                    <h2>${people.hoTen}</h2>
                    <h6>
                     ${people.moTa}
                    </h6>
                  </div>
                </div>
              </div>`
    }
  }
  getElement("peopleList").innerHTML = content;
}