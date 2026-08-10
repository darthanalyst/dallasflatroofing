// Build-time image fetch. Downloads the royalty-free (Pexels) photos into
// public/images so they are served from the site's own domain (no runtime hotlinking).
// Runs before `astro build`. Fail-soft with one retry so a transient miss does not break deploy.
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const OUT = "public/images";

// filename -> Pexels photo id (served at w=1400 landscape). Every id HTTP-verified 200 + image/jpeg.
const PHOTOS = {
  // hero + social
  "hero.jpg": 38510748,
  "og.jpg": 38781395,
  // flat-roof service photos
  "flat-roof-repair.jpg": 38781380,
  "flat-roof-replacement.jpg": 38781401,
  "flat-roof-leak-repair.jpg": 8624464,
  "flat-roof-inspection.jpg": 16647524,
  "tpo-roofing.jpg": 2513975,
  "epdm-roofing.jpg": 38510750,
  "pvc-roofing.jpg": 343696,
  "modified-bitumen.jpg": 38510717,
  "built-up-roofing.jpg": 38781384,
  "roof-coatings.jpg": 38781390,
  "commercial-flat-roofing.jpg": 30210086,
  // work / gallery photos
  "work-membrane.jpg": 38781389,
  "work-seam.jpg": 38510718,
  "work-drain.jpg": 20113440,
  "work-parapet.jpg": 15433181,
  "work-coating.jpg": 38510737,
  "work-crew.jpg": 38749872,
  // Dallas / DFW area photos
  "dallas-skyline.jpg": 31338555,
  "area-downtown-dallas.jpg": 23930017,
  "area-oak-cliff.jpg": 32849341,
  "area-uptown-dallas.jpg": 10282818,
  "area-lakewood.jpg": 13965989,
  "area-plano.jpg": 35627327,
  "area-richardson.jpg": 32575068,
  "area-garland.jpg": 34106700,
  "area-irving.jpg": 16370914,
};

const url = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

async function fetchOne(name, id) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url(id));
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
console.log(`Fetching ${Object.keys(PHOTOS).length} images into ${OUT} ...`);
let ok = 0;
for (const [name, id] of Object.entries(PHOTOS)) {
  try {
    await access(join(OUT, name));
    console.log(`  skip ${name} (exists)`);
    ok++;
    continue;
  } catch {}
  if (await fetchOne(name, id)) ok++;
}
console.log(`Done: ${ok}/${Object.keys(PHOTOS).length} images ready.`);
