let digital_clock = document.querySelector(".digital_clock");
let selectData = document.querySelectorAll("select");
let set_alarm = document.querySelector(".set_alarm");
let add_alarm = document.querySelector(".add_alarm");
let list = document.querySelector(".list");

let ringtone = new Audio("alarm.mp3");
// console.log(selectData);

const alarmList = []; // for storing all the alarms
let alarmTimeout = null;


//for populating options in select tag for hours 
for(let x = 12 ; x >= 0 ; x--)
{
    if(x<=9)
    {
        x = `0${x}`;
    }
    
    let option = ` <option value="${x}"> ${x} </option> `;
    selectData[0].firstElementChild.insertAdjacentHTML("afterend",option);
    
}

//for populating options in select tag for minutes
for(let x = 59 ; x >= 0 ; x--)
{
    if(x<=9)
    {
        x = `0${x}`;
    }
    
    let option = ` <option value="${x}"> ${x} </option> `;
    selectData[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

//for populating AM / PM 
for(let x = 0 ; x <2; x++)
{
    let ampm;
    if(x == 1)
    {
        ampm = "AM"
    }
    else ampm = "PM";

    let option = ` <option value="${ampm}"> ${ampm} </option> `;
    selectData[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

let isAlarm , timeSet;




// Function to display current time in 12-hour format
function displayTime() {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const amPm = hour >= 12 ? 'PM' : 'AM';
  
    // Convert the hour to 12-hour format
    hour = hour % 12 || 12;
  
   
    digital_clock.textContent = `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
  }
  
  // Function to update the clock every second
  setInterval(displayTime, 1000);
  



//  alarmTimeout for getting id so that it can be cleared
 alarmTimeout = setInterval(()=>{
    let date = new Date();
    // digital_clock.innerHTML = date.toLocaleTimeString();

    //getting current hour
    let h = date.getHours();
    //as getHours gives value of 0 to 23 hr. so we are changing to our variant am/pm 
    let ampm = "AM";
    if(h>12){
        h = h - 12;
        ampm = "PM";
    }

    //to convert it into 00 2-digit format
    if(h<=9)
    {
        h = `0${h}`;
    }

    //getting current minutes
    let m = date.getMinutes();
    if(m<=9)
    {
        m = `0${m}`;
    }

   for(i=0;i<alarmList.length ;i++){

    if(alarmList[i] === `${h}:${m}${ampm}`){
        ringtone.play();
        
     }

   }
 },1000);


// Stop an alarm 
function clearAlarm(){
    ringtone.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
        
        
    }
}

//delete an alarm on clicking delete alarm button from array(not working )
list.addEventListener('click', (e) => {
    if(e.target.classList.contains("clear_alarm"))
    {
        e.target.parentElement.remove(); // deletes the <li> 
    }
    
});

// removes an alarm from the array when "Delete Alarm" is clicked
remove = (value) => {

    let newAlarm = alarmList.filter((ele) => ele != value);
    alarmList.length = 0;
    alarmList.push.apply(alarmList,newAlarm);

    console.log("alarmList",alarmList);
    console.log("newAlarm",newAlarm);

}


//view alarm list
function viewAlarmList(time){
    const html = ` <li class="alarm_list">
                    ${time}
                    <button class="clear_alarm delete" value=${time} onclick="remove(this.value)" > Delete Alarm </button>
                    </li>`;
    document.querySelector(".list").innerHTML += html;

};



//setting an alarm
set_alarm.addEventListener('click', () => {
    let time = `${selectData[0].value}:${selectData[1].value}${selectData[2].value}`;
    isAlarm = time;
  
   
//add new alarm to alarmList



if(!alarmList.includes(isAlarm)){
    alarmList.push(isAlarm);
 
    viewAlarmList(isAlarm);
   
} 
else{
    alert(`Alarm for ${isAlarm} already set.`);
}



});
