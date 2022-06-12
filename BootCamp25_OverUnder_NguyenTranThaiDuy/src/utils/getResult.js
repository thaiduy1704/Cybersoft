// Tài - 0 <> Xỉu - 1 <> Thua - (-1)

export const getResult = ({ dice1, dice2, dice3 }) => {
    const sum = dice1 + dice2 + dice3 + 3;
    if (sum > 3 && sum < 11) return 0;
    if (sum > 10 && sum < 18) return 1;
    return -1;


}   