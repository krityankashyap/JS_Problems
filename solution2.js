function setCancellablrTimeout(cb , delay){
    let timerId = setTimeout(cb,delay);

    return ()=>{
        clearTimeout(timerId);
    }
}