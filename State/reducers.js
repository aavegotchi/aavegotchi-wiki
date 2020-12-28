export const reducer = (state, action) => {


  console.log('type:', action.type)


  switch (action.type) {

    case "updateSideMenuOpen":
      return {
        ...state,
        sideMenuOpen: action.sideMenuOpen
      }

    default:
      return state;
  }
};
