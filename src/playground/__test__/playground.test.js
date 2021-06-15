import playground from "../playground";

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
  topOff() {
    this.top -= 1;
  }
}

describe("playground", () => {
  it("should return correct results", () => {
    // Replace the next dummy test with your playground function tests.
    expect(playground()).toBe(120);
  });
});

describe("test hello", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("simply test", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it("before Each", () => {
    stack.push("h");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("h");
  });
  it("top off", () => {
    stack.topOff();
    expect(stack.top).toBe(-2);
    expect(stack.peek).toEqual(undefined);
  });
});
