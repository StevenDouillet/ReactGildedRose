import { GildedRose } from "./gilded-rose-default";
import { Item, itemEnum } from "./Item";

describe("Gilded Rose default tests", function() {

  const mocks = [
    new Item(0, "AGED_BRIE", 0, 0, "img-empty", itemEnum.AGED_BRIE),
    new Item(1, "BACKSTAGE_PASS", 0, 0, "img-empty", itemEnum.BACKSTAGE_PASS),
    new Item(2, "NORMAL", 0, 0, "img-empty", itemEnum.NORMAL),
    new Item(3, "SULFURAS", 0, 0, "img-empty", itemEnum.SULFURAS)
  ];

  it("Should ....", function() {
    const items = GildedRose.updateQuality(mocks);
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
});

