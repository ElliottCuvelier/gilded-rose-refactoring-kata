import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class BackstagePassUpdater extends ItemUpdaterBase {
  update(item: Item): void {
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    let appreciation = 1;
    if (item.sellIn <= 10) {
      appreciation = 2;
    }
    if (item.sellIn <= 5) {
      appreciation = 3;
    }

    item.quality = Math.max(0, item.quality + appreciation);
    if (item.quality >= 50) {
      item.quality = 50;
    }
  }
}
