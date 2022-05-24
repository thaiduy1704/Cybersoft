function Services() {
    this.arr = [];
    this.fetchData = function () {

        var promise = axios({
            url: "https://625e36346c48e8761ba6af9e.mockapi.io/api/products",
            method: "GET",
        });
        return promise
        


    }

}