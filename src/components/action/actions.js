export const gameActions = {
  
  NEW_GAME: 'NEW_GAME',
  CREATE_NEW_GAME: 'CREATE_NEW_GAME',
  PROCESS_CLICK: 'PROCESS_CLICK',
  PROCESS_MINE_CLICK: 'PROCESS_MINE_CLICK',
  
  createNewGame: (level) => ({
    type: gameActions.CREATE_NEW_GAME,
    payload: { level: level }
  }),

  processClick: (block) => ({
    type: gameActions.PROCESS_CLICK,
    payload: {block}
  }),

  processMineClick: (block) => ({
    type: gameActions.PROCESS_MINE_CLICK,
    payload: {block}
  })
};
