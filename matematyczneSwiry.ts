function fact(n: number) {
  let r = 1;
  for (let i = 2; i <= n; ++i) {
    r *= i;
  }

  return r;
}

export function newton(n: number, k: number) {
  return fact(n) / (fact(k) * fact(n - k));
}

type QuadZeros =
  | { type: "two"; x1: number; x2: number }
  | { type: "one"; x: number }
  | { type: "none" };

export const DELTA_PREC = 1e-9;
export function quadZeros(a: number, b: number, c: number): QuadZeros {
  const delta = b ** 2 - 4 * a * c;

  if (Math.abs(delta) < DELTA_PREC) {
    return { type: "one", x: -b / (2 * a) };
  } else if (delta > 0) {
    const d_sqrt = Math.sqrt(delta);
    return {
      type: "two",
      x1: ((-b + d_sqrt) / 2) * a,
      x2: ((-b - d_sqrt) / 2) * a,
    };
  } else {
    return { type: "none" };
  }
}
