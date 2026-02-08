import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class ConjuredItemUpdater extends ItemUpdaterBase {
  update(item: Item): void {
    item.sellIn = item.sellIn - 1;
    const degradation = item.sellIn < 0 ? 4 : 2; // degradation is twice as fast when sellIn is negative
    item.quality = Math.max(0, item.quality - degradation);
  }
}
