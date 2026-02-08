import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class AgedBrieUpdater extends ItemUpdaterBase {
  update(item: Item): void {
    item.sellIn = item.sellIn - 1;
    const appreciation = item.sellIn < 0 ? 2 : 1;
    if (item.quality >= 50) {
      return;
    }
    item.quality = Math.max(0, item.quality + appreciation);
  }
}
