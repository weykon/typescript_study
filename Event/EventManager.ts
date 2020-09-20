class mNode {
    emit(strType: string, ...args: any) {

    }
    on(strType: string, cb: (...args: any) => void) {
        
    }

    _event: Array<mEvent> = []
}
class mEvent {
    name!: string
}


let handle = new mNode()

handle.on('a', (e) => {
    console.log(e)
})

