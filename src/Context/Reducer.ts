import { actionTypesEnum } from "./ActionTypes";
import { ProductContextType, ContextActionType } from "../type";
import { Item } from "../Logic/Item";
import { GildedRose } from "../Logic/gilded-rose-default";

function Reducer(
  state: ProductContextType,
  action: ContextActionType
): ProductContextType {
  switch (action.type) {
    case actionTypesEnum.UPDATE:
      const updatedProducts = state.products.map((product) => {
        if (product.id === (action.payload as Item).id) {
          return action.payload;
        }
        return product;
      });
      return {
        products: updatedProducts as typeof state.products,
      };
    case actionTypesEnum.DELETE:
      const filteredProducts = state.products.filter(
        (product) => product.id !== (action.payload as Item).id
      );
      return {
        products: filteredProducts,
      };
    case actionTypesEnum.CREATE:
      return {
        products: [...state.products, action.payload as Item],
      };
    case actionTypesEnum.PASS_DAY:
      return {
        products: GildedRose.updateQuality(state.products),
      };
    case actionTypesEnum.GET_PRODUCTS:
      return {
        products: action.payload as Item[],
      };
    default:
      return state;
  }
}

export default Reducer;
