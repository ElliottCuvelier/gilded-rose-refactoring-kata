import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class BackstagePassUpdater extends ItemUpdaterBase {
  getQualityModifier(item: Item): number {
    if (item.sellIn < 0) {
      return item.quality * -1;
    }
    if (item.sellIn <= 5) {
      return 3;
    }
    if (item.sellIn <= 10) {
      return 2;
    }
    return 1;
  }
}
