import { Item } from "../item/item.entity";
import {
  AgedBrieUpdater,
  BackstagePassUpdater,
  ItemUpdaterBase,
  NormalItemUpdater,
  SulfurasUpdater,
} from "./updaters";

export class GildedRose {
  items: Array<Item>;

  constructor(items: Item[] = []) {
    this.items = items;
  }

  updateQuality(): Item[] {
    return this.items.map((item) => {
      const updater = this.getUpdater(item);
      updater.update(item);
      return item;
    });
  }

  private getUpdater(item: Item): ItemUpdaterBase {
    if (item.name === "Aged Brie") {
      return new AgedBrieUpdater();
    }
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      return new SulfurasUpdater();
    }
    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      return new BackstagePassUpdater();
    }
    return new NormalItemUpdater();
  }
}
