import { gameActions } from '../action/actions';
import { generateNewBoardBlocks, processBlockAction, processMineBlockAction, processGameState } from '../util/board-utils';



const gameReducer = (state, action) => {
 
  switch (action.type) {
    
    case gameActions.CREATE_NEW_GAME:
     return {
          ...state,
          score: 0,
          isMineStruck: false,
          gameState: 'new',
          blocks: generateNewBoardBlocks()
      };
     
    case gameActions.PROCESS_CLICK:
      return {
          ...state,
          blocks: [ ...processBlockAction(action.payload.block, state.blocks)],
          gameState: processGameState(state.blocks) ? 'success' : 'failed'
        };
    
     case gameActions.PROCESS_MINE_CLICK:
       return {
          ...state,
          score: 0,
          isMineStruck: true,
          gameState: 'failed',
          blocks: [ ...processMineBlockAction(action.payload.block, state.blocks)]
        };
      
    default:
      return state;
  }
}

export default gameReducer;


