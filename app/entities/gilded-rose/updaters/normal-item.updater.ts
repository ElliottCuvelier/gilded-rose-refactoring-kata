import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class NormalItemUpdater extends ItemUpdaterBase {
  update(item: Item): void {
    item.sellIn = item.sellIn - 1;
    const degradation = item.sellIn < 0 ? 2 : 1;
    item.quality = Math.max(0, item.quality - degradation);
  }
}
