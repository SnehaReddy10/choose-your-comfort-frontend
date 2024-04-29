export function convertToImg(buffer: any) {
  const mimeType = buffer.contentType;
  const uint8Array = new Uint8Array(buffer.data.data);
  let binaryString = '';
  uint8Array.forEach((byte) => {
    binaryString += String.fromCharCode(byte);
  });
  const base64String = btoa(binaryString);
  const imageUrl = `data:${mimeType};base64,${base64String}`;
  return imageUrl;
}
