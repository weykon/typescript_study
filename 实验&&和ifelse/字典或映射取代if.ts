namespace 字典或映射取代if {
    let problem = {
        go: function (inputDir: number) {
            console.log((<any>problem)['ways'][inputDir]);
        }
    }

    Object.defineProperty(problem, 'ways', {
        value: {
            1: 'left', 2: 'right', 3: 'strianght',
            4: () => {
                console.log('Di Di Mountain')
            }
        }
    });

    problem.go(3)
    problem.go(4)

    let fliter = new Map<string, Function>()
    fliter.set('Sleep', () => { console.log('sleep') })
    fliter.set('Wake', () => { console.log('Wake') })
    function go(inputStr: string) {
        return fliter.get(inputStr)
    }
    console.log((<any>go('Wake'))())
}