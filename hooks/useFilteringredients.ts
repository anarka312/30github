import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import {useSet} from 'react-use'

interface ReturnProps {
  ingredients: Ingredient[]
  loading: boolean
  selectedIds: Set<string>
  onAddId: (id: String) => void
}

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIds, {toggle}] = useSet(new Set<string> (['Hello']))

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  const setSelectedIngredients = (ids: string[]) => {
    ids.forEach((id) => {
      if(selectedIds.has(id)) {
        selectedIds.delete(id)
      }else{
        selectedIds.add(id)
      }
    })

  }

  return {
    ingredients,
    loading,
    onAddId: toggle, 
    selectedIngredients: selectedIds,
    setSelectedIngredients,
  };
};