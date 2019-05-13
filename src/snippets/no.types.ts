function doCoolStuff(arg) {
    return arg.chewBubbleGum();
}

let trash = doCoolStuff({
    chewBubbleGum: function () {
        console.log("chewing bubble gum");
        return {
            moveToTrashBin: function () {
                console.log("moving chewed bubble gum to trash bin");
            }
        }
    }
});
trash.moveToTrashBin();
