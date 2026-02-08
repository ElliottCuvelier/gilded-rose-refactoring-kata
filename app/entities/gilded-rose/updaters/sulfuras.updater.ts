import { Item } from "../../item/item.entity";
import { ItemUpdaterBase } from "./item.updater.base";

export class SulfurasUpdater extends ItemUpdaterBase {
  update(item: Item): void {
    // Sulfuras does not change
    return;
  }
}
