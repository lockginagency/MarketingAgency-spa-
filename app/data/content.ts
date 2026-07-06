export const agencyName = 'Evgen';

export const heroContent = {
  headline: 'Создаём цифровое присутствие, которое продаёт',
  subheadline:
    'Медиа-агентство полного цикла. От стратегии до контента — работаем на результат.',
  cta: 'Обсудить проект',
};

export const services = [
  {
    id: 'ads',
    title: 'Управление рекламой',
    description:
      'Настройка и ведение кампаний в Яндекс Директ, VK Реклама и Telegram Ads. Фокус на ROI.',
    example: {
      type: 'image' as const,
      src: '/examples/ads.jpg',
      caption: 'Пример: рост заявок на 340%',
    },
  },
  {
    id: 'smm',
    title: 'Управление SMM',
    description:
      'Ведение соцсетей, визуал, работа с лидерами мнений и комьюнити-менеджмент.',
    example: {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'Пример: охват 2 млн на запуске',
    },
  },
  {
    id: 'copy',
    title: 'Копирайтинг и блог',
    description:
      'Статьи, посты, сценарии для Reels/TikTok. Помощь в ведении канала от идеи до публикации.',
    example: {
      type: 'url' as const,
      src: 'https://t.me/s/evgen_example',
      caption: 'Пример: Telegram-канал с 0 до 50к',
    },
  },
];

export const cases = [
  {
    id: 1,
    client: 'TechStart',
    result: '+340% заявок',
    description:
      'Запустили комплексную рекламу для SaaS-стартапа. Снизили стоимость лида в 2.5 раза.',
    tags: ['Реклама', 'Landing'],
  },
  {
    id: 2,
    client: 'FashionBrand',
    result: '2 млн охват',
    description:
      'Организовали вирусный запуск коллекции через TikTok и Telegram. 1500+ UGC-роликов.',
    tags: ['SMM', 'Influence'],
  },
  {
    id: 3,
    client: 'FitPro',
    result: 'ТОП-3 в поиске',
    description:
      'Вывели блог фитнес-тренера в топ выдачи за 4 месяца через SEO-копирайтинг.',
    tags: ['Копирайтинг', 'SEO'],
  },
];

export const pricing = [
  {
    name: 'Начальный',
    price: '45 000 ₽',
    period: '/мес',
    features: [
      '1 рекламный канал',
      '12 постов в месяц',
      'Базовая аналитика',
      'Email-поддержка',
    ],
    recommended: false,
  },
  {
    name: 'Средний',
    price: '85 000 ₽',
    period: '/мес',
    features: [
      '3 рекламных канала',
      '20 постов + Stories',
      'Расширенная аналитика',
      'Персональный менеджер',
      'SMM-стратегия',
    ],
    recommended: false,
  },
  {
    name: 'Продвинутый',
    price: '120 000 ₽',
    period: '/мес',
    features: [
      'Все каналы + блог',
      'Безлимитный контент',
      'Полная аналитика и отчёты',
      'Приоритетная поддержка 24/7',
      'Копирайтинг + SMM + Реклама',
      'Выгоднее на 25%',
    ],
    recommended: true,
  },
];

export const socials = [
  { name: 'Telegram', url: 'https://t.me/evgen_agency' },
  { name: 'VK', url: 'https://vk.com/evgen_agency' },
  { name: 'YouTube', url: 'https://youtube.com/@evgen_agency' },
];

export const contacts = {
  email: 'hello@evgen.media',
  phone: '+7 (999) 123-45-67',
};
