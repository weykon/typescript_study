import { GameEvent } from "./game_event";

export class GameUIEvent implements GameEvent<GameUIEvent>{
    handles!: [[eventName: string, todo: any]];
}