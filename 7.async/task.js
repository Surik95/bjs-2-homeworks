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

        //date = new Date;
        //Number(timeHours = time[0] + time[1]);
        //Number(timeMinuts = time[3] + time[4])
        //time = date.setHours(timeHours, timeMinuts)

        this.alarmCollection.push({id, 
            time, 
            callback : funcAction})
    }

    removeClock(id) {
        let result = this.alarmCollection.filter((item, index, arr) => {
                if (item.id = id) {
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
        function checkClock(alarm) {
            if (alarm.time === (() => this.getCurrentFormattedTime())) {
                alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval((this.alarmCollection.forEach((item) => checkClock(item))))
        }
    }

    stop() {
        if (typeof(this.timerId) === 'number') {
            clearInterval(this.timerId);
            this.timerId = null
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id, item.time))
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
    
 
    phoneAlaram.addClock(time, () => comnsole.log('Пора вставать',), 1)
    phoneAlaram.addClock(timeSecond, () => {console.log('Давай вставай уже'); phoneAlaram.removeClock(2)}, 2)
    phoneAlaram.addClock(titimethird, () => {
        console.log('Вставай а то проспишь!');
        phoneAlaram.clearAlarms;
        phoneAlaram.printAlarms;
    }, 3)
    
    
 
 
    function  settingTheTime(hours = 0, minuts = 0) {
        let currentDate = new Date();
        hours = currentDate.getHours() + hours < 10 ? `0${currentDate.getHours() + hours}` : `${currentDate.getHours() + hours}`;
        minuts = currentDate.getMinutes() + minuts < 10 ? `0${currentDate.getMinutes() + minuts}` : `${currentDate.getMinutes() + minuts}`;
       
        return `${hours}:${minuts}`;   
    }


    phoneAlaram.printAlarms()

}


testCase()
