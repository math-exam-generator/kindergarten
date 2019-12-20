import random from "lodash/random";

const defaultOpts = {
  operate: "additive",
  scope: 10,
  qty: 60
};

export default class MathGenerator {
  static run(opts) {
    window.mathGenerate = new MathGenerator(opts);
    return window.mathGenerate && window.mathGenerate.generate();
  }
  constructor(opts) {
    this.opts = { ...defaultOpts, ...opts };
    console.log("++++++++++++++++++", opts);
  }

  generate() {
    const { operate, qty } = this.opts;
    let list = [];
    for (var i = 0; i < qty; i++) {
      list.push(this.generateExam());
    }
    return { operate, list };
  }
  generateExam() {
    const { operate } = this.opts;
    switch (operate) {
      case "additive":
        return this.generateAdditive();
      case "subtraction":
        return this.generateSubtraction();
      case "mixed":
        return this.generateMixed();
      default:
        return null;
    }
  }
  generateAdditive() {
    const { scope } = this.opts;
    while (true) {
      let a = random(1, scope - 1);
      let b = random(1, scope - 1);
      if (a + b <= scope) {
        return [a, '+',  b];
      }
    }
  }
  generateSubtraction() {
    const { scope } = this.opts;
    while (true) {
      let a = random(1, scope - 1);
      let b = random(1, scope - 1);
      if (a > b) {
        return [a, '-', b];
      }
    }
  }
  generateMixed() {
    const r = random(0, 1);
    if (r == 0) {
      return this.generateAdditive();
    }
    return this.generateSubtraction();
  }
}
