// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Armor Room Finished":
            case "level2":return tiles.createTilemap(hex`100010000205050505050505050505050505051203060808080808030f100808080813100407070707070803081008020505051203080808030808030810080308080810030803080308070308100804070708100308030808080803081008080808081003080407070707030810050505120810030808080808080308100808080c081003080b0707070703081008100808081003080c08080808030810081105050510030808080308080308100808080808100407070803080d0e08110d0802050810030808080308080808080808030808100308020505050d0d080d0d020e080d1003090308080808080808080308081410040a040a0a0a0a0a010a0a0a0a0a0a15`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 2 2 2 2 2 . 2 . 2 . 2 2 2 2 2 
2 . . . 2 . . 2 . 2 . 2 . . . 2 
2 . 2 . 2 . 2 2 . 2 . 2 2 2 . 2 
2 . 2 . . . . 2 . 2 . . . . . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . . . . . . 2 . 2 . . . 2 . 2 
2 . 2 2 2 2 2 2 . 2 . 2 . . . 2 
2 . 2 . . . . 2 . 2 . 2 2 2 2 2 
2 . . . 2 . . 2 . 2 . . . . . 2 
2 2 2 . 2 . 2 2 . 2 2 . 2 2 . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 2 
2 . 2 . . . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.chestOpen,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.buttonTealDepressed,myTiles.tile3,sprites.dungeon.purpleOuterSouthWest], TileScale.Sixteen);
            case "Armor Room":
            case "level1":return tiles.createTilemap(hex`100010000104040404040404040404040404041402050707070707020e120707070715120306060606060702071207010404041402070707020707020f120702070707120207020702070602101207030606071202070207070707020f120707070707120207030606060602101204040414071202070707070707020f120707070b071202070a0606060602101207120707071202070b07070707020f12071304040412020707070207070210120707070707120306060702070c0d07130c0701040712020707070207070707070707020707120207010404040c0c070c0c010d070c120208020707070707070707020707161203090309090909091109090909090917`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 2 2 2 2 2 . 2 . 2 . 2 2 2 2 2 
2 . . . 2 . . 2 . 2 . 2 . . . 2 
2 . 2 . 2 . 2 2 . 2 . 2 2 2 . 2 
2 . 2 . . . . 2 . 2 . . . . . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . . . . . . 2 . 2 . . . 2 . 2 
2 . 2 2 2 2 2 2 . 2 . 2 . . . 2 
2 . 2 . . . . 2 . 2 . 2 2 2 2 2 
2 . . . 2 . . 2 . 2 . . . . . 2 
2 2 2 . 2 . 2 2 . 2 2 . 2 2 . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 2 
2 . 2 . . . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.buttonOrange,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.buttonPink,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.chestClosed,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,myTiles.tile1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.buttonTeal,myTiles.tile2,sprites.dungeon.purpleOuterSouthWest], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Main Room1":
            case "Main Room1":return tiles.createTilemap(hex`200020000105050505050505050505050d0505050518050505050505050505050505050d0206070807070708070707070e0707070e070e12070708070e070708070e070e01050d0701050507110a0a0a1507110a15080e0a0a0a0a100e050d07050e080e02070e07130707060e070e0707060e0807070e070e07070b0e070e08070e070e02080e07130702070e100e07110a1507110a15120e0c0c080e070f05070e100e02070e071307020807070e070e070e0707070e070e070706070712060707080e02070f0505051407040a15060e070e060e070e0b0e07020701050d070a17070e020810070807060b070807070e070e070f0514070706021002080e100802070e01090d070109070105070e070e070e07060807070505130807070e070114080e020707071307080207080e0707070e0505050d0707071307110a1507020707190207010514070114071115070a0a150707070e050d0713100e070706040a0a150208020708070208070e0707070608070a0a15070e1207070e0702080707070e02070207010514070a15070a0a070708080707070e07110a1508040a0a17070e0207020702120707080708070e12010505050d070e070e07070707071202060e02080207040a0a0a1707110a1507020707060e0706070e08010505050514070e030702080707070602070e0707080b0802080e080e071507020707070708070e020602070505050514070e0705050d0702070e070e1007070207050d0702070e020807070707080707080e0707070e0802070e070f0505070208070e0702060e040a0a070e08110c0c070f050d070e07040a1508070707080417120e0802070e020707060e070e07070708070e070708070707080a0a170707040a150702070e0208110a15070f05050d070707060e070105050707070417071007071207060e02080e0707081207070e07050505050514070708020707020702070a070a0a0e02070f050505070e070e0710080607080707010505050702070206070708070e020707070607070f0505050507010505050514070607080712040a0a0a17070e040a0a0a0717080707100707120206070707070701050702070807070702080e020712070702070a0a0a0a0a0702070105050505020707040a0a0a170702070e020701050114070702080707080707020707080702120708070707020707080e020b0207020b071202070505050505140802070514070105050d07040a0a0a0e0207021207070e0702070708070707070702070807070207070708070707070e0207040a0a0a150701050505050505050514050505050505050505050505070e0207100712070707020708071207080708070b0712080710070707120707080e040c0c0c160c0c0c040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0a0a0a0c15`, img`
22222222222222222.22222222222222
2...........2...2.2.....2....2.2
222.222.22222.222.22222.222.22.2
2.2.2...2.2...2...2.2...2.2..2.2
2.2.2.2.2.2.222.222.222.2.22.2.2
2.2.2.2...2.2.2...2.2..........2
2.22222.222.2.2.2.2.2.2.222.22.2
2...........2.2.222...2.2.2..2.2
222.22.22.2.2.2.....222...2.22.2
2...2..2..2...22222...2.222.2...
2.222.22.22.222...222.2.2...2222
2.2...2..2......222.2...2.2....2
2.2.222.22.22.......2.222.2222.2
2.2.2.......2.22222.2.2......2.2
2.2.22222.222.2...2...2.222222.2
..2.....2.2.....2.2.2.2.2......2
2.2.22222.2.222.2.2.2...2.22.2.2
2.........2...2.2.2.222.2..2.2.2
222.2.222.222.2.222.....22.2.2.2
2...2.2.....2.......222..222.2.2
2.222.2222....2.222...22.......2
2.2......2.222222...2..2.2.2.222
2.2222.2.2........2222.2.2.....2
2......22222.222222......22222.2
2222.2.......2......22.2.....2.2
2....2.22222.2.222222..22222.2.2
2.2222..2......2....2......2...2
2.2.2...2.222222.2.22.2222.22222
2.2...2.2........2....2........2
2.22222.2222222222222222222222.2
2.......2......................2
2222.222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.floorDark5,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.doorLockedSouth,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Green Button Down":
            case "tile3":return tile3;
            case "Green Button Up":
            case "tile2":return tile2;
            case "Armor Room Exit Door":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.