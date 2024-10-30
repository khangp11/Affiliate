import axios, { AxiosResponse } from "axios";
import { toJpeg } from "html-to-image";
import { updateSettings } from "../redux/settings.slice";

export const fetchData = (url: string): Promise<any> =>
  axios
    .get(url)
    .then((res: AxiosResponse) => res.data)
    .catch((error: Error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

export async function postData(url: string, data: any): Promise<any> {
  const response = await axios({
    method: "post",
    url,
    data,
  })
    .then((res: AxiosResponse) => res.data)
    .catch((error: Error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export async function updateData(url: string, data: any): Promise<any> {
  const response = await axios({
    method: "put",
    url,
    data,
  })
    .then((res: AxiosResponse) => res.data)
    .catch((error: Error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export async function deleteData(url: string, data: any): Promise<any> {
  const response = await axios({
    method: "delete",
    url,
    data,
  })
    .then((res: AxiosResponse) => res.data)
    .catch((error: Error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export function decimalBalance(num: number): number {
  return Math.round(num * 10) / 10;
}

export function getTotalPrice(cartData: { items: { qty: number; price: number }[] }): number {
  const price = cartData.items.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0
  );
  return Math.round(price * 10) / 10;
}

export function discountPrice(cartData: { items: { qty: number; price: number }[]; coupon: { discount: number } }): number {
  const price = cartData.items.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0
  );
  const discountPrice =
    Math.round((price - (cartData.coupon.discount / 100) * price) * 10) / 10;
  return discountPrice;
}

export async function printDocument(reference: HTMLElement, name: string): Promise<void> {
  const { jsPDF } = await import("jspdf");
  await toJpeg(reference, { quality: 1.0, pixelRatio: 1.8 })
    .then(function (dataUrl: string) {
      const pdf = new jsPDF("p", "pt", "a4", true);
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight, "FAST");
      pdf.save(`${name}.pdf`);
    })
    .catch((err: Error) => {
      console.log(err);
    });
}

export function shimmer(w: number, h: number): string {
  return `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.1s" repeatCount="indefinite"  />
</svg>`;
}

export function toBase64(str: string): string {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function currencyConvert(payAmount: number, exchangeRate: number): number {
  const amount = Number(payAmount);
  const exchange = Number(exchangeRate);
  let convertedAmount = 0;
  convertedAmount = amount * exchange;
  return Number(convertedAmount.toFixed(2));
}

export function setSettingsData(store: any, data: any): void {
  const storeData = store.getState();
  const st = !storeData.settings.settingsData._id && data && data.settings;
  if (st) {
    store.dispatch(updateSettings(data.settings));
  }
}

export function appUrl(req: any): { protocol: string; host: string; origin: string } {
  let _a;
  let host =
    (((_a = req) === null || _a === void 0 ? void 0 : _a.headers)
      ? req.headers.host
      : window.location.host) || process.env.NEXT_PUBLIC_URL;
  let protocol =
    process.env.NEXT_PUBLIC_APP_SSL !== "yes" ? "http://" : "https://";
  if (typeof window !== "undefined") {
    protocol = window.location.protocol + "//";
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + host,
  };
}

export function dateFormat(d: string | Date): string {
  return new Date(d).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function filterPermission(session: any, menu: any[]): any[] {
  const _menu: any[] = [];
  for (const i of menu) {
    if (i.target === "yes") {
      _menu.push(i);
    } else if (i.target !== "no") {
      const p = session.user.s.permissions.find((x: any) => x.name === i.target);
      if (p.edit) {
        _menu.push(i);
      } else if (p.view && !p.edit) {
        i.subMenu = i.subMenu.filter((x: any) => !x.create);
        _menu.push(i);
      }
    }
  }
  return _menu;
}

export function cpf(session: any, target: string): { view: boolean; edit: boolean; delete: boolean } {
  const _default = { view: false, edit: false, delete: false };
  if (session && session.user.s.status) {
    const permissions = session.user.s.permissions.find(
      (x: any) => x.name === target
    );
    return permissions || _default;
  } else if (session && session.user.a) {
    return { view: true, edit: true, delete: true };
  } else {
    return _default;
  }
}

export function compareData(_data: any[], key: string): any[] | undefined {
  let dataTarget = "";
  let sortType = "asc";
  switch (key) {
    case "da":
      dataTarget = "date";
      sortType = "asc";
      break;

    case "db":
      dataTarget = "date";
      sortType = "desc";
      break;

    case "pa":
      dataTarget = "price";
      sortType = "asc";
      break;

    case "pb":
      dataTarget = "price";
      sortType = "desc";
      break;

    case "na":
      dataTarget = "name";
      sortType = "asc";
      break;

    case "nb":
      dataTarget = "name";
      sortType = "desc";
      break;

    default:
      dataTarget = "";
      sortType = "asc";
      break;
  }
  if (dataTarget.length > 0) {
    return _data.sort(_compareItem);
  }
  function _compareItem(x: any, y: any): number {
    const a =
      dataTarget === "date"
        ? new Date(x[dataTarget]).getTime()
        : x[dataTarget];
    const b =
      dataTarget === "date"
        ? new Date(y[dataTarget]).getTime()
        : y[dataTarget];
    if (a < b) {
      return sortType === "asc" ? -1 : 1;
    }
    if (a > b) {
      return sortType === "asc" ? 1 : -1;
    }
    return 0;
  }
}

export function stockInfo(product: { type: string; quantity: number; variants: { qty: number }[] }): boolean {
  if (product.type === "simple") {
    return product.quantity === -1 || product.quantity > 0;
  }
  const qty = product.variants.reduce((a: number, b: { qty: number }) => {
    let x = a === -1 ? 100000 : a > -1 ? a : 0;
    let y = b.qty === -1 ? 100000 : b.qty > -1 ? b.qty : 0;
    return x + y;
  }, 0);

  return qty > 0;
}


export function hexToRgb(hex: string): string {
  const shorthandReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandReg, (m: string, r: string, g: string, b: string) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
      result[3],
      16
    )}`
    : "#ffffff";
}

export function formField(target: any): { [key: string]: string } {
  const fields: { [key: string]: string } = {};
  for (const x in target) {
    if (Object.hasOwnProperty.call(target, x)) {
      const el = target[x];
      if (el.type !== "file" && el.name.length > 0) {
        fields[el.name] = el.value.trim();
      }
    }
  }
  return fields;
}
