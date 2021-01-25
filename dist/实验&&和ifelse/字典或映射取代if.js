"use strict";
var 字典或映射取代if;
(function (字典或映射取代if) {
    let problem = {
        go: function (inputDir) {
            console.log(problem['ways'][inputDir]);
        }
    };
    Object.defineProperty(problem, 'ways', {
        value: {
            1: 'left', 2: 'right', 3: 'strianght',
            4: () => {
                console.log('Di Di Mountain');
            }
        }
    });
    problem.go(3);
    problem.go(4);
    let fliter = new Map();
    fliter.set('Sleep', () => { console.log('sleep'); });
    fliter.set('Wake', () => { console.log('Wake'); });
    function go(inputStr) {
        return fliter.get(inputStr);
    }
    console.log(go('Wake')());
})(字典或映射取代if || (字典或映射取代if = {}));
//# sourceMappingURL=%E5%AD%97%E5%85%B8%E6%88%96%E6%98%A0%E5%B0%84%E5%8F%96%E4%BB%A3if.js.map