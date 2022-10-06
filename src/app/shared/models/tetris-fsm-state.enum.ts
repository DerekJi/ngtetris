export enum TetrisFsmState {
  /**
   * Machine is powered off
   */
  PoweredOff = 'POWERED-OFF',

  /**
   * Machine is powered on. Will transit to READY automatically after a few secs
   */
  PoweredOn = 'POWERED-ON',

  /**
   * Game is ready to tart.
   */
  Ready = 'READY',

  /**
   * Game started
   */
  GameStarted = 'STARTED',

  /**
   * Game Paused
   */
  Paused = 'PAUSED',

  /**
   * Game Over.  Will transit to READY automatically after a few secs
   */
  GameOver = 'GAME-OVER',
}