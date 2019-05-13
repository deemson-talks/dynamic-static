interface Chew {
    chewBubbleGum();
}


function doCoolStuff(arg: Chew) {
    return arg.chewBubbleGum();
}

doCoolStuff({});