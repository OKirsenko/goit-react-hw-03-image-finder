import './ImageGalleyItem.css';
export default function ImageGalleryItem({
  largeImageURL,
  webformatURL,
  tags,
}) {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} className="item-image" />
    </li>
  );
}
