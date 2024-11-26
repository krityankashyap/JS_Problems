function sleep(time){ 
    return new Promise(function (res,rej){
        setTimeout(res,time)
    })

    }

function blockingSleep(ms){
    let timeNow = new Date().getTime(); // t=0
    while(new Date().getTime() < timeNow + ms){

    }
}
async function greeting(){
    console.log("Hello");
   // await sleep(2000);
    blockingSleep(2000);
 console.log("bye");

 

}

greeting();