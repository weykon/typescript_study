export namespace 接口 {
    abstract class ElectricAppliance {
        abstract mechineCallPower(): Power | false
    }
    interface MechineCallPower {
        electricWire: ElectricWire
        targetSocket: SocketTerminal
    }
    interface TV2Socket extends MechineCallPower {
        wireType: "AB1"
    }
    interface xbox2Socket extends MechineCallPower {
        wireType: "2hole"
    }

    class TV extends ElectricAppliance {
        tv2Socket: TV2Socket
        mechineCallPower() {
            if (!this.tv2Socket) {
                return false
            }
            return this.tv2Socket.targetSocket.applyPower();
        }
    }

    class XBOX extends ElectricAppliance {
        xbox2Socket: xbox2Socket
        wireChangeHead: "需要转接头ch"
        mechineCallPower() {
            if (this.xbox2Socket?.electricWire.type === "en") {
                return false
            }
            return this.xbox2Socket.targetSocket.applyPower();
        } 
    }

    class ElectricWire {
        power: Power
        receptor: ElectricAppliance
        length: number
        type: string = "ch"
        constructor(type?: string){
            if(type) this.type = type
        }
    }

    class SocketTerminal {
        sockets: Socket[]
        private _power: boolean = false;
        constructor() {
            this._power = true
        }
        applyPower(): Power | false {
            if (!this._power) return false;
            return new Power();
        }
    }

    class Socket {
        IO_code: string
        pinType: string
    }

    class Power {
        V: "220v"
    }

    const tv = new TV();
    const xbox = new XBOX();

    /** 开关swtich */
    tv.tv2Socket = {
        electricWire: new ElectricWire(),
        targetSocket: new SocketTerminal(),
        wireType: "AB1"
    }

    xbox.xbox2Socket = {
        electricWire: new ElectricWire("ch"),
        targetSocket: new SocketTerminal(),
        wireType: "2hole"
    }
    console.log(tv.mechineCallPower());
    console.log(xbox.mechineCallPower());

}