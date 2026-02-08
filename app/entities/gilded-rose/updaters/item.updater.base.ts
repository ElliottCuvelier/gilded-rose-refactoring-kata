import { Item } from "../../item/item.entity";

export abstract class ItemUpdaterBase {
  update(item: Item): void {
    this.updateSellIn(item);
    this.updateQuality(item);
    this.validateQuality(item);
  }

  protected updateSellIn(item: Item): void {
    item.sellIn = item.sellIn - 1;
  }

  protected updateQuality(item: Item): void {
    const modifier = this.getQualityModifier(item);
    item.quality = item.quality + modifier;
  }

  protected validateQuality(item: Item): void {
    if (item.quality < 0) {
      item.quality = 0;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  protected abstract getQualityModifier(item: Item): number;
}
