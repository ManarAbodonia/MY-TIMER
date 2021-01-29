/*---------Declare the form submit and the div will contain the new events.--------*/
export const eventSubmit=document.getElementById("submit");
       let see=document.getElementById("see")



 /*---------the main function of the app.--------*/      
export let addCounter= ()=>{


    //Declare the the inputs of the events[name,date] and get it`s values.
    const eventName = document.getElementById("eventName").value;
    let eventDate = new Date(document.querySelector("#eventDate").value);


    //Check if one inputs or more are empty.
    if(eventName===""||eventDate.toDateString()==="Invalid Date"){
        alert("ALL INPUTS NOT ENTERED");
    }



    /*---------includes Calculation and add new events------*/
    else{

        //creat new element and give it new attribute for styling.
        let newEvent = document.createElement("li");
            newEvent.setAttribute("id", "event");


        //calculation
        const fun = setInterval(() => {

                // Calculate the time differance in Milliseconds.
                let leftTime = eventDate.getTime() - new Date().getTime();

                // calculate the Days.
                let leftDays = Math.floor((leftTime / (1000 * 3600 * 24)));


                // calculate the Hours.
                let leftHours = Math.floor((leftTime % (1000 * 3600 * 24)) / (1000 * 3600));


                //Calculate the Minutes.
                let leftMinutes = Math.floor((leftTime % (3600 * 1000)) / (60 * 1000));


                //Calculate the Seconds.
                let leftSeconds = Math.floor((leftTime % (60 * 1000)) / (1000));


                //Add the values of calculation to the li contains the event.
                newEvent.innerText =
                    `The event is: ${eventName}
        
                 The remain time is: ${leftDays}d:${leftHours}h:${leftMinutes}m:${leftSeconds}s`;


                //The alert appears after the time is finished and removing the ended event.
                if (leftTime < 0) {
                    clearInterval(fun);
                    alert(`the ${eventName} event is starting now.`);
                    newEvent.remove();
                }
            }, 1000);


            //Add the new li contain the new event in the parentNode
            show.appendChild(newEvent);

            //Reset the form after every submission.
            document.getElementById("start").click();
    }

}