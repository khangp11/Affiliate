import formidable, { Fields, Files } from "formidable";
import { IncomingMessage } from "http";

export function parseForm(req: IncomingMessage): Promise<{ field: Fields; file: Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      keepExtensions: true,
      uploadDir: "./public/uploads",
    });

    form.parse(req, (err: Error | null, fields: Fields, files: Files) => {
      if (err) return reject(err);
      const data = { field: fields, file: files };
      resolve(data);
    });
  });
}

export function parseFormMultiple(req: IncomingMessage): Promise<{ field: Fields; file: Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
      uploadDir: "./public/uploads",
    });

    form.parse(req, (err: Error | null, fields: Fields, files: Files) => {
      if (err) return reject(err);
      const data = { field: fields, file: files };
      resolve(data);
    });
  });
}
