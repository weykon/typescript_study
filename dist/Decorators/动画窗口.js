"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ContainInWindow(param) {
    switch (param) {
        case "center": {
            console.log("窗口为居中类型");
            return function (target) {
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
            return function (target) { };
        }
    }
}
let Msg = class Msg {
    constructor(content) {
        this.content = content;
        this.content = content;
    }
    Enter() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("入口信息:---1");
        });
    }
    Showing() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("播放信息:---2");
            console.log(this.content);
        });
    }
    End() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("出口信息:---3");
        });
    }
    Show() {
        return __awaiter(this, void 0, void 0, function* () {
            let curPromise = Promise.resolve();
            let list = [this.Enter, this.Showing.bind(this), this.End];
            list.forEach((element) => {
                curPromise = curPromise.then(() => __awaiter(this, void 0, void 0, function* () { return yield element(); }));
            });
            curPromise.then(() => console.log("ShowDone!"));
        });
    }
};
Msg = __decorate([
    ContainInWindow("center")
], Msg);
//# sourceMappingURL=%E5%8A%A8%E7%94%BB%E7%AA%97%E5%8F%A3.js.map