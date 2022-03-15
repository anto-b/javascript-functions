function factorialize(num) {
    return num <= 1 ? 1 : num * factorialize(--num);
}