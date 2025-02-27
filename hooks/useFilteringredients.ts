import { ingredients } from "@/prisma/constants";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

type IngredientItem = Pick<Ingredient, "id" | "name">;

interface ReturnProps {
  ingredients: IngredientItem[];
}

export const useFilteringredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<
    ReturnProps["ingredients"]
  >([]);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((ingredient) => ({
            id: ingredient.id,
            name: ingredient.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchIngredients();
  }, []);

  return { ingredients };
};
