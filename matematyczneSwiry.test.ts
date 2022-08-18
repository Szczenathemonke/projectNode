// matematyczneSwiry.test.ts
import { describe, it, expect, assert } from "vitest";
import { newton, quadZeros } from "./matematyczneSwiry";
describe("#newton", () => {
  it("follows the law of Newton binomial on border cases", () => {
    expect(newton(10, 10)).toEqual(1);
    expect(newton(10, 9)).toEqual(10);
    expect(newton(10, 0)).toEqual(1);
    expect(newton(10, 1)).toEqual(10);
  });
  it("returns a correct value for non-border cases", () => {
    expect(newton(4, 2)).toEqual(6);
    expect(newton(13, 11)).toEqual(78);
    expect(newton(10, 5)).toEqual(252);
  });
});
describe("#quadZeros", () => {
  it("returns a proper value if no zeros are found", () => {
    expect(quadZeros(1, 2, 10)).toEqual({ type: "none" });
  });
  it("returns a proper value if there is one zero found", () => {
    expect(quadZeros(1, -4, 4)).toEqual({ type: "one", x: 2 });
    expect(quadZeros(4, -16, 16)).toEqual({ type: "one", x: 2 });
    expect(quadZeros(16, -784, 9604)).toEqual({ type: "one", x: 49.0 / 2 });
  });
  it("returns a proper value if there is two zeros found", () => {
    const result = quadZeros(1, 221.52, -106.56);
    expect(result.type).toEqual("two");
    if (result.type === "two") {
      expect(result.x1).toBeCloseTo(0.48);
      expect(result.x2).toBeCloseTo(-222);
    } else {
      assert(1 > 2, "result is not two zeros");
    }
  });
});
