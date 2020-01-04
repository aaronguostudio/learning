import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
import Event from '../utils/event'

class GameView {
  constructor () {
    this.restartButtonClicked = new Event(this)
  }

  showGameOverPage () {
    // this.gamePage.hide()
    this.gameOverPage.show()
  }

  showGamePage () {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }

  initGameOverPage (callbacks) {
    this.gameOverPage = new GameOverPage(callbacks)
    this.gameOverPage.init({
      camera: this.gamePage.scene.camera.instance,
      scene: this.gamePage.scene.instance
    })
  }

  initGamePage (callbacks) {
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
  }
}

export default new GameView()