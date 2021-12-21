namespace SpriteKind {
    export const Rock = SpriteKind.create()
    export const Key = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (KeyCount > 0) {
        KeyCount += -1
        tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.doorOpenNorth)
    } else {
        sprite.sayText("Do I need a Key?", 2000, true)
        Key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 d d f . . . . . 
            . . f 5 5 4 4 4 4 5 d f . . . . 
            . . f 5 5 . . . . 5 4 f . . . . 
            . . . f 4 4 4 5 5 4 f . . . . . 
            . . . . f f 5 5 f f . . . . . . 
            . . . . . f 5 d f . . . . . . . 
            . . . . . f 5 d f f . . . . . . 
            . . . . . f 5 5 d d f . . . . . 
            . . . . . f 5 5 4 f . . . . . . 
            . . . . . f 5 5 5 d f . . . . . 
            . . . . . f 5 4 f f . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Key)
        tiles.placeOnTile(Key, tiles.getTileLocation(1, 1))
    }
})
function PickUpKey () {
    KeyInv = Inventory.create_item("Key", img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 5 5 d d f . . . . . 
        . . f 5 5 4 4 4 4 5 d f . . . . 
        . . f 5 5 . . . . 5 4 f . . . . 
        . . . f 4 4 4 5 5 4 f . . . . . 
        . . . . f f 5 5 f f . . . . . . 
        . . . . . f 5 d f . . . . . . . 
        . . . . . f 5 d f f . . . . . . 
        . . . . . f 5 5 d d f . . . . . 
        . . . . . f 5 5 4 f . . . . . . 
        . . . . . f 5 5 5 d f . . . . . 
        . . . . . f 5 4 f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ToolbarSlot4 = KeyInv
    if (KeyCount < 1) {
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
    }
    KeyCount += 1
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(17, 0))
})
function toolbar_follow () {
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
    if (Character.y < 60) {
        toolbar.setPosition(Character.x, 105)
    }
    if (Character.y > 454 && Character.x > 432) {
        toolbar.setPosition(432, 497)
    }
    if (Character.x < 80 && Character.y > 454) {
        toolbar.setPosition(80, 497)
    }
    if (Character.x < 80 && Character.y < 60) {
        toolbar.setPosition(80, 105)
    }
    if (Character.x > 432 && Character.y < 60) {
        toolbar.setPosition(432, 105)
    }
}
function player_creation () {
    Character = sprites.create(assets.image`Character`, SpriteKind.Player)
    scene.cameraFollowSprite(Character)
    tiles.placeOnTile(Character, tiles.getTileLocation(0, 15))
    Character.sayText("How did I end up here?", 5000, false)
    scene.followPath(Character, scene.aStar(tiles.getTileLocation(0, 15), tiles.getTileLocation(1, 15)), 10)
    pause(2500)
    controller.moveSprite(Character, 100, 100)
    Torch = Inventory.create_item("Torch", assets.image`Torch`)
    toolbarSlot_1 = Torch
    Gold_Coin = Inventory.create_item("Gold Coin", assets.image`myImage`)
    ToolbarSlot2 = Gold_Coin
    toolbar = Inventory.create_toolbar([toolbarSlot_1, ToolbarSlot2], 5)
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
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(1, 1))
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(31, 9))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    PickUpKey()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(26, 18))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rock, function (sprite, otherSprite) {
    rockCount += 1
    otherSprite.destroy()
    if (rockCount == 1) {
        sprite.sayText("I wonder if these rocks could come in handy later.", 5000, true)
        RockInv = Inventory.create_item("Rock", assets.image`Rocks`)
        ToolbarSlot3 = RockInv
    }
    if (rockCount >= 1) {
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
    }
})
function Make_Variables () {
    RoomNumber = 1
    rockCount = 0
    KeyCount = 0
}
function ToolbarItemCount () {
    _null = Inventory.create_item("null", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ToolbarSlot3 = _null
    ToolbarSlot4 = _null
    ToolbarSlot5 = _null
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (KeyCount > 0) {
        sprite.sayText("I'll use my key.", 1000, true)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(31, 9), sprites.dungeon.doorOpenEast)
        KeyCount += -1
    } else {
        sprite.sayText("Do I need a Key?", 2000, true)
        Key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 d d f . . . . . 
            . . f 5 5 4 4 4 4 5 d f . . . . 
            . . f 5 5 . . . . 5 4 f . . . . 
            . . . f 4 4 4 5 5 4 f . . . . . 
            . . . . f f 5 5 f f . . . . . . 
            . . . . . f 5 d f . . . . . . . 
            . . . . . f 5 d f f . . . . . . 
            . . . . . f 5 5 d d f . . . . . 
            . . . . . f 5 5 4 f . . . . . . 
            . . . . . f 5 5 5 d f . . . . . 
            . . . . . f 5 4 f f . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Key)
        tiles.placeOnTile(Key, tiles.getTileLocation(26, 18))
    }
})
let _null: Inventory.Item = null
let RoomNumber = 0
let RockInv: Inventory.Item = null
let rockCount = 0
let Gold_Coin: Inventory.Item = null
let Torch: Inventory.Item = null
let Character: Sprite = null
let ToolbarSlot5: Inventory.Item = null
let ToolbarSlot3: Inventory.Item = null
let ToolbarSlot2: Inventory.Item = null
let toolbarSlot_1: Inventory.Item = null
let toolbar: Inventory.Toolbar = null
let ToolbarSlot4: Inventory.Item = null
let KeyInv: Inventory.Item = null
let Key: Sprite = null
let KeyCount = 0
tiles.setTilemap(tilemap`level4`)
makeRocks()
Make_Variables()
player_creation()
ToolbarItemCount()
game.onUpdate(function () {
    toolbar_follow()
})
