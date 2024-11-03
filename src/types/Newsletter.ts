export interface Subscriber {
  email: string;
  date: Date;
}

export interface Newsletter {
  id?: number;
  subscribers: Subscriber[];
}
