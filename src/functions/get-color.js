export function extractColorsFromImage(imageSrc) {
    const image = new Image();
    image.crossOrigin = "Anonymous"; // تا از عکس‌های دیگر دامنه‌ها هم استفاده کنید
  
    return new Promise((resolve, reject) => {
      image.onload = function () {
        const vibrant = new Vibrant(image);
        const swatches = vibrant.swatches(); // استخراج پالت رنگی
  
        const colors = {
          Vibrant: swatches.Vibrant.getHex(),
          Muted: swatches.Muted.getHex(),
          DarkVibrant: swatches.DarkVibrant.getHex()
        };
  
        resolve(colors);
      };
  
      image.onerror = function () {
        reject("خطا در بارگذاری تصویر");
      };
  
      image.src = imageSrc;
    });
}
  