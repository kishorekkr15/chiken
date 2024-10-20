// chiken means knowledge
// ===========================================================================================================

//to use the slice outside the component like interceptors
//need to import store and logout slice. "dispatch" can be used directly
store.dispatch(logoutSuccess())
//or
const { dispatch } = store;
dispatch(logoutSuccess())
// ===========================================================================================================
