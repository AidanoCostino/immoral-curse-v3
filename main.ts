namespace SpriteKind {
    export const Rock = SpriteKind.create()
}
function player_creation () {
    Character = sprites.create(img`
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . 3 3 3 2 2 3 3 3 . . . . 
        . . . 3 3 3 2 2 2 2 3 3 3 . . . 
        . . 3 3 3 e e e e e e 3 3 3 . . 
        . . 3 3 e 2 2 2 2 2 2 e e 3 . . 
        . . 3 e 2 3 3 3 3 3 3 2 e 3 . . 
        . . 3 3 3 3 e e e e 3 3 3 3 . . 
        . 3 3 e 3 b f 4 4 f b 3 e 3 3 . 
        . 3 e e 4 1 f d d f 1 4 e e 3 . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(Character)
    tiles.placeOnTile(Character, tiles.getTileLocation(0, 15))
    Character.sayText("How did I end up here?", 5000, false)
    scene.followPath(Character, scene.aStar(tiles.getTileLocation(0, 15), tiles.getTileLocation(1, 15)), 10)
    pause(2500)
    controller.moveSprite(Character)
    Torch = Inventory.create_item("Torch", assets.image`Torch`)
    Gold_Coin = Inventory.create_item("Gold Coin", assets.image`myImage`)
    toolbar = Inventory.create_toolbar([Torch, Gold_Coin], 5)
    toolbar.set_color(ToolbarColorAttribute.BoxOutline, 15)
    toolbar.setPosition(80, 290)
    toolbar.setFlag(SpriteFlag.Ghost, true)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) + 1)
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 5) {
        toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    }
})
function makeRocks () {
    let Rock2: Sprite[] = []
    for (let index = 0; index <= 9; index++) {
        Rock2[index] = sprites.create(assets.image`Rocks`, SpriteKind.Rock)
    }
    tiles.placeOnRandomTile(Rock2.removeAt(0), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(1), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(2), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(3), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(4), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(5), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(6), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(7), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(8), sprites.dungeon.floorDark0)
    tiles.placeOnRandomTile(Rock2.removeAt(9), sprites.dungeon.floorDark0)
}
function Make_Variables () {
    RoomNumber = 1
}
let RoomNumber = 0
let toolbar: Inventory.Toolbar = null
let Gold_Coin: Inventory.Item = null
let Torch: Inventory.Item = null
let Character: Sprite = null
tiles.setTilemap(tilemap`level4`)
makeRocks()
Make_Variables()
player_creation()
game.onUpdate(function () {
    if (Character.x > 80) {
        toolbar.setPosition(Character.x, Character.y + 45)
    }
    if (Character.x < 80) {
        toolbar.setPosition(80, Character.y + 45)
    }
    if (Character.x > 432) {
        toolbar.setPosition(432, Character.y + 45)
    }
    if (Character.y > 454) {
        toolbar.setPosition(Character.x, 497)
    }
    if (Character.y > 454 && Character.x > 432) {
        toolbar.setPosition(432, 497)
    }
})
