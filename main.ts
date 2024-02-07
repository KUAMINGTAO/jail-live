scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += -10
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += -10
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += 10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += -10
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += -10
    }
})
let YOUR_FOOD: Sprite = null
let YOU_FOOD: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f d d f f c c . 
    f f f f f d d f f c c f . 
    f f f b f d d f b f f f . 
    . f d 1 f d d f 1 d f . . 
    . f d d d d d d d d f . . 
    . f f f f f f f f f f . . 
    f 4 f 4 4 b 4 4 4 f 4 f . 
    f 4 f 4 4 b 4 b 4 f 4 f . 
    f d f 4 4 b 4 4 4 f d f . 
    f f f f f f f f f f f f . 
    . . f 4 4 f f 4 4 f . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e e f . 
    f e e e d e e e e e e f 
    f e e d d d e e e e e f 
    f e e d d d d e e e e f 
    f d e d d d d d d e d f 
    f d d f f d d f f d d f 
    f e d d d d d d d d e f 
    . f e d d f f d d e f . 
    . f f d d d d d d f f . 
    f 4 f 4 4 b 4 4 4 f 4 f 
    f 4 f 4 4 b 4 b 4 f 4 f 
    f d f 4 4 b 4 4 4 f d f 
    f f f f f f f f f f f f 
    . . f 4 4 f f 4 4 f . . 
    `, SpriteKind.Player))
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`myTile6`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`myTile6`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`myTile6`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`myTile6`)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
let DOOR = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f c c c c c f c c c c c c c c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c c c c c c f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(DOOR, assets.tile`myTile1`)
let DOOR_1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f c c c c c f c c c c c c c c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c f f f f c f 
    f c c c c c f c c c c c c c c f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(DOOR_1, assets.tile`myTile2`)
let ACTIVITY = 0
let DAY = 0
forever(function () {
    pause(5000)
    pause(5000)
    pause(5000)
    pause(5000)
    ACTIVITY += 1
    if (ACTIVITY == 1) {
        game.splash("ACTIVITY", "EXERCISE [PRESS A ]")
        DOOR.sayText("1234", 500, false)
        animation.runImageAnimation(
        DOOR,
        [img`
            f f f f f f f f f f f f f f f f 
            f c c c c f c c c c c c c c c f 
            f c c c c f c c c c f f f f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f 1 b f c f 
            f c c c c f c c c c f c c f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f 1 b f c f 
            f c c c c f c c c c f c c f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f f f f c f 
            f c c c c f c c c c c c c c c f 
            f f f f f f f f f f f f f f f f 
            `],
        1000,
        true
        )
    }
    if (ACTIVITY == 2) {
        game.splash("ACTIVITY", "FOOD TIME [PRESS B]")
        YOU_FOOD = sprites.create(img`
            . f f f f f f f f f f f f f f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 f 5 4 4 4 1 1 1 1 1 1 f 1 f 
            f 1 f 4 4 5 4 1 1 1 1 1 1 f 1 f 
            f 1 f 4 4 4 4 1 1 1 1 1 1 f 1 f 
            f 1 f 4 5 4 1 1 1 1 1 1 1 f 1 f 
            f 1 f 4 4 1 1 d d d d 1 1 f 1 f 
            f 1 f 1 1 1 d d d d d 1 1 f 1 f 
            f 1 f 1 1 1 d d d d d d d f 1 f 
            f 1 f 1 1 1 d d d d d d d f 1 f 
            f 1 f 1 1 1 1 d d d d d d f 1 f 
            f 1 f 1 1 1 1 1 d d d d d f 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(YOU_FOOD, assets.tile`myTile8`)
        tiles.placeOnRandomTile(YOU_FOOD, assets.tile`myTile8`)
        YOUR_FOOD = sprites.create(img`
            . f f f f f f f f f f f f f f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 f 5 4 4 4 1 1 1 1 1 1 f 1 f 
            f 1 f 4 4 5 4 1 1 1 1 1 1 f 1 f 
            f 1 f 4 4 4 4 1 1 1 1 1 1 f 1 f 
            f 1 f 4 5 4 1 1 1 1 1 1 1 f 1 f 
            f 1 f 4 4 1 1 d d d d 1 1 f 1 f 
            f 1 f 1 1 1 d d d d d 1 1 f 1 f 
            f 1 f 1 1 1 d d d d d d d f 1 f 
            f 1 f 1 1 1 d d d d d d d f 1 f 
            f 1 f 1 1 1 1 d d d d d d f 1 f 
            f 1 f 1 1 1 1 1 d d d d d f 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(YOUR_FOOD, assets.tile`myTile8`)
        tiles.placeOnRandomTile(YOUR_FOOD, assets.tile`myTile8`)
        DOOR.sayText("COME ON ,FASTER", 500, false)
        animation.runImageAnimation(
        DOOR_1,
        [img`
            f f f f f f f f f f f f f f f f 
            f c c c c f c c c c c c c c c f 
            f c c c c f c c c c f f f f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f 1 b f c f 
            f c c c c f c c c c f c c f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f 1 b f c f 
            f c c c c f c c c c f c c f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f d d f c f 
            f c c c c f c c c c f f f f c f 
            f c c c c f c c c c c c c c c f 
            f f f f f f f f f f f f f f f f 
            `],
        1000,
        true
        )
    }
    if (ACTIVITY == 3) {
        ACTIVITY = 4
    }
    if (ACTIVITY == 4) {
        game.splash("ACTIVITY", "BYE YOUR FAMILY")
        DOOR.sayText("BYE LOVER YOU", 1000, false)
        animation.runImageAnimation(
        DOOR,
        [img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 f d d d d f f 7 f 
            f 7 7 7 7 f 7 f d f f d f f 7 f 
            f 7 7 7 7 f 7 f d 1 b f f f 7 f 
            f 7 7 7 7 f 7 f d d f f f f 7 f 
            f 7 7 7 7 f 7 f d f f d f f 7 f 
            f 7 7 7 7 f 7 f d 1 b f f f 7 f 
            f 7 7 7 7 f 7 f d d d f f f 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 f b b b b b f 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f 
            f b b b b f b b b b b b b b b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `],
        1000,
        false
        )
        DOOR_1.sayText("ME TOO", 1000, false)
        animation.runImageAnimation(
        DOOR_1,
        [img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 f d d d d f f 7 f 
            f 7 7 7 7 f 7 f d f f d f f 7 f 
            f 7 7 7 7 f 7 f d 1 b f f f 7 f 
            f 7 7 7 7 f 7 f d d f f f f 7 f 
            f 7 7 7 7 f 7 f d f f d f f 7 f 
            f 7 7 7 7 f 7 f d 1 b f f f 7 f 
            f 7 7 7 7 f 7 f d d d f f f 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 f b b b b b f 7 f 
            f 7 7 7 7 f 7 f f f f f f f 7 f 
            f 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            f f f f f f f f f f f f f f f f 
            f b b b b f b b b b b b b b b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b f f f b f 
            f b b b b f b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `],
        1000,
        false
        )
    }
    if (ACTIVITY == 5) {
        game.splash("ACTIVITY", "SLEEPING TIME")
        DAY += 1
        game.splash("DAYS", DAY)
        ACTIVITY = 0
    }
})
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f d d f f c c . 
            f f f f f d d f f c c f . 
            f f f b f d d f b f f f . 
            . f d 1 f d d f 1 d f . . 
            . f d d d d d d d d f . . 
            . f f f d d d d f f f . . 
            f 4 f 4 4 b 4 4 4 f 4 f . 
            f 4 f 4 4 b 4 b 4 f 4 f . 
            f d f 4 4 b 4 4 4 f d f . 
            f f f f f f f f f f f f . 
            . . f 4 4 f f 4 4 f . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f f f f f f f . . 
            . . f f f f f f c f f f . 
            f f f f f f f c c f f f c 
            f f f f c f f f f f f f c 
            . c c c f f f d d f f c c 
            . f f f f f d d f f c c f 
            . f f f b f d d f b f f f 
            . f f d 1 f d d f 1 d f f 
            . . f d d d d d d f f f f 
            . f 4 f 4 4 b 4 f 4 4 4 f 
            . f 4 f 4 4 b 4 f 4 4 f . 
            . f d f f f f f f f f . . 
            . . f f 4 4 4 4 4 f . . . 
            . . . f 4 4 f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f c f f f f f f . . 
            c f f f c c f f f f f f f 
            c f f f f f f f c f f f f 
            c c f f d d f f f c c c . 
            f c c f f d d f f f f f . 
            f f f b f d d f b f f f . 
            f f d 1 f d d f 1 d f f . 
            f f f f d d d d d d f . . 
            f 4 4 4 f 4 b 4 4 f 4 f . 
            . f 4 4 f 4 b 4 4 f 4 f . 
            . . f f f f f f f f d f . 
            . . . f 4 4 4 4 4 f f . . 
            . . . . f f f 4 4 f . . . 
            `,img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f d d f f c c . 
            f f f f f d d f f c c f . 
            f f f b f d d f b f f f . 
            . f d 1 f d d f 1 d f . . 
            . f d d d d d d d d f . . 
            . f f f d d d d f f f . . 
            f 4 f 4 4 b 4 4 4 f 4 f . 
            f 4 f 4 4 b 4 b 4 f 4 f . 
            f d f 4 4 b 4 4 4 f d f . 
            f f f f f f f f f f f f . 
            . . f 4 4 f f 4 4 f . . . 
            `],
        100,
        false
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e e f . 
            f e e e d e e e e e e f 
            f e e d d d e e e e e f 
            f e e d d d d e e e e f 
            f d e d d d d d d e d f 
            f d d f f d d f f d d f 
            f e d d d d d d d d e f 
            . f e d d b b d d e f . 
            . f f e d d d d e f f . 
            f 4 f 4 4 b 4 4 4 f 4 f 
            f 4 f 4 4 b 4 b 4 f 4 f 
            f d f 4 4 b 4 4 4 f d f 
            f f f f f f f f f f f f 
            . . f 4 4 f f 4 4 f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f f . 
            f e e e e e e e e e e f 
            f e e e d e e e e e e f 
            f e e d d d e e e e e f 
            f e e d d d d e e e e f 
            f d e d d d d d d e d f 
            f d d f f d d f f d d f 
            f e d d d d d d d d e f 
            . f e d d b b d f f f e 
            f f f e d d d f d d f e 
            f 4 f 4 b 4 4 f d d f . 
            f 4 f b b b b f f f . . 
            f d f 4 4 4 4 4 4 . . . 
            f f f 4 4 . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f e e e e e f f f . 
            f e e e e e e e e e e f 
            f e e e e e e d e e e f 
            f e e e e e d d d e e f 
            f e e e e d d d d e e f 
            f d e d d d d d d e d f 
            f d d f f d d f f d d f 
            f e d d d d d d d d e f 
            e f f f d b b d d e f . 
            e f d d f d d d e f f f 
            . f d d f 4 4 b 4 f 4 f 
            . . f f f b b b b f 4 f 
            . . . 4 4 4 4 4 4 f d f 
            . . . . . . . 4 4 f f f 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e e f . 
            f e e e d e e e e e e f 
            f e e d d d e e e e e f 
            f e e d d d d e e e e f 
            f d e d d d d d d e d f 
            f d d f f d d f f d d f 
            f e d d d d d d d d e f 
            . f e d d b b d d e f . 
            . f f e d d d d e f f . 
            f 4 f 4 4 b 4 4 4 f 4 f 
            f 4 f 4 4 b 4 b 4 f 4 f 
            f d f 4 4 b 4 4 4 f d f 
            f f f f f f f f f f f f 
            . . f 4 4 f f 4 4 f . . 
            `],
        100,
        false
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.B)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f d d f f c c . 
            f f f f f d d f f c c f . 
            f f f b f d d f b f f f . 
            . f d 1 f d d f 1 d f . . 
            . f d d d d d d d d f . . 
            . f f f d d d d f f f . . 
            b 4 b 4 4 b 4 4 4 b b b . 
            b b b 4 4 b 4 b 4 b b b . 
            f b f 4 4 b 4 4 4 f b f . 
            f b f f f f f f f f b f . 
            . . f 4 4 f f 4 4 f . . . 
            `,img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f d d f f c c . 
            f f f f f d d f f c c f . 
            f f f b f d d f b f f f . 
            . f d 1 f d d f 1 d f . . 
            . f d d d d d d d d f . . 
            . f f f d d d d f f f . . 
            f 4 f 4 4 b 4 4 4 f 4 f . 
            f 4 f 4 4 b 4 b 4 f 4 f . 
            f d f 4 4 b 4 4 4 f d f . 
            f f f f f f f f f f f f . 
            . . f 4 4 f f 4 4 f . . . 
            `],
        100,
        false
        )
        animation.runImageAnimation(
        YOU_FOOD,
        [img`
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
            `],
        500,
        false
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.B)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e e f . 
            f e e e d e e e e e e f 
            f e e d d d e e e e e f 
            f e e d d d d e e e e f 
            f d e d d d d d d e d f 
            f d d f f d d f f d d f 
            f e d d d d d d d d e f 
            . f e d d b b d d e f . 
            . f f e d d d d e f f . 
            b 4 b 4 4 b 4 4 4 b b b 
            b b b 4 4 b 4 b 4 b b b 
            f b f 4 4 b 4 4 4 f b f 
            f f f f f f f f f f f f 
            . . f 4 4 f f 4 4 f . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e e f . 
            f e e e d e e e e e e f 
            f e e d d d e e e e e f 
            f e e d d d d e e e e f 
            f d e d d d d d d e d f 
            f d d f f d d f f d d f 
            f e d d d d d d d d e f 
            . f e d d b b d d e f . 
            . f f e d d d d e f f . 
            f 4 f 4 4 b 4 4 4 f 4 f 
            f 4 f 4 4 b 4 b 4 f 4 f 
            f d f 4 4 b 4 4 4 f d f 
            f f f f f f f f f f f f 
            . . f 4 4 f f 4 4 f . . 
            `],
        100,
        false
        )
        animation.runImageAnimation(
        YOUR_FOOD,
        [img`
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
            `],
        500,
        false
        )
    }
})
forever(function () {
    if (DOOR.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += -10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Down)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += -10
        }
    }
    if (DOOR_1.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += -10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Down)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y += -10
        }
    }
    if (DOOR.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -10
        }
    }
    if (DOOR_1.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -10
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -10
        }
    }
})
