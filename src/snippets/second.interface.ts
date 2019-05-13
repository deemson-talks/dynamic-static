import {Chew} from "./Chew";
import {Trash} from "./Trash";

class Return implements Trash {
    moveToTrashBin() {
        console.log("moving chewed bubble gum to trash bin");
    }
}

class Arg implements Chew {
    chewBubbleGum(): Return {
        console.log("chewing bubble gum");
        return {};
    }
}

function doCoolStuff(arg: Chew): Trash {
    return arg.chewBubbleGum();
}

let trash = doCoolStuff(new Arg());
trash.moveToTrashBin();
