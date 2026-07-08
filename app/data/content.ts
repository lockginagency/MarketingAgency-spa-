export const agencyName = "Lockgin";

export const audit = {
  title: "АУДИТ",
  description: "Показываем, почему твоя реклама не окупается.",
  pain: "Разбираем твою рекламу и находим, что не работает.",
  duration: "от 3 до 5 дней",
  price: "1 500 руб",
  oldPrice: "3 500руб",
  cta: "Проверь свой проект",
};

export const heroContent = {
  headline: "Создаём цифровое присутствие, которое продаёт",
  subheadline:
    "Маркетинговое агентство полного цикла. От стратегии до контента — работаем на результат.",
  cta: "Обсудить проект",
};
export const about = {
  title: "О нас",
  description:
    "Lockgin — медиа-агентство полного цикла, которое помогает бизнесу расти через продуманное цифровое присутствие. Мы объединяем стратегию, рекламу, контент и аналитику в единую систему, работающую на результат. За каждым проектом стоит команда, которая одинаково хорошо разбирается в креативе и в цифрах. Мы не гонимся за охватами ради охватов — мы приводим заявки и клиентов.",
  founder: "Евгений",
  mission:
    "Делать эффективный маркетинг понятным и прозрачным для бизнеса любого масштаба. Мы верим, что за каждой метрикой должен стоять реальный результат.",
  contacts: [
    {
      email: "hello@evgen.media",
      phone: "+7 (962) 610-16-66",
      telegram: "https://t.me/lockgin_marketing",
    },
  ],
};

export const services = [
  {
    id: "ads",
    title: "Управление рекламой",
    description:
      "Настройка и ведение кампаний в Яндекс Директ, VK Реклама и Telegram Ads. Фокус на ROI.",
    example: {
      type: "image" as const,
      src: "/examples/ads.jpg",
      caption: "Пример: рост заявок на 340%",
    },
  },
  {
    id: "smm",
    title: "Управление SMM",
    description:
      "Ведение соцсетей, визуал, работа с лидерами мнений и комьюнити-менеджмент.",
    example: {
      type: "video" as const,
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      caption: "Пример: охват 2 млн на запуске",
    },
  },
  {
    id: "copy",
    title: "Копирайтинг и блог",
    description:
      "Статьи, посты, сценарии для Reels/TikTok. Помощь в ведении канала от идеи до публикации.",
    example: {
      type: "url" as const,
      src: "https://t.me/s/evgen_example",
      caption: "Пример: Telegram-канал с 0 до 50к",
    },
  },
];

export const cases = [
  {
    id: 1,
    client: "TechStart",
    result: "+340% заявок",
    description:
      "Запустили комплексную рекламу для SaaS-стартапа. Снизили стоимость лида в 2.5 раза.",
    tags: ["Реклама", "Landing"],
  },
  {
    id: 2,
    client: "FashionBrand",
    result: "2 млн охват",
    description:
      "Организовали вирусный запуск коллекции через TikTok и Telegram. 1500+ UGC-роликов.",
    tags: ["SMM", "Influence"],
  },
  {
    id: 3,
    client: "FitPro",
    result: "ТОП-3 в поиске",
    description:
      "Вывели блог фитнес-тренера в топ выдачи за 4 месяца через SEO-копирайтинг.",
    tags: ["Копирайтинг", "SEO"],
  },
];

export const pricing = [
  {
    name: "Пробный",
    price: "9 900 ₽",
    period: "/мес",
    features: [
      "1 рекламный канал (VK / Telegram)",
      "5 постов в месяц",
      "15 Reels / видео",
      "3 креатива под ЦА",
      "Отчёт по заявкам",
      "Поддержка в рабочее время",
      "Автопродление",
      "Отмена в любой момент",
    ],
    recommended: false,
    paymentLink: "https://t.me/lockgin_marketing",
  },
  {
    name: "Старт",
    price: "19 900 ₽",
    period: "/мес",
    features: [
      "2 рекламных канала (VK + Яндекс)",
      "12 постов в месяц",
      "25 Reels / видео",
      "8 креативов под ЦА",
      "Отчёт по заявкам + ROI",
      "Стратегия продвижения на месяц",
      "Поддержка в рабочее время",
      "Автопродление",
      "Отмена в любой момент",
    ],
    recommended: false,
    paymentLink: "https://t.me/lockgin_marketing",
  },
  {
    name: "Бизнес",
    price: "34 900 ₽",
    period: "/мес",
    features: [
      "3+ рекламных канала (VK + Яндекс + Telegram)",
      "20 постов + Stories в месяц",
      "Безлимитные Reels / видео",
      "15 креативов под ЦА",
      "Полная аналитика (CAC, LTV, ROMI)",
      "Стратегия на месяц + корректировки",
      "Персональный менеджер",
      "Приоритетная поддержка",
      "Автопродление",
      "Отмена в любой момент",
    ],
    recommended: true,
    paymentLink: "https://t.me/lockgin_marketing",
  },
];

export const socials = [
  { name: "Telegram", url: "https://t.me/evgen_agency" },
  { name: "VK", url: "https://vk.com/evgen_agency" },
  { name: "YouTube", url: "https://youtube.com/@evgen_agency" },
];

export const contacts = {
  email: "hello@evgen.media",
  phone: "+7 (962) 610-16-66",
};
