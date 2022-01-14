namespace SpriteKind {
    export const Rock = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const OffGhost = SpriteKind.create()
    export const FireballSpawnHere = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(80, 80)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonPinkDepressed)
    tiles.setTileAt(tiles.getTileLocation(8, 6), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 10), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (KeyCount > 0) {
        sprite.sayText("I'll use this key to unlock the door", 1000, true)
        KeyCount += -1
        tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.doorOpenNorth)
    } else {
        sprite.setFlag(SpriteFlag.GhostThroughTiles, true)
        sprite.sayText("Do I need a Key?", 2000, true)
        Key3 = sprites.create(img`
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
        tiles.placeOnTile(Key3, tiles.getTileLocation(1, 1))
    }
})
function openChest () {
    if (chests_opened == 2) {
        game.splash("Sword Received!")
        Sword = Inventory.create_item("Sword", assets.image`Sword`)
        Character.setImage(assets.image`Character1`)
        toolbarSlot_1 = Sword
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
        chests_opened += 1
    }
    if (chests_opened == 1) {
        game.splash("Shield Received!")
        Shield = Inventory.create_item("Shield", assets.image`Shield`)
        Character.setImage(assets.image`Character0`)
        ToolbarSlot2 = Shield
        Has_Shied = true
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
        chests_opened += 1
    }
    if (chests_opened == 0) {
        game.splash("Backpack Received!")
        Backback = Inventory.create_item("Backpack", img`
            . . . . . . . f f f . . . . . . 
            . . . . . . f e e e f . . . . . 
            . . . . f f b d f e f f f f . . 
            . . . f 4 4 f f e f f e e e f . 
            . . f 4 4 4 e e f b e d e f e f 
            . . f 4 4 4 4 e e e f b f f e f 
            . . f e e 4 4 4 e e b f f e f . 
            . f b e e e 4 4 4 4 f e f e f . 
            . f e e d e e 4 4 f e e f e f . 
            . f b f d f e 4 f 4 e e e f . . 
            . f f d f e f f e 4 4 e e f . . 
            . f c f e e e e e 4 4 b b f . . 
            . . f c e e e e 4 4 b e f . . . 
            . . . f c e b b b b e f . . . . 
            . . . . f c c c c c f . . . . . 
            . . . . . f f f f f . . . . . . 
            `)
        ToolbarSlot5 = Backback
        toolbarSlot_1 = _null
        InventoySlot1 = Gold_Coin
        ToolbarSlot2 = _null
        InventroySlot2 = Torch
        ToolbarSlot3 = _null
        if (rockCount > 0) {
            InventroySlot3 = RockInv
        }
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
        chests_opened += 1
    }
}
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
function doorGhostOff () {
    GhostOff = sprites.create(img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a b c c c c c c a 
        `, SpriteKind.OffGhost)
    GhostOff1 = sprites.create(img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a b c c c c c c a 
        `, SpriteKind.OffGhost)
    GhostOff2 = sprites.create(img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a b c c c c c c a 
        `, SpriteKind.OffGhost)
    GhostOff3 = sprites.create(img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a b c c c c c c a 
        `, SpriteKind.OffGhost)
    tiles.placeOnTile(GhostOff, tiles.getTileLocation(15, 4))
    tiles.placeOnTile(GhostOff1, tiles.getTileLocation(30, 6))
    tiles.placeOnTile(GhostOff2, tiles.getTileLocation(1, 29))
    tiles.placeOnTile(GhostOff3, tiles.getTileLocation(7, 29))
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(17, 0))
})
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
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(Character, 3, 0)
    statusbar.setColor(7, 2)
    statusbar.setBarBorder(1, 15)
    statusbar.setLabel("HP")
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (IventoryOpen == 1) {
        inventory.set_number(InventoryNumberAttribute.SelectedIndex, inventory.get_number(InventoryNumberAttribute.SelectedIndex) + 1)
        InventorySlot += 1
        if (inventory.get_number(InventoryNumberAttribute.SelectedIndex) == 32) {
            inventory.set_number(InventoryNumberAttribute.SelectedIndex, 0)
        }
        if (InventorySlot == 33) {
            InventorySlot = 1
        }
    } else {
        toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) + 1)
        ToolbarSlot += 1
        if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 5) {
            toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
        }
        if (ToolbarSlot == 6) {
            ToolbarSlot = 1
        }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (BottomRoomCompleate == true) {
        tiles.setTilemap(tilemap`level18`)
    } else {
        tiles.setTilemap(tilemap`level19`)
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(2, 1))
    tiles.destroySpritesOfKind(SpriteKind.Key)
    tiles.destroySpritesOfKind(SpriteKind.Rock)
    tiles.destroySpritesOfKind(SpriteKind.OffGhost)
    RoomNumber = 4
    Is_opened_Bottom = true
    if (KeyCount < 1) {
        ToolbarSlot4 = _null
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
    }
    for (let index = 0; index < 15; index++) {
        Ghost = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Ghost, sprites.dungeon.floorLight2)
    }
})
function LavaNoWalk () {
    Character.sayText("Ow! Hot!", 1000, false)
    Character.y = Character.y + 1
    statusbar.value += -1 / Damage_reduction
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ToolbarSlot == 5) {
        if (ToolbarSlot5 == Backback) {
            if (IventoryOpen == 1) {
                IventoryOpen = 0
            } else {
                IventoryOpen += 1
            }
            if (IventoryOpen == 1) {
                IventroyOpen()
                controller.moveSprite(Character, 0, 0)
                IsInventoryOpen = true
            } else {
                inventory.destroy()
                controller.moveSprite(Character, 100, 100)
                IsInventoryOpen = false
            }
        }
    }
    if (ToolbarSlot == 2) {
        if (ToolbarSlot2 == Shield) {
            controller.moveSprite(Character, 50, 50)
            Damage_reduction = 2
            if (toolbarSlot_1 == Sword) {
                Character.setImage(assets.image`CharacterWithShied0`)
            } else {
                Character.setImage(assets.image`CharacterWithShied`)
            }
        }
    }
    if (ToolbarSlot == 1) {
        if (toolbarSlot_1 == Sword) {
            Damage_reduction = 2
            Attacing = true
            animation.runImageAnimation(
            Character,
            assets.animation`myAnim`,
            50,
            false
            )
            pause(500)
            Attacing = false
            Character.setImage(assets.image`Character1`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    LavaNoWalk()
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(1, 1))
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(31, 9))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    statusbar.value += -0.5 / Damage_reduction
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.destroySpritesOfKind(SpriteKind.OffGhost)
    if (RightRoomCompleate == true) {
        tiles.setTilemap(tilemap`RightRoomCompleate`)
    } else {
        tiles.setTilemap(tilemap`RightRoomCompleate3`)
        game.splash("Avoid The Spikes!")
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(1, 7))
    tiles.destroySpritesOfKind(SpriteKind.Key)
    tiles.destroySpritesOfKind(SpriteKind.Rock)
    RoomNumber = 3
    Is_Opened_Left = true
    SpikesUpDown = 0
    if (KeyCount < 1) {
        ToolbarSlot4 = _null
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`MainRoom`)
    doorGhostOff()
    ExitSideRooms()
    makeRocks()
    tiles.placeOnTile(sprite, tiles.getTileLocation(4, 30))
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OffGhost, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughTiles, false)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 0, function (status) {
    Respawn()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    PickUpKey()
})
function Respawn () {
    if (RoomNumber == 2) {
        tiles.placeOnTile(Character, tiles.getTileLocation(8, 14))
    }
    if (RoomNumber == 3) {
        tiles.placeOnTile(Character, tiles.getTileLocation(1, 7))
    }
    if (RoomNumber == 4) {
        tiles.placeOnTile(Character, tiles.getTileLocation(2, 1))
    }
    statusbar.value = 100
    Character.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(500)
    Character.setFlag(SpriteFlag.GhostThroughSprites, false)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    TopRoomCompleate = true
    openChest()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(Character, tiles.getTileLocation(26, 18))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    if (KeyCount > 0) {
        sprite.sayText("I'll use this key to unlock the door", 1000, true)
        KeyCount += -1
        tiles.setTileAt(tiles.getTileLocation(4, 31), assets.tile`myTile`)
    } else {
        sprite.setFlag(SpriteFlag.GhostThroughTiles, true)
        sprite.sayText("Do I need a Key?", 2000, false)
        Key_4 = sprites.create(img`
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
        tiles.placeOnTile(Key_4, tiles.getTileLocation(30, 30))
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (Math.percentChance(50)) {
        sprite.vy = randint(40, 100)
    } else {
        sprite.vy = randint(-40, -100)
    }
    if (Math.percentChance(50)) {
        sprite.vx = randint(40, 100)
    } else {
        sprite.vx = randint(-40, -100)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    tiles.setTilemap(tilemap`MainRoom`)
    doorGhostOff()
    ExitSideRooms()
    makeRocks()
    tiles.placeOnTile(sprite, tiles.getTileLocation(17, 1))
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (Devhack == 0) {
        Devhack = 1
        controller.moveSprite(Character, 200, 200)
        Character.setFlag(SpriteFlag.GhostThroughWalls, true)
    } else {
        Devhack = 0
        controller.moveSprite(Character, 100, 100)
        Character.setFlag(SpriteFlag.GhostThroughWalls, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rock, function (sprite, otherSprite) {
    rockCount += 1
    otherSprite.destroy()
    if (rockCount == 1) {
        sprite.sayText("I wonder if these rocks could come in handy later.", 5000, true)
        RockInv = Inventory.create_item("Rock", assets.image`Rocks`)
        ToolbarSlot3 = RockInv
        if (TopRoomCompleate == true) {
            InventroySlot3 = RockInv
        } else {
            toolbar.set_items([
            toolbarSlot_1,
            ToolbarSlot2,
            ToolbarSlot3,
            ToolbarSlot4,
            ToolbarSlot5
            ])
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    LavaNoWalk()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile9`)
    BottomRoomCompleate = true
    openChest()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`tile13`)
    tiles.setTileAt(tiles.getTileLocation(8, 5), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 9), sprites.dungeon.floorLight2)
})
function ExitSideRooms () {
    if (Is_opened_Top == true) {
        tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.doorOpenNorth)
    }
    if (Is_opened_Bottom == true) {
        tiles.setTileAt(tiles.getTileLocation(4, 31), assets.tile`myTile`)
    }
    if (Is_Opened_Left == true) {
        tiles.setTileAt(tiles.getTileLocation(31, 9), sprites.dungeon.doorOpenEast)
    }
    RoomNumber = 1
}
function Make_Variables () {
    chests_opened = 0
    RoomNumber = 1
    rockCount = 0
    KeyCount = 0
    TopRoomCompleate = false
    RightRoomCompleate = false
    BottomRoomCompleate = false
    Devhack = 1
    ToolbarSlot = 1
    IventoryOpen = 0
    IsInventoryOpen = true
    Is_opened_Top = false
    Is_Opened_Left = false
    Is_opened_Bottom = false
}
function IventroyOpen () {
    inventory = Inventory.create_inventory([
    InventoySlot1,
    InventroySlot2,
    InventroySlot3,
    InventroySlot4,
    InventroySlot5,
    InventroySlot7,
    InventroySlot8,
    InventroySlot9,
    InventroySlot10,
    InventroySlot11,
    InventroySlot12,
    InventroySlot13,
    InventroySlot14,
    InventroySlot15,
    InventroySlot16,
    InventroySlot17,
    InventroySlot18,
    InventroySlot18,
    InventroySlot19,
    InventroySlot20,
    InventroySlot21,
    InventroySlot22,
    InventroySlot23,
    InventroySlot24,
    InventroySlot25,
    InventroySlot26,
    InventroySlot27,
    InventroySlot28,
    InventroySlot29,
    InventroySlot30,
    InventroySlot31,
    InventroySlot32
    ], 36)
    if (Character.x > 80) {
        inventory.setPosition(Character.x, Character.y + -11)
    }
    if (Character.x < 80) {
        inventory.setPosition(80, Character.y + -11)
    }
    if (Character.x > Tile_map_Width - 80) {
        inventory.setPosition(Tile_map_Width - 80, Character.y + -11)
    }
    if (Character.y > Tile_map_Width - 58) {
        inventory.setPosition(Character.x, Tile_map_Width - 71)
    }
    if (Character.y < 60) {
        inventory.setPosition(Character.x, 49)
    }
    if (Character.y > Tile_map_Width - 58 && Character.x > Tile_map_Width - 80) {
        inventory.setPosition(Tile_map_Width - 80, Tile_map_Width - 71)
    }
    if (Character.x < 80 && Character.y > Tile_map_Width - 58) {
        inventory.setPosition(80, Tile_map_Width - 71)
    }
    if (Character.x < 80 && Character.y < 60) {
        inventory.setPosition(80, 49)
    }
    if (Character.x > Tile_map_Width - 80 && Character.y < 60) {
        inventory.setPosition(Tile_map_Width - 80, 49)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile6`)
    RightRoomCompleate = true
    openChest()
})
function ToolbarItemCount () {
    _null = Inventory.create_item("", img`
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
    __null = Inventory.create_item("", img`
        f f f f f f f f f f f f f f f f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f f f f f f f f f f f f f f f f 
        `)
    Damage_reduction = 1
    ToolbarSlot3 = _null
    ToolbarSlot4 = _null
    ToolbarSlot5 = _null
    InventoySlot1 = __null
    InventroySlot2 = __null
    InventroySlot3 = __null
    InventroySlot4 = __null
    InventroySlot5 = __null
    InventroySlot6 = __null
    InventroySlot7 = __null
    InventroySlot8 = __null
    InventroySlot9 = __null
    InventroySlot10 = __null
    InventroySlot11 = __null
    InventroySlot12 = __null
    InventroySlot13 = __null
    InventroySlot14 = __null
    InventroySlot15 = __null
    InventroySlot16 = __null
    InventroySlot17 = __null
    InventroySlot18 = __null
    InventroySlot19 = __null
    InventroySlot20 = __null
    InventroySlot21 = __null
    InventroySlot22 = __null
    InventroySlot23 = __null
    InventroySlot24 = __null
    InventroySlot25 = __null
    InventroySlot26 = __null
    InventroySlot27 = __null
    InventroySlot28 = __null
    InventroySlot29 = __null
    InventroySlot30 = __null
    InventroySlot31 = __null
    InventroySlot32 = __null
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedEast, function (sprite, location) {
    if (KeyCount > 0) {
        KeyCount += -1
        tiles.setTileAt(tiles.getTileLocation(31, 9), sprites.dungeon.doorOpenEast)
    } else {
        sprite.setFlag(SpriteFlag.GhostThroughTiles, true)
        sprite.sayText("Do I need a Key?", 2000, true)
        Key3 = sprites.create(img`
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
        tiles.placeOnTile(Key3, tiles.getTileLocation(26, 18))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonOrangeDepressed)
    tiles.setTileAt(tiles.getTileLocation(8, 4), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 8), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    tiles.setTilemap(tilemap`MainRoom`)
    doorGhostOff()
    ExitSideRooms()
    makeRocks()
    tiles.placeOnTile(sprite, tiles.getTileLocation(30, 9))
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    if (ToolbarSlot == 2) {
        if (ToolbarSlot2 == Shield) {
            controller.moveSprite(Character, 100, 100)
            Damage_reduction = 1
            if (toolbarSlot_1 == Sword) {
                Character.setImage(assets.image`Character1`)
            } else {
                Character.setImage(assets.image`Character0`)
            }
        }
    }
})
function toolbar_follow () {
    if (Character.x > 80) {
        toolbar.setPosition(Character.x, Character.y + 45)
    }
    if (Character.x < 80) {
        toolbar.setPosition(80, Character.y + 45)
    }
    if (Character.x > Tile_map_Width - 80) {
        toolbar.setPosition(Tile_map_Width - 80, Character.y + 45)
    }
    if (Character.y > Tile_map_Width - 58) {
        toolbar.setPosition(Character.x, Tile_map_Width - 15)
    }
    if (Character.y < 60) {
        toolbar.setPosition(Character.x, 105)
    }
    if (Character.y > Tile_map_Width - 58 && Character.x > Tile_map_Width - 80) {
        toolbar.setPosition(Tile_map_Width - 80, Tile_map_Width - 15)
    }
    if (Character.x < 80 && Character.y > Tile_map_Width - 58) {
        toolbar.setPosition(80, Tile_map_Width - 15)
    }
    if (Character.x < 80 && Character.y < 60) {
        toolbar.setPosition(80, 105)
    }
    if (Character.x > Tile_map_Width - 80 && Character.y < 60) {
        toolbar.setPosition(Tile_map_Width - 80, 105)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (TopRoomCompleate == true) {
        tiles.setTilemap(tilemap`level2`)
    } else {
        tiles.setTilemap(tilemap`level1`)
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(8, 14))
    tiles.destroySpritesOfKind(SpriteKind.Key)
    tiles.destroySpritesOfKind(SpriteKind.Rock)
    tiles.destroySpritesOfKind(SpriteKind.OffGhost)
    RoomNumber = 2
    Is_opened_Top = true
    if (KeyCount < 1) {
        ToolbarSlot4 = _null
        toolbar.set_items([
        toolbarSlot_1,
        ToolbarSlot2,
        ToolbarSlot3,
        ToolbarSlot4,
        ToolbarSlot5
        ])
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonTealDepressed)
    tiles.setTileAt(tiles.getTileLocation(8, 3), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 7), sprites.dungeon.floorLight2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Attacing == true) {
        otherSprite.destroy(effects.disintegrate, 500)
    } else {
        statusbar.value += -3 / Damage_reduction
    }
})
let InventroySlot6: Inventory.Item = null
let __null: Inventory.Item = null
let Tile_map_Width = 0
let InventroySlot32: Inventory.Item = null
let InventroySlot31: Inventory.Item = null
let InventroySlot30: Inventory.Item = null
let InventroySlot29: Inventory.Item = null
let InventroySlot28: Inventory.Item = null
let InventroySlot27: Inventory.Item = null
let InventroySlot26: Inventory.Item = null
let InventroySlot25: Inventory.Item = null
let InventroySlot24: Inventory.Item = null
let InventroySlot23: Inventory.Item = null
let InventroySlot22: Inventory.Item = null
let InventroySlot21: Inventory.Item = null
let InventroySlot20: Inventory.Item = null
let InventroySlot19: Inventory.Item = null
let InventroySlot18: Inventory.Item = null
let InventroySlot17: Inventory.Item = null
let InventroySlot16: Inventory.Item = null
let InventroySlot15: Inventory.Item = null
let InventroySlot14: Inventory.Item = null
let InventroySlot13: Inventory.Item = null
let InventroySlot12: Inventory.Item = null
let InventroySlot11: Inventory.Item = null
let InventroySlot10: Inventory.Item = null
let InventroySlot9: Inventory.Item = null
let InventroySlot8: Inventory.Item = null
let InventroySlot7: Inventory.Item = null
let InventroySlot5: Inventory.Item = null
let InventroySlot4: Inventory.Item = null
let Is_opened_Top = false
let Devhack = 0
let Key_4: Sprite = null
let TopRoomCompleate = false
let SpikesUpDown = 0
let Is_Opened_Left = false
let RightRoomCompleate = false
let Attacing = false
let IsInventoryOpen = false
let Damage_reduction = 0
let Ghost: Sprite = null
let Is_opened_Bottom = false
let RoomNumber = 0
let BottomRoomCompleate = false
let ToolbarSlot = 0
let InventorySlot = 0
let inventory: Inventory.Inventory = null
let IventoryOpen = 0
let statusbar: StatusBarSprite = null
let GhostOff3: Sprite = null
let GhostOff2: Sprite = null
let GhostOff1: Sprite = null
let GhostOff: Sprite = null
let KeyInv: Inventory.Item = null
let RockInv: Inventory.Item = null
let InventroySlot3: Inventory.Item = null
let rockCount = 0
let Torch: Inventory.Item = null
let InventroySlot2: Inventory.Item = null
let Gold_Coin: Inventory.Item = null
let InventoySlot1: Inventory.Item = null
let _null: Inventory.Item = null
let Backback: Inventory.Item = null
let Has_Shied = false
let Shield: Inventory.Item = null
let ToolbarSlot5: Inventory.Item = null
let ToolbarSlot4: Inventory.Item = null
let ToolbarSlot3: Inventory.Item = null
let ToolbarSlot2: Inventory.Item = null
let toolbar: Inventory.Toolbar = null
let toolbarSlot_1: Inventory.Item = null
let Character: Sprite = null
let Sword: Inventory.Item = null
let chests_opened = 0
let Key3: Sprite = null
let KeyCount = 0
tiles.setTilemap(tilemap`MainRoom`)
makeRocks()
Make_Variables()
doorGhostOff()
player_creation()
ToolbarItemCount()
game.onUpdate(function () {
    toolbar_follow()
    info.setScore(IventoryOpen)
    if (RoomNumber == 1) {
        Tile_map_Width = 512
    } else {
        Tile_map_Width = 256
    }
})
game.onUpdateInterval(1000, function () {
    if (RoomNumber == 3) {
        if (RightRoomCompleate == true) {
            if (SpikesUpDown == 0) {
                tiles.setTilemap(tilemap`RightRoomCompleate5`)
                SpikesUpDown = 1
            } else {
                tiles.setTilemap(tilemap`RightRoomCompleate`)
                SpikesUpDown = 0
            }
        } else {
            if (SpikesUpDown == 0) {
                tiles.setTilemap(tilemap`RightRoomCompleate2`)
                SpikesUpDown = 1
            } else {
                tiles.setTilemap(tilemap`RightRoomCompleate3`)
                SpikesUpDown = 0
            }
        }
    }
})
