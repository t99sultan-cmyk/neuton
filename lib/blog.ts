export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
};

// TODO: заменить заглушки на реальные статьи. Контент храните в content.ts
//       или вынесите в MDX / CMS, когда наберётся 5+ материалов.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kogda-nuzhen-logoped",
    title: "Когда ребёнку нужен логопед: 7 признаков, которые нельзя игнорировать",
    excerpt:
      "Не каждое «не выговаривает» — это повод бежать к специалисту. Но есть 7 сигналов, которые точно говорят: пора.",
    category: "Логопедия",
    readMinutes: 6,
    publishedAt: "2026-04-15",
  },
  {
    slug: "ava-terapiya-osnovy",
    title: "АВА-терапия простыми словами: что это и кому подходит",
    excerpt:
      "Развенчиваем мифы вокруг прикладного анализа поведения и объясняем, почему это золотой стандарт работы с РАС.",
    category: "АВА",
    readMinutes: 8,
    publishedAt: "2026-04-08",
  },
  {
    slug: "sensornaya-integratsiya-doma",
    title: "5 упражнений по сенсорной интеграции, которые можно делать дома",
    excerpt:
      "Между занятиями важно поддерживать прогресс. Простые игры, которые помогают мозгу обрабатывать сигналы тела.",
    category: "Сенсорная интеграция",
    readMinutes: 5,
    publishedAt: "2026-04-01",
  },
  {
    slug: "podgotovka-k-shkole",
    title: "Подготовка к школе для ребёнка с особенностями: чек-лист на 6 месяцев",
    excerpt:
      "Что нужно успеть, какие специалисты подключить, как договориться со школой и как поддержать ребёнка дома.",
    category: "Подготовка к школе",
    readMinutes: 9,
    publishedAt: "2026-03-22",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
