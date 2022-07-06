class AlarmClock {
    constructor(alarmCollection = [], timerID = null) {
        this.alarmCollection = alarmCollection;
        this.timerId = timerID;
    }

    addClock(time, funcAction, id) {
        let date;
        let timeHours;
        let timeMinuts;
        
        if (id === undefined) {
            throw new Error('error text');
        } 
        
        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('Будильник на указанное время уже установлен');
            return;
        }

        this.alarmCollection.push({id, 
            time, 
            callback : funcAction})
    }

    removeClock(id) {
        let result = this.alarmCollection.filter((item, index, arr) => {
                if (item.id === id) {
                    arr.splice(index, 1)
                }
            }
        )

        if (result) {
            return true;
        } else {
            return false;
        }
      
    }

    getCurrentFormattedTime() {
        const currentDate = new Date
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
       
        return `${hours}:${minutes}`;    
    }

    start() {
        let that = this
        function checkClock(alarm) {
            if (alarm.time === that.getCurrentFormattedTime()) {
               alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                (this.alarmCollection.forEach((item) => checkClock(item)))
            }, 1000)
        }
    }

    stop() {
        if (typeof(this.timerId) === 'number') {
            clearInterval(this.timerId);
            this.timerId = null
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((item,) => console.log(`Будильник №${item.id} заведен на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

function testCase() {
    let phoneAlaram = new AlarmClock();
    let time = settingTheTime()  
    let timeSecond = settingTheTime(0, 1)
    let titimethird = settingTheTime(0, 2) 
    
 
    phoneAlaram.addClock(time, () => console.log('Пора вставать'), 1)
    phoneAlaram.addClock(timeSecond, () => {console.log('Давай вставай уже'); phoneAlaram.removeClock(2)}, 2)
    phoneAlaram.addClock(titimethird, () => {
        console.log('Вставай а то проспишь!');
        phoneAlaram.clearAlarms();
        phoneAlaram.printAlarms();
    }, 3)
    
    
 
 
    function  settingTheTime(hours = 0, minuts = 0) {
        let currentDate = new Date();
        hours = currentDate.setHours(currentDate.getHours() + hours, currentDate.getMinutes() + minuts)
        hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        minuts = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
       
        return `${hours}:${minuts}`;   
    }


    phoneAlaram.printAlarms()
    phoneAlaram.start()
}


testCase()
