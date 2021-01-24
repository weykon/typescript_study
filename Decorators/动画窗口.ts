function ContainInWindow(param: string) {
  switch (param) {
    case "center": {
      console.log("窗口为居中类型");
      return function (target: typeof Msg) {
        let enter = target.prototype.Enter;
        target.prototype.Enter = () => {
          console.log("窗口动画开始");
          enter();
          return Promise.resolve();
        };
        let end = target.prototype.End;
        target.prototype.End = () => {
          end();
          console.log("窗口动画结束");
          return Promise.resolve();
        };
      };
    }
    default: {
      return function (target: typeof Msg) {};
    }
  }
}

@ContainInWindow("center")
class Msg {
  constructor(public content: string) {
    this.content = content;
  }
  async Enter() {
    console.log("入口信息:---1");
  }
  async Showing() {
    console.log("播放信息:---2");
    console.log(this.content);
  }
  async End() {
    console.log("出口信息:---3");
  }
  async Show() {
    let curPromise = Promise.resolve();
    let list = [this.Enter, this.Showing.bind(this), this.End];
    list.forEach((element) => {
      curPromise = curPromise.then(async () => await element());
    });
    curPromise.then(() => console.log("ShowDone!"));
  }
}
