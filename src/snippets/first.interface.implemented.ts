interface Chew {
    chewBubbleGum();
}

class Arg {
    chewBubbleGum() {
        console.log("chewing bubble gum");
    }
}

function doCoolStuff(arg: Chew) {
    return arg.chewBubbleGum();
}

doCoolStuff(new Arg());