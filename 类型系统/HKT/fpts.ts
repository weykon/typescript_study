import { Task } from 'fp-ts/Task'
import { Option, none, fromNullable, some, } from 'fp-ts/Option'
import * as fs from 'fs'
import { createInterface } from 'readline'
import { IOEither, tryCatch as IOEitherTryCatch } from 'fp-ts/IOEither'
import { TaskEither, tryCatch as TaskEitherTryCatch } from 'fp-ts/TaskEither'

namespace HKT {

    function findIndex<A>(
        as: Array<A>,
        predicate: (a: A) => boolean
    ): Option<number> {
        const index = as.findIndex(predicate)
        return index === -1 ? none : some(index)
    }
    function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
        return fromNullable(as.find(predicate))
    }


    function readFileSync(path: string): IOEither<Error, string> {
        return IOEitherTryCatch(
            () => fs.readFileSync(path, 'utf8'),
            (reason) => new Error(String(reason))
        )
    }


    const read: Task<string> = () =>
        new Promise<string>((resolve) => {
            const rl = createInterface({
                input: process.stdin,
                output: process.stdout
            })
            rl.question('', (answer) => {
                rl.close()
                resolve(answer)
            })
        })

    function get(url: string): TaskEither<Error, string> {
        return TaskEitherTryCatch(
            () => fetch(url).then((res) => res.text()),
            (reason) => new Error(String(reason))
        )
    }
}
