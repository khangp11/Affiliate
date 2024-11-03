// src/models/NewsletterModel.ts

import db from '@/lib/dbConnect';
import { Newsletter } from '@/types/Newsletter';

class NewsletterModel {
  static async create(newsletterData: Partial<Newsletter>): Promise<Newsletter> {
    const [newNewsletter] = await db<Newsletter>('newsletters').insert(newsletterData).returning('*');
    return newNewsletter;
  }

  static async findById(id: number): Promise<Newsletter | undefined> {
    return db<Newsletter>('newsletters').where({ id }).first();
  }

  static async update(id: number, data: Partial<Newsletter>): Promise<Newsletter | undefined> {
    const [updatedNewsletter] = await db<Newsletter>('newsletters').where({ id }).update(data).returning('*');
    return updatedNewsletter;
  }

  static async delete(id: number): Promise<void> {
    await db<Newsletter>('newsletters').where({ id }).del();
  }

  static async findAll(): Promise<Newsletter[]> {
    return db<Newsletter>('newsletters').select('*');
  }
}

export default NewsletterModel;
