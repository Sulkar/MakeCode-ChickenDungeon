// START
function setPlayerTileX (xTile: number) {
    mySprite.x = xTile * 16 + sprites.readDataNumber(mySprite, "offset")
}
function getPlayerTileX () {
    return Math.floor(mySprite.x / 16)
}
// Debug
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText(mySprite.x)
})
// move up
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(0, -1)
})
function changeDirection (sprite: Sprite, direction: string) {
    sprite.sayText(sprites.readDataString(sprite, "direction"))
    if (sprites.readDataString(sprite, "direction") == "right" && direction == "left") {
        sprite.image.flipX()
        sprites.setDataString(sprite, "direction", "left")
    } else if (sprites.readDataString(sprite, "direction") == "left" && direction == "right") {
        sprite.image.flipX()
        sprites.setDataString(sprite, "direction", "right")
    }
}
function getPlayerTileY () {
    return Math.floor(mySprite.y / 16)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(1, 0)
    changeDirection(mySprite, "right")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(0, 1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(-1, 0)
    changeDirection(mySprite, "left")
})
function setPlayerTileY (yTile: number) {
    mySprite.y = yTile * 16 + sprites.readDataNumber(mySprite, "offset")
}
function movePlayer (x: number, y: number) {
    if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(getPlayerTileX() + x, getPlayerTileY() + y)))) {
        setPlayerTileX(getPlayerTileX() + x)
        setPlayerTileY(getPlayerTileY() + y)
    }
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
// 16x16 Tiles
tiles.setCurrentTilemap(tilemap`Level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 2))
sprites.changeDataNumberBy(mySprite, "offset", 8)
sprites.setDataString(mySprite, "direction", "right")
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
