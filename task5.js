class Device2{
    constructor(typeDevice, sizeDevice, vattDeviceOut , currentStrength){
        this.voltageInput = "220 v",
        this.typeDevice = typeDevice,
        this.sizeDevice = sizeDevice,
        this.vattDeviceOut = vattDeviceOut,
        this.currentStrength = currentStrength
    }

    getActiveDevice(active){
        console.log(`Вывод данных образуется при состоянии:${active}`)
    }
}

class MobilleDevice2 extends Device2{
    constructor(type, currentType, typeDevice, sizeDevice, vattDeviceOut , currentStrength){
        super(typeDevice, sizeDevice, vattDeviceOut , currentStrength)
        this.type = type,
        this.currentType = currentType
    }
    getActiveDevice(active){
        console.log(`Вывод данных c телефона образуется при состоянии:${active}`) 
    }
}

const lamp2 = new Device2 ("Lamp", "Small", "60 Вт", "0,052 A");
const computer2 = new Device2 ("Computer", "Average", "300 Вт - 1200 Вт", "21 A")
const phone2 = new MobilleDevice2 ("Iphone", "Постоянный ток","Телефон", "Very Small" ,"2 Вт", "2 A")

lamp2.getActiveDevice("Включено")
console.log(lamp2)
computer2.getActiveDevice("Включено")
console.log(computer2)
phone2.getActiveDevice("Включено")
console.log(phone2)