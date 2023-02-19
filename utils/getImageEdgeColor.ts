import { createCanvas, loadImage } from 'canvas'

export async function getImageEdgeColor(src: string) {
  const image = await loadImage(src, {
    crossOrigin: "anonymous"
  })
  
  const canvas = createCanvas(10, 10)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0, canvas.width, canvas.width)
  const pixelData = context.getImageData(0, 0, 1 ,1).data

  let imageEdgeColor = '#'

  for (let i = 0; i < pixelData.length; i += 4) {
    const red = pixelData[i];
    const green = pixelData[i + 1];
    const blue = pixelData[i + 2];
    const alpha = pixelData[i + 3];
  
    const hex = ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0');
  
    imageEdgeColor += hex;
  }
  
  return imageEdgeColor
}