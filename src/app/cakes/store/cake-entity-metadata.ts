import {EntityMetadataMap} from "@ngrx/data";
import {Cakes} from "./cakes";

export const CakeEntityMetadata: EntityMetadataMap = {
  Cake: {
    selectId: (cake: Cakes) => cake.id
  }
}
