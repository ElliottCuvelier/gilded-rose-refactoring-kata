import { Item } from "../../item/item.entity";

export abstract class ItemUpdaterBase {
  abstract update(item: Item): void;
}
