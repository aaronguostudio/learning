import gameView from './view'
import gameModel from './model'

class GameController {
  constructor () {
    this.gameView = gameView
    this.gameModel = gameModel
    this.gameModel.stageChanged.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
          break
        default:
      }
    })
  }

  initPages () {
    const gamePageCallbacks = {
      showGameOverPage: () => {
        this.gameModel.setStage('game-over')
      }
    }
    const gameOverPagesCallbacks = {
      gameRestart: () => {
        this.gameModel.setStage('game')
      }
    }
    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPagesCallbacks)
    this.gameModel.setStage('game')
  }
}

export default new GameController()