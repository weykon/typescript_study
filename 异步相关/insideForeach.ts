namespace 异步相关 {
  const arr = [3, 4, 5, 6];

  async function main() {
    let curPromise = Promise.resolve();

    arr.forEach((e) => {
      curPromise = curPromise.then(async () => {
          await new Promise<void>((suc, fail) => {
            setTimeout(() => {
              if (e <= 5) {
                console.log(e);
                suc();
              } else {
                fail();
              }
            }, 2 * 1000);
          });
        
      });
    });
    curPromise.then(() => console.log("ShowDone!"));
  }

  main();
}
