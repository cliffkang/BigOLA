/*
Your goal is to maximize your own score
Your opponent's is to minimize your score
brute force recursive solution
const firstPick = bag[0] + Math.min(bag[first + 1], bag[last])
const lastPick = bag[last] + Math.min(bag[first], bag[last - 1]);
const myStrategy = Math.max(firstPick, lastPick);
*/