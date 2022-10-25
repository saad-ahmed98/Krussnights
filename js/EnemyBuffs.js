class EnemyBuffs extends Buffs {
    constructor() {
        super()
    }

    initModifiers() {
        this.modifiers = {
            aspd: 0,
            atkinterval: 0,
            atk: 0,
            def: 0,
            flatdef: 0,
            range: 0,
            flatres: 0,
            res: 0,
            dmg: 1,
            targets: 0,
            splash: false,
            splashradius: 0,
            dmgtype: "",
            standby: true,
            speed: 0,
            taunt: 1,
            inspire: false,
            speedpercent:1,
            flatmultiatk:1,
            flatmultidef:1,
        }
    }

    getStandby() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.standby;
    }

    getFinalSpeed(speed){
        this.initModifiers();
        this.sumBuffs();
        return (speed + this.modifiers.speed)*(this.modifiers.speedpercent)
    }
    getInspire(){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.inspire;
    }
}