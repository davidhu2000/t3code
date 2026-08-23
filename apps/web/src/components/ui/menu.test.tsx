import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import { Menu, MenuRadioGroup, MenuRadioItem } from "./menu";

describe("menu radio item geometry", () => {
  it("keeps SVG and image icons on the same text grid", () => {
    const html = renderToStaticMarkup(
      <Menu>
        <MenuRadioGroup value="merge">
          <MenuRadioItem value="merge">
            <span className="flex items-center gap-2">
              <svg aria-hidden className="size-3.5" />
              <img alt="" className="size-3.5" src="/project-icon.png" />
              <span>Merge</span>
            </span>
          </MenuRadioItem>
        </MenuRadioGroup>
      </Menu>,
    );

    expect(html).toContain("-mx-0.5");
    expect(html).toContain("img]:-mx-0.5");
  });
});
