export namespace Game {
    export class GameEvent<T>{
        handles!: [[eventName: string, todo: any]]

    }

    type UpdateUI_HP = {
        eventName: "update_ui_hp"
        todo: (updateElementArr: any[]) => any
    }

    type UpdatePhysice = {
        eventName: "update_physice"
        todo: (time: number) => any
    }

    type EventDefine =
        | UpdateUI_HP
        | UpdatePhysice

    function registerEvent<T extends EventDefine>(
        eventName: T['eventName'],
        todo: Extract<EventDefine, { todo: T['todo'] }>['todo']
    ) {

    }

    registerEvent("update_physice", (time: number) => { })
}
