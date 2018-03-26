export default function getImages(name, tag) {
  return fetch(`https://res.cloudinary.com/${name}/image/list/${tag}.json`)
    .then(res => res.json())
    .then(res =>
      res.resources.map(item => ({
        // image: item.public_id,
        // date: item.created_at,
        // format: item.format,
        src: `https://res.cloudinary.com/${name}/image/upload/${
          item.public_id
        }.${item.format}`,
        width: item.width,
        height: item.height,
        caption: item.created_at
      }))
    );
}
