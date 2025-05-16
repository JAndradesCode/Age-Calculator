// Age calculator

//function calculateAge()

function calculateAge(){
    const birthDateInput=document.getElementById('birthdate').value;
    const resultDiv=document.getElementById('result');

    //get input date and adjust for timezone
    const birthDate=new Date(birthDateInput +'T00:00:00');
    console.log(birthDate);

    const today=new Date();
    console.log(today);

    //calculate age
    let age=today.getFullYear() - birthDate.getFullYear();
    console.log(age);

    const monthDifference=today.getMonth() - birthDate.getMonth();
    console.log(monthDifference);

        if(monthDifference<0 || (monthDifference===0 && today.getDate()< birthDate.getDate())){
            age--;
        }
        console.log("age " + age);
    
    //calculate months and days
    //months:
    let months=monthDifference;
        if(months<0){
            months+=12;
        }
        console.log(months);
    
    //days:
    let days=today.getDate() - birthDate.getDate();
    console.log(days);
        if(days<0){
            const lastMonth=new Date(today.getFullYear(), today.getMonth()-1, birthDate.getDate());
            console.log("Last month: "+lastMonth);

            let d=today-lastMonth;
            console.log(d); //will return milliseconds

            //convert milliseconds into days
            days=Math.floor((today-lastMonth) / (1000*60*60*24)); //1000 milliseconds, 60 seconds, 60 minutes, 24 hours
            console.log("days: "+days);
        }
    
    //format birthday
    const formattedBirthDate=birthDate.toLocaleDateString('en-US',{
        weekday: 'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    });

    //display result
    resultDiv.innerHTML=`
        <p>Your birthday: <strong>${formattedBirthDate}</strong></p>
        <p>Your age is:</p>
        <p><strong>${age} years, ${months} months, and ${days} days</strong></p>
    `;
}