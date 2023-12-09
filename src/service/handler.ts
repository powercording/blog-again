type Handler<F extends (...args: any[]) => Promise<ReturnType<F>>> = (
  ...args: Parameters<F>
) => Promise<ReturnType<F>>;

const handler = <F extends (...args: any[]) => any>(fn: F): Handler<F> => {
  return async (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.error(err);
    }
  };
};

export default handler;
