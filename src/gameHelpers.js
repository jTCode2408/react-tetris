export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


export const createStage =() =>
Array.from(Array(STAGE_HEIGHT), () => 
new Array(STAGE_WIDTH).fill([0, 'clear'])

)

//create new array form array created with height. function for each row create another array for cells, to be filled with 0 as first value, and 'clear' which says to clear on next render