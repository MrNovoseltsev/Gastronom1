import type { NewsPost } from "../model/types";
import newsData from "@/data/news.json";

// Источник данных — статический мок-файл (приложение работает без БД).
const news = newsData as NewsPost[];

export async function getLatestNews(count: number): Promise<NewsPost[]> {
  return news.slice(0, count);
}

export async function getAllNews(): Promise<NewsPost[]> {
  return news;
}
