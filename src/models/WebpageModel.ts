// src/models/WebpageModel.ts

import db from '@/lib/dbConnect';
import { Webpage } from '@/types/Webpages';

class WebpageModel {
  static async create(webpageData: Partial<Webpage>): Promise<Webpage> {
    const [newWebpage] = await db<Webpage>('webpages').insert(webpageData).returning('*');
    return newWebpage;
  }

  static async findById(id: number): Promise<Webpage | undefined> {
    return db<Webpage>('webpages').where({ id }).first();
  }

  static async update(id: number, data: Partial<Webpage>): Promise<Webpage | undefined> {
    const [updatedWebpage] = await db<Webpage>('webpages').where({ id }).update(data).returning('*');
    return updatedWebpage;
  }

  static async delete(id: number): Promise<void> {
    await db<Webpage>('webpages').where({ id }).del();
  }

  static async findAll(): Promise<Webpage[]> {
    return db<Webpage>('webpages').select('*');
  }
}

export default WebpageModel;
