import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { feedStoreOrigin, PUBLIC_STORE_ORIGIN, rewriteProductLinks } from "./ctx-feed.ts";

const wpOrigin = "https://be.lumeero.us";

const item = `<item>
<link><![CDATA[${wpOrigin}/product/dyson-airblade-v-hand-dryer/]]></link>
<g:image_link><![CDATA[${wpOrigin}/wp-content/uploads/2026/11/1.jpg]]></g:image_link>
<g:canonical_link><![CDATA[${wpOrigin}/product/dyson-airblade-v-hand-dryer/]]></g:canonical_link>
</item>`;

describe("CTX feed links", () => {
  it("uses lumeero.us when the public URL is the WordPress host", () => {
    assert.equal(feedStoreOrigin(wpOrigin, wpOrigin), PUBLIC_STORE_ORIGIN);
    assert.equal(feedStoreOrigin(wpOrigin, "https://lumeero.us"), PUBLIC_STORE_ORIGIN);
    assert.equal(feedStoreOrigin(wpOrigin, "https://www.lumeero.us"), PUBLIC_STORE_ORIGIN);
  });

  it("keeps a non-production storefront origin", () => {
    assert.equal(
      feedStoreOrigin(wpOrigin, "http://localhost:3000"),
      "http://localhost:3000",
    );
  });

  it("rewrites product and home links and leaves images on WordPress", () => {
    const xml = `<channel><link><![CDATA[ ${wpOrigin} ]]></link>${item}</channel>`;
    const out = rewriteProductLinks(xml, wpOrigin, PUBLIC_STORE_ORIGIN);
    assert.match(out, /<link>https:\/\/lumeero\.us\/<\/link>/);
    assert.match(
      out,
      /<link>https:\/\/lumeero\.us\/products\/dyson-airblade-v-hand-dryer<\/link>/,
    );
    assert.match(
      out,
      /<g:canonical_link>https:\/\/lumeero\.us\/products\/dyson-airblade-v-hand-dryer<\/g:canonical_link>/,
    );
    assert.match(out, /be\.lumeero\.us\/wp-content\/uploads/);
    assert.equal(out.includes("/product/"), false);
  });
});
