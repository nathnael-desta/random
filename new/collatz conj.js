function colatzSteps(n, steps = 0) {
    if (n == 1) {
        return steps;
    } else if (n % 2 == 0) {
        steps++;
        n = n / 2;
        return colatzSteps(n, steps);
    } else if (n % 2 != 0) {
        steps++;
        n = (3 * n) + 1;
        return colatzSteps(n, steps);
    }
}

console.log(colatzSteps(27))