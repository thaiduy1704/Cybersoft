export const checkWin = (user, computer) => {

    if (((user === 0) && (computer === 1)) || ((user === 1) && (computer === 2)) || ((user === 2) && (computer === 0))) {
        return 1;

    }
    return 0;
}