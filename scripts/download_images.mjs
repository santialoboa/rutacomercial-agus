import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const TARGET_DIR = path.resolve('public/images');
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Search topics for our specific cards and characters
const TOPICS = [
  {
    key: 'cover',
    search: 'Caravane Marco Polo',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Caravane_Marco_Polo.jpg'
  },
  {
    key: 'market',
    search: 'Tacuinum Sanitatis silk market OR spice merchant',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Tacuinum_Sanitatis_-_Market_scene.jpg'
  },
  {
    key: 'paper',
    search: 'Papiermacher 1568 Amman OR medieval papermaking',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Papiermacher_1568.png'
  },
  {
    key: 'math',
    search: 'Typus Arithmeticae Margarita Philosophica',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Typus_Arithmeticae.jpg'
  },
  {
    key: 'medicine',
    search: 'Al-Wasiti Library 1237 OR Maqamat Hariri library',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Al-Wasiti_-_The_Library_of_Hulwan_-_Google_Art_Project.jpg'
  },
  {
    key: 'port',
    search: 'Marco Polo leaving Venice Livre des Merveilles',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Marco_Polo_leaving_Venice.jpg'
  },
  {
    key: 'plague',
    search: 'Citizens of Tournai bury the dead Black Death',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Burying_Plague_Victims_of_Tournai.jpg'
  },
  {
    key: 'char_merchant',
    search: 'Tacuinum Sanitatis silk merchant OR cloth merchant medieval',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tacuinum_Sanitatis%2C_Seda.jpg'
  },
  {
    key: 'char_traveler',
    search: 'Chaucer Canterbury Tales pilgrim Ellesmere manuscript',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/The_Knight_in_the_Ellesmere_Chaucer.jpg'
  },
  {
    key: 'char_medic',
    search: 'Tacuinum Sanitatis apothecary OR medieval doctor examination',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Tacuinum_sanitatis_%2814th_c.%29_-_Apothecary.jpg'
  },
  {
    key: 'char_scholar',
    search: 'Jean Mielot writing in study OR medieval scribe at desk',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Jean_Mi%C3%A9lot.jpg'
  },
  {
    key: 'silk_road_map',
    search: 'Silk route map OR Silk road trade routes medieval',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Silk_route.jpg'
  }
];

async function searchCommons(query) {
  const enc = encodeURIComponent(query);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${enc}&srnamespace=6&format=json`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const data = await res.json();
    const hits = data?.query?.search;
    if (hits && hits.length > 0) {
      return hits[0].title;
    }
  } catch (err) {
    console.error('Search error:', err.message);
  }
  return null;
}

async function getImageUrlByTitle(title) {
  const enc = encodeURIComponent(title);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${enc}&prop=imageinfo&iiprop=url&format=json`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const data = await res.json();
    const pages = data?.query?.pages;
    if (pages) {
      for (const p of Object.values(pages)) {
        if (p.imageinfo && p.imageinfo[0]?.url) {
          // clean URL from query params
          return p.imageinfo[0].url.split('?')[0];
        }
      }
    }
  } catch (err) {
    console.error('Get URL error:', err.message);
  }
  return null;
}

function downloadWithCurl(url, dest) {
  console.log(`Downloading: ${url} -> ${dest}`);
  const cmd = `curl.exe -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -L -s -o "${dest}" "${url}"`;
  execSync(cmd, { stdio: 'inherit' });
  const stat = fs.statSync(dest);
  console.log(`Saved ${dest} (${stat.size} bytes)`);
}

async function main() {
  for (const item of TOPICS) {
    let downloadUrl = null;
    console.log(`\nProcessing ${item.key}...`);
    
    // 1. Try search
    const foundTitle = await searchCommons(item.search);
    if (foundTitle) {
      console.log(`Found title for ${item.key}: ${foundTitle}`);
      downloadUrl = await getImageUrlByTitle(foundTitle);
    }
    
    // 2. Fallback
    if (!downloadUrl) {
      console.log(`Using fallback for ${item.key}: ${item.fallback}`);
      downloadUrl = item.fallback;
    }

    if (downloadUrl) {
      const ext = path.extname(downloadUrl) || '.jpg';
      const dest = path.join(TARGET_DIR, `${item.key}${ext}`);
      try {
        downloadWithCurl(downloadUrl, dest);
      } catch (err) {
        console.error(`Curl error for ${item.key}:`, err.message);
        if (item.fallback && item.fallback !== downloadUrl) {
          try {
            console.log(`Retrying with fallback: ${item.fallback}`);
            downloadWithCurl(item.fallback, dest);
          } catch (e2) {
            console.error(`Fallback failed too:`, e2.message);
          }
        }
      }
    }
  }
  console.log('\nAll downloads complete!');
}

main();
