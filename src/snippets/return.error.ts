import {Chew} from "./Chew";

class Arg {
    chewBubbleGum() {
        console.log("chewing bubble gum");
        return {};
    }
}

function doCoolStuff(arg: Chew) {
    return arg.chewBubbleGum();
}

let trash = doCoolStuff(new Arg());
trash.moveToTrashBin();
