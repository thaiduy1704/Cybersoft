function Services() {
    this.arr = [];
    this.fetchData = function () {
        var promise = axios({
            url: "https://625e36346c48e8761ba6af9e.mockapi.io/api/Users",
            method: "GET"

        });
        return promise;
    }
}
