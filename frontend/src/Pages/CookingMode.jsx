import Nav from "../components/Navigation/Navbar";
import Timer from "../components/Timer/Timer";
import RecipeStep from "../components/CookingModeUI/RecipeStep";
import { useParams } from "react-router-dom";

function CookingMode() {
	const { recipeId } = useParams();

	console.log("Cookingmode.jsx rendered with recipeId: ", recipeId);
	return (
		<>
			{recipeId ? (
				<>
					<RecipeStep recipeId={recipeId} />
				</>
			) : (
				<p>No recipeId provided</p>
			)}
		</>
	);
}

export default CookingMode;
