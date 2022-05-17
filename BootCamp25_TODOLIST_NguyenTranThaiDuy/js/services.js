export default class Services {
    fetchData() {
        return axios({
            url: "https://625e36346c48e8761ba6af9e.mockapi.io/api/TodoLists",
            method: "GET"
        })
    }
    deleteToDoById(id) {
        return axios({
            url: `https://625e36346c48e8761ba6af9e.mockapi.io/api/TodoLists/${id}`,
            method: "DELETE"
        })
    }
    addTodo(todo) {
        return axios({
            url: "https://625e36346c48e8761ba6af9e.mockapi.io/api/TodoLists",
            method: "POST",
            data: todo,
        })
    }
    updateTodo(todo) {
        return axios({
            url: `https://625e36346c48e8761ba6af9e.mockapi.io/api/TodoLists/${todo.id}`,
            method: "PUT",
            data: todo,

        })
    }
}