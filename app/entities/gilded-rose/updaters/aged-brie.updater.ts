import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class AgedBrieUpdater extends ItemUpdaterBase {
  getQualityModifier(item: Item): number {
    return item.sellIn < 0 ? 2 : 1;
  }
}
