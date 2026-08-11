// Build-time image fetch. Downloads royalty-free photos (Pexels + Unsplash) into
// public/images so they are served from the site's own domain (no runtime hotlinking).
// Runs before `astro build`. Fail-soft with one retry so a transient miss does not break deploy.
//
// Every image below was visually reviewed to be a REAL photograph, relevant to flat/low-slope
// roofing (or Dallas/DFW for area pages), and free of overlaid or foreign (non-English) text.
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const OUT = "public/images";

// Pexels CDN url helper (landscape, w=1400).
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

// filename -> source URL
const IMAGES = {
  // hero + social
  "hero.jpg": "https://images.unsplash.com/photo-1713544123580-12096cc9eb12?w=1400&q=80&auto=format&fit=crop",
  "og.jpg": px(5391969),

  // flat-roof service photos
  "flat-roof-repair.jpg": px(8065903),
  "flat-roof-replacement.jpg": "https://images.unsplash.com/photo-1758304481667-71d545c91241?w=1400&q=80&auto=format&fit=crop",
  "flat-roof-leak-repair.jpg": px(8624465),
  "flat-roof-inspection.jpg": px(16647524),
  "tpo-roofing.jpg": px(7078449),
  "epdm-roofing.jpg": px(9408969),
  "pvc-roofing.jpg": px(343696),
  "modified-bitumen.jpg": px(35425754),
  "built-up-roofing.jpg": px(20158055),
  "roof-coatings.jpg": px(35691079),
  "commercial-flat-roofing.jpg": px(30210086),

  // work / gallery photos
  "work-membrane.jpg": "https://images.unsplash.com/photo-1758304481667-71d545c91241?w=1400&q=80&auto=format&fit=crop",
  "work-seam.jpg": px(9408969),
  "work-drain.jpg": px(20113440),
  "work-parapet.jpg": px(18969859),
  "work-coating.jpg": px(35691079),
  "work-crew.jpg": px(16647524),

  // Dallas / DFW area photos (real cityscapes / buildings)
  "dallas-skyline.jpg": px(31338555),
  "area-downtown-dallas.jpg": px(23930017),
  "area-oak-cliff.jpg": px(32849341),
  "area-uptown-dallas.jpg": px(10282818),
  "area-lakewood.jpg": px(13965989),
  "area-plano.jpg": px(35627327),
  "area-richardson.jpg": px(32575068),
  "area-garland.jpg": px(34106700),
  "area-irving.jpg": px(16370914),
};

async function fetchOne(name, src) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 4000) throw new Error(`too small (${buf.length}B)`);
      await writeFile(join(OUT, name), buf);
      console.log(`  ok  ${name} (${(buf.length / 1024).toFixed(0)}KB)`);
      return true;
    } catch (err) {
      console.warn(`  retry ${name}: ${err.message}`);
    }
  }
  console.error(`  FAIL ${name} (left missing)`);
  return false;
}

await mkdir(OUT, { recursive: true });
console.log(`Fetching ${Object.keys(IMAGES).length} images into ${OUT} ...`);
let ok = 0;
for (const [name, src] of Object.entries(IMAGES)) {
  try {
    await access(join(OUT, name));
    console.log(`  skip ${name} (exists)`);
    ok++;
    continue;
  } catch {}
  if (await fetchOne(name, src)) ok++;
}
console.log(`Done: ${ok}/${Object.keys(IMAGES).length} images ready.`);
