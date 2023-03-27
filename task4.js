

function Device (typeDevice, sizeDevice, vattDeviceOut , currentStrength){
   this.voltageInput = "220 v",
    this.typeDevice = typeDevice,
    this.sizeDevice = sizeDevice,
    this.vattDeviceOut = vattDeviceOut,
    this.currentStrength = currentStrength
}

Device.prototype.getActiveDevice = function(active){
    console.log(`Вывод данных образуется при состоянии:${active}`) 
}



function MobilleDevice(type,currentType, typeDevice, sizeDevice,vattDeviceOut, currentStrength){
    this.type = type,
    this.currentType = currentType
    this.typeDevice = typeDevice,
    this.sizeDevice = sizeDevice,
    this.vattDeviceOut = vattDeviceOut,
    this.currentStrength = currentStrength
}

MobilleDevice.prototype = new Device();

MobilleDevice.prototype.getActiveDevice = function(active){
    console.log(`Вывод данных c телефона образуется при состоянии:${active}`) 
}

const lamp = new Device ("Lamp", "Small", "60 Вт", "0,052 A");
const computer = new Device ("Computer", "Average", "300 Вт - 1200 Вт", "21 A")
const phone = new MobilleDevice ("Iphone", "Постоянный ток","Телефон", "Very Small" ,"2 Вт", "2 A")

lamp.getActiveDevice("Включено")
console.log(lamp)
computer.getActiveDevice("Включено")
console.log(computer)
phone.getActiveDevice("Включено")
console.log(phone)