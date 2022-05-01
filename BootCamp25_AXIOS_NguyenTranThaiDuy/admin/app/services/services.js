function Services() {
    this.fetchData = function () {
        return axios({
            url: "https://625e36346c48e8761ba6af9e.mockapi.io/api/Users",
            method: "GET"
        })

    }
    this.deletePeopleById = function (id) {
        return axios({
            url: `https://625e36346c48e8761ba6af9e.mockapi.io/api/Users/${id}`,
            method: "DELETE"
        })
    }
    this.postPeople = function (people) {
        return axios({
            url: "https://625e36346c48e8761ba6af9e.mockapi.io/api/Users",
            method: "POST",
            data: people,

        })
    }

    this.getPeopleById = function (id) {
        return axios({
            url: `https://625e36346c48e8761ba6af9e.mockapi.io/api/Users/${id}`,
            method: "GET"
        })
    }
    this.putPeople = function (people) {
        return axios({
            url: `https://625e36346c48e8761ba6af9e.mockapi.io/api/Users/${people.id}`,
            method: "PUT",
            data: people
        })
    }

}