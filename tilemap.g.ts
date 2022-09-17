// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000303030000000000000000000000000003010101010101010000000000000000030100000000000000000000000000000301000000000000000000000000000003010000000000000000000000000000030100000000000000000000000000000302000000000000000000000000000003010000000000000000000000000000030100020000000000000000000000000301000000000000000000000000000003010101010101010101010000000000030303030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 . . . . . . . 2 . . . 
. . . . 2 . 2 2 2 2 2 2 2 . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . 2 . 2 2 2 2 2 2 2 2 2 2 
. . . . 2 . . . . . . . . . . 2 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.swamp.swampTile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
