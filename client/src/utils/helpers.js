export const getAverageFromArray = (arr) => {
    return (
        arr.reduce((a, b) => {
            return a + b;
        }, 0) / arr.length
    )
        .toFixed(1)
        .toString();
};

export const changeRateStyles = (rating) => {
    if (rating >= 8.5) {
        return "green";
    } else if (rating >= 7.5) {
        return "light-green";
    } else if (rating >= 6) {
        return "yellow";
    } else if (rating >= 4) {
        return "orange";
    } else {
        return "red";
    }
};
