export async function getStorageData(key: string): Promise<any[]> {
  try {
    let result: any[] = [];
    if (key) {
      const encKey: string | undefined = process.env.NEXT_PUBLIC_CRYPTO_PASS;
      const localData: string | null = localStorage.getItem(key);
      if (localData && localData.length > 0 && encKey) {
        const CryptoJS = await import("crypto-js");
        const decrData = CryptoJS.AES.decrypt(localData, encKey);
        const decrDataStr: string = decrData.toString(CryptoJS.enc.Utf8);
        result = JSON.parse(decrDataStr);
      }
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function setStorageData(key: string, value: any): Promise<void> {
  try {
    const encKey: string | undefined = process.env.NEXT_PUBLIC_CRYPTO_PASS;
    if (!encKey) {
      throw new Error("Encryption key is not defined");
    }
    const data: string = JSON.stringify(value);
    const AES = await import("crypto-js/aes");
    const encData = AES.encrypt(data, encKey);
    const encDataStr: string = encData.toString();
    localStorage.setItem(key, encDataStr);
  } catch (error) {
    console.log(error);
  }
}

export function removeStorageData(key: string): void {
  localStorage.removeItem(key);
}
