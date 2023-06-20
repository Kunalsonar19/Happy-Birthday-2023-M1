window.onresize = function () {
    var newPageWidth = window.innerWidth;
    if (newPageWidth < pageWidth) {
        for (var i = 0; i < blocks.length; i++) {
            var blockWidth = hBlocks[i].offsetWidth;
            var blockHeight = hBlocks[i].offsetHeight;
            var blockX = blocks[i].body.position.x - blockWidth / 2;
            var blockY = blocks[i].body.position.y - blockHeight / 2;

            if (blockX < 0) {
                blockX = blockWidth / 2;
            } else if (blockX + blockWidth > newPageWidth) {
                blockX = newPageWidth - blockWidth / 2;
            }

            Body.setPosition(blocks[i].body, {
                x: blockX,
                y: blockY
            });
        }
    }
    pageWidth = newPageWidth;
};
