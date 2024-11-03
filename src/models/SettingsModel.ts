import db from '@/lib/dbConnect';
import { Settings } from '@/types/Setting';

class SettingsModel {
  static async create(settingsData: Partial<Settings>): Promise<Settings> {
    const [newSettings] = await db<Settings>('settings').insert(settingsData).returning('*');
    return newSettings;
  }

  static async findById(id: number): Promise<Settings | undefined> {
    return db<Settings>('settings').where({ id }).first();
  }

  static async update(id: number, data: Partial<Settings>): Promise<Settings | undefined> {
    const [updatedSettings] = await db<Settings>('settings').where({ id }).update(data).returning('*');
    return updatedSettings;
  }

  static async delete(id: number): Promise<void> {
    await db<Settings>('settings').where({ id }).del();
  }

  static async findAll(): Promise<Settings[]> {
    return db<Settings>('settings').select('*');
  }
}

export default SettingsModel;
