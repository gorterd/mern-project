import { connect } from "react-redux";
import ProfileShow from "./profile_show"
import { fetchPinnedRecipes, fetchOwnRecipes, clearRecipes } from "../../actions/recipe_actions";

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    allRecipes: Object.values(state.entities.recipes)
  };
};

const mDTP = dispatch => {
  return {
    clearRecipes: () => dispatch(clearRecipes()),
    fetchPinnedRecipes: (userId) => dispatch(fetchPinnedRecipes(userId)),
    fetchOwnRecipes: (userId) => dispatch(fetchOwnRecipes(userId)),
  };
}

export default connect(mSTP, mDTP)(ProfileShow);
