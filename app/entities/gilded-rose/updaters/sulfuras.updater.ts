import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class SulfurasUpdater extends ItemUpdaterBase {
  protected updateSellIn(item: Item): void {
    // do nothing
  }

  getQualityModifier(item: Item): number {
    return 0;
  }

  protected validateQuality(item: Item): void {
    item.quality = 80;
  }
}
