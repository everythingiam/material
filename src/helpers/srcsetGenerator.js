import { parseSrcset, stringifySrcset } from 'srcset';

function generate(img_path) {
  const generatedSrcset = stringifySrcset([
    { url: img_path, width: 768 },
    { url: img_path, width: 1200 }
  ]);

  const picture = document.createElement('picture');
  const img = document.createElement('img');
  img.srcset = generatedSrcset;
  img.src = img_path;

  picture.appendChild(img);
  
  return picture;
}

export default {
  generate,
}