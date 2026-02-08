import { GildedRose, Item } from "@/index";
import { execSync } from "child_process";

it("should match golden master for 30 days", () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  ];
  const gildedRose = new GildedRose(items);
  const snapshots: Array<
    Array<{ name: string; sellIn: number; quality: number }>
  > = [];

  for (let day = 0; day < 30; day++) {
    snapshots.push(
      items.map((i) => ({
        name: i.name,
        sellIn: i.sellIn,
        quality: i.quality,
      })),
    );
    gildedRose.updateQuality();
  }

  expect(snapshots).toMatchSnapshot();
});

it("should thirtyDays", () => {
  const consoleOutput = execSync("ts-node test/golden-master-text-test.ts 30", {
    encoding: "utf-8",
  });

  expect(consoleOutput).toMatchSnapshot();
});
