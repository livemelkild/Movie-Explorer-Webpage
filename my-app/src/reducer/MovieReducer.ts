interface DefaultStateI {

}

const defaultState: DefaultStateI =  {

};
// endre any type senere
const movieReducer = (state: DefaultStateI = defaultState , action: any): DefaultStateI => {
  return state;
}

export default movieReducer;
