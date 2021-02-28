namespace AWAIT {
  async function main() {
    console.log(1);
    try {
        await promise(false);
    } catch (error) {
        
    }
    console.log(2);
  }

  function promise(b: boolean) {
    return new Promise<void>((suc, fail) => {
      b ? suc() : fail();
    });
  }

  main()
}
