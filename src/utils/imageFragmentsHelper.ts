type SizeAndOffset = {
  width: number
  height: number
  offsetX: number
  offsetY: number
}

enum ImageFitType {
  COVER = 'cover',
  CONTAIN = 'contain'
}

/**
 * 获取真实图片大小及偏移量
 * @param container
 * @param image
 * @param type
 */
export function getRealImageSizeAndOffset(
  container: HTMLElement,
  image: HTMLImageElement,
  type = ImageFitType.COVER
) : SizeAndOffset {
  const cWidth = container.offsetWidth
  const cHeight = container.offsetHeight
  const iWidth = image.width
  const iHeight = image.height
  const rW = cWidth / iWidth
  const rH = cHeight / iHeight

  const ratio = type === ImageFitType.COVER ? Math.max(rW, rH) : Math.min(rW, rH)
  const realWidth = iWidth * ratio
  const realHeight = iHeight * ratio

  return {
    width: realWidth,
    height: realHeight,
    offsetX: (realWidth - cWidth) / 2,
    offsetY: (realHeight - cHeight) / 2
  }
}
