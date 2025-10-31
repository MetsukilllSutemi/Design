import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div

    >
      <main >

    <div className="relative">

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <p className="text-lg leading-relaxed text-gray-700">
          Не придумала ничего нагляднее, чтобы решить какого стиля мы
          придерживаемся. Акцентные цвета, эффекты, наполнение, положение,
          элементы и т.д. могут и будут меняться. Примеры созданы только для выбора
          общего направления стиля.
        </p>
      </div>
      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          1. Modern Dark and Light Tech/Corporate
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Современный стиль для IT-компаний, отличающийся минимализмом и
          функциональностью. Его черты: контрастная темная или светлая тема с
          глубокими серыми тонами и яркими акцентами (часто синий или
          фиолетовый), четкая типографика, округлость и плавные анимации. Стиль
          создает технологичный и профессиональный образ, делая акцент на
          удобстве восприятия.
        </p>
      </div>

      <div className="min-h-screen bg-gray-950 p-8 font-sans text-gray-100">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0066FF]">
                <span className="text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors hover:text-[#0066FF]"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="rounded-lg bg-[#0066FF] px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-700">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-24 text-center">
            <h1 className="mb-6 text-5xl font-black">
              Здесь будет наш <span className="text-[#0066FF]">заголовок</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-400">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-lg bg-[#0066FF] px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-700">
                Главная кнопка
              </button>
              <button className="rounded-lg border border-gray-700 px-8 py-4 font-bold transition-colors hover:border-[#0066FF] hover:text-[#0066FF]">
                Вторая кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative rounded-lg border border-transparent bg-gray-900 p-8 transition-all duration-300 hover:border-[#0066FF] hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Discount Label */}
                <div className="absolute -top-3 left-4 rounded-full bg-red-500 px-4 py-1 text-sm font-bold">
                  Демпинг до 08.2026
                </div>

                <h3 className="mb-4 text-2xl font-bold">Услуга {item}</h3>
                <p className="mb-6 text-gray-400">
                  Описание услуги. Можно сразу перейти на отдельную страницу с
                  подробным описанием услуги. Элементы могут располагаться как
                  угодно и где угодно.
                </p>

                {/* Price Comparison */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">₽99 999</span>
                    <span className="text-xl text-gray-500 line-through">
                      ₽199 999
                    </span>
                  </div>
                  <div className="mt-2 text-green-400">Экономия ₽100 000</div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-bold text-[#0066FF] transition-transform hover:translate-x-1"
                >
                  Подробнее
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Advantages Section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="rounded-lg border border-transparent bg-gray-900 p-8 transition-all duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0066FF]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold">UI/UX Дизайн</h3>
                <p className="mb-6 text-gray-400">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="rounded-lg border border-transparent bg-gray-900 p-8 transition-all duration-300 ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0066FF]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Адаптивность</h3>
                <p className="mb-6 text-gray-400">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="rounded-lg border border-transparent bg-gray-900 p-8 transition-all duration-300 ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0066FF]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Быстрая разработка</h3>
                <p className="mb-6 text-gray-400">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0066FF]"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-bold text-[#0066FF]">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-black">
              Отзывы клиентов
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-transparent bg-gray-900 p-8 transition-all duration-300 hover:border-[#0066FF] hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066FF] font-bold">
                      JD
                    </div>
                    <div>
                      <div className="font-bold">Иван Петров</div>
                      <div className="text-gray-400">Чудо-юдо клиент</div>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-300">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Elements */}
          <div className="mb-24">
            <h2 className="mb-8 text-4xl font-black">Контактная форма</h2>
            <form className="max-w-2xl">
              <div className="mb-6">
                <label className="mb-2 block font-bold">Почта</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-[#0066FF] focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-bold">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-[#0066FF] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-[#0066FF] px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-700"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white p-8 font-sans text-gray-800">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6] font-bold text-white">
                <span>L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors hover:text-[#8B5CF6]"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="rounded-2xl bg-[#8B5CF6] px-6 py-3 font-bold text-white shadow-lg shadow-purple-500/30 transition-colors hover:bg-purple-600">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-24 text-center">
            <h1 className="mb-6 text-5xl font-extrabold text-gray-900">
              Здесь будет наш <span className="text-[#8B5CF6]">заголовок</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-2xl bg-[#8B5CF6] px-8 py-4 font-bold text-white shadow-lg shadow-purple-500/30 transition-colors hover:bg-purple-600">
                Главная кнопка
              </button>
              <button className="rounded-2xl border border-gray-300 px-8 py-4 font-bold transition-colors hover:border-[#8B5CF6] hover:text-[#8B5CF6]">
                Вторая кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm transition-all duration-300 hover:border-[#8B5CF6]/30 hover:shadow-xl"
              >
                {/* Discount Label */}
                <div className="absolute -top-3 left-4 rounded-full bg-red-500 px-4 py-1 text-sm font-bold text-white">
                  Демпинг до 08.2026
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Услуга {item}
                </h3>
                <p className="mb-6 text-gray-600">
                  Описание услуги. Можно сразу перейти на отдельную страницу с
                  подробным описанием услуги. Элементы могут располагаться как
                  угодно и где угодно.
                </p>

                {/* Price Comparison */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ₽99 999
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ₽199 999
                    </span>
                  </div>
                  <div className="mt-2 text-green-600">Экономия ₽100 000</div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-bold text-[#8B5CF6] transition-transform hover:translate-x-1"
                >
                  Подробнее
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Advantages Section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-gray-600">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Адаптивность
                </h3>
                <p className="mb-6 text-gray-600">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-gray-600">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-bold text-[#8B5CF6]">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900">
              Отзывы клиентов
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-8 shadow-sm transition-all duration-300 hover:border-[#8B5CF6]/30 hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6] font-bold text-white">
                      JD
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Иван Петров</div>
                      <div className="text-gray-600">Чудо-юдо клиент</div>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Elements */}
          <div className="mb-24">
            <h2 className="mb-8 text-4xl font-extrabold text-gray-900">
              Контактная форма
            </h2>
            <form className="max-w-2xl">
              <div className="mb-6">
                <label className="mb-2 block font-bold text-gray-900">
                  Почта
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-[#8B5CF6] focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-bold text-gray-900">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-[#8B5CF6] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl bg-[#8B5CF6] px-8 py-4 font-bold text-white shadow-lg shadow-purple-500/30 transition-colors hover:bg-purple-600"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          2. Luxury tech minimalizm
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Стиль строится на контрасте фона и ярких акцентов в кнопках,
          заголовках и иконках. Минималистичный подход проявляется в чистой
          типографике с тонкими начертаниями, острых углах, обилии свободного
          пространства и лаконичных карточках с тонкими рамками. Плавные
          анимации при наведении и строгая иерархия создают профессиональный
          образ, где удобство
          пользователя сочетается с визуальной роскошью.
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 font-sans text-white">
        <div>
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
                <span className="text-xl font-light">L</span>
              </div>
              <span className="text-xl font-light tracking-widest">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-gold-400 hover:scale-110 hover:font-medium text-sm tracking-widest text-gray-400 uppercase transition-all duration-300 transform"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="border-gold-500 text-gold-400 hover:border-gold-300 hover:text-gold-300 hover:bg-gold-500/10 hover:scale-105 border px-8 py-4 text-sm transition-all duration-300 transform">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-24 text-center">
            <h1 className="mb-4 text-4xl font-light tracking-widest">
              Здесь будет наш <span className="text-gold-400">заголовок</span>
            </h1>
            <p className="mb-8 text-sm tracking-widest text-gray-400 uppercase">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="via-gold-500 mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent to-transparent"></div>
            <div className="mt-8 flex justify-center gap-4">
              <button className="border-gold-500 text-gold-400 hover:border-gold-300 hover:text-gold-300 hover:bg-gold-500/10 hover:scale-105 border px-8 py-4 text-sm transition-all duration-300 transform">
                Главная кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mx-auto mb-16 max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group hover:border-gold-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/10 rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 transition-all duration-300 transform cursor-pointer"
                >
                  {/* Discount Label */}
                  <div className="border-gold-500 text-gold-500 mb-4 border px-3 py-1 text-center text-xs">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="text-gold-400 group-hover:text-gold-300 mb-4 text-center text-xl font-light transition-colors">
                    Услуга {item}
                  </h3>
                  <p className="mb-6 text-center text-sm leading-relaxed text-gray-400">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6 text-center">
                    <div className="mb-2 flex items-center justify-center gap-4">
                      <span className="text-2xl font-light text-white">
                        ₽99 999
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="text-gold-500 text-xs">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="border-gold-400 text-gold-400 hover:border-gold-300 hover:text-gold-300 inline-block border-b pb-0.5 text-sm transition-colors duration-300"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mx-auto mb-16 max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="group rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 transition-all duration-300 transform cursor-pointer">
                <div className="border-gold-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="text-gold-400 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-gold-400 mb-4 text-xl font-light">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="group  rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 transition-all duration-300 transform cursor-pointer">
                <div className="border-gold-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="text-gold-400 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-gold-400 mb-4 text-xl font-light">
                  Адаптивность
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="group rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 transition-all duration-300 transform cursor-pointer">
                <div className="border-gold-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="text-gold-400 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-gold-400 mb-4 text-xl font-light">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="bg-gold-500 h-1.5 w-1.5 rounded-full"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold-400 mb-2 text-3xl font-light">
                    {stat.number}
                  </div>
                  <div className="text-sm tracking-widest text-gray-400 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto mb-16 max-w-4xl">
            <h2 className="text-gold-400 mb-12 text-center text-2xl font-light tracking-widest">
              Отзывы клиентов
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="group hover:border-gold-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/10 rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 transition-all duration-300 transform cursor-pointer"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="border-gold-500 text-gold-400 flex h-12 w-12 items-center justify-center rounded-lg border font-light">
                      JD
                    </div>
                    <div>
                      <div className="font-light text-white">Иван Петров</div>
                      <div className="text-sm text-gray-400">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-gold-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mx-auto mb-16 max-w-md rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8">
          <h2 className="text-gold-400 mb-6 text-center text-lg font-light">
            Контактная форма
          </h2>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 w-full border border-gray-600 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Сообщение
              </label>
              <textarea
                rows={4}
                placeholder="Ваше сообщение..."
                className="focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 w-full border border-gray-600 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 outline-none rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="border-gold-500 text-gold-400 hover:border-gold-300 hover:text-gold-300 hover:bg-gold-500/10 hover:scale-105 border px-8 py-4 text-sm transition-all duration-300 transform"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white p-8 font-sans text-gray-900">
        <div>
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 shadow-sm">
                <span className="text-xl font-light text-gray-700">L</span>
              </div>
              <span className="text-xl font-light tracking-widest text-gray-800">
                Logo
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-blue-600 hover:scale-110 hover:font-medium text-sm tracking-widest text-gray-600 uppercase transition-all duration-300 transform"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="border-blue-500 text-blue-600 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 hover:scale-105 border-2 px-8 py-4 text-sm transition-all duration-300 transform shadow-sm">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-24 text-center">
            <h1 className="mb-4 text-4xl font-light tracking-widest text-gray-800">
              Здесь будет наш <span className="text-blue-600">заголовок</span>
            </h1>
            <p className="mb-8 text-sm tracking-widest text-gray-600 uppercase">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="via-blue-500 mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent to-transparent"></div>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 px-8 py-4 text-sm transition-all duration-300 transform shadow-lg hover:shadow-blue-500/25">
                Главная кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mx-auto mb-16 max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group hover:border-blue-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-8 transition-all duration-300 transform cursor-pointer shadow-sm"
                >
                  {/* Discount Label */}
                  <div className="border-blue-500 text-blue-600 mb-4 border-2 px-3 py-1 text-center text-xs bg-blue-50">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="text-blue-600 group-hover:text-blue-500 mb-4 text-center text-xl font-light transition-colors">
                    Услуга {item}
                  </h3>
                  <p className="mb-6 text-center text-sm leading-relaxed text-gray-600">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6 text-center">
                    <div className="mb-2 flex items-center justify-center gap-4">
                      <span className="text-2xl font-light text-gray-800">
                        ₽99 999
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="text-blue-600 text-xs font-medium">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="border-blue-500 text-blue-600 hover:border-blue-400 hover:text-blue-500 inline-block border-b-2 pb-0.5 text-sm transition-colors duration-300"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mx-auto mb-16 max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="group  rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-8 transition-all duration-300 transform cursor-pointer shadow-sm">
                <div className="border-blue-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border-2 bg-blue-50">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="text-blue-600 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-blue-600 mb-4 text-xl font-light">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="group rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-8 transition-all duration-300 transform cursor-pointer shadow-sm">
                <div className="border-blue-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border-2 bg-blue-50">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="text-blue-600 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-blue-600 mb-4 text-xl font-light">
                  Адаптивность
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="group  rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-8 transition-all duration-300 transform cursor-pointer shadow-sm">
                <div className="border-blue-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border-2 bg-blue-50">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="text-blue-600 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-blue-600 mb-4 text-xl font-light">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-blue-500 h-1.5 w-1.5 rounded-full"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 mb-2 text-3xl font-light">
                    {stat.number}
                  </div>
                  <div className="text-sm tracking-widest text-gray-600 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto mb-16 max-w-4xl">
            <h2 className="text-blue-600 mb-12 text-center text-2xl font-light tracking-widest">
              Отзывы клиентов
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="group hover:border-blue-500 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-8 transition-all duration-300 transform cursor-pointer shadow-sm"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="border-blue-500 text-blue-600 flex h-12 w-12 items-center justify-center rounded-lg border-2 font-light bg-blue-50">
                      JD
                    </div>
                    <div>
                      <div className="font-light text-gray-800">
                        Иван Петров
                      </div>
                      <div className="text-sm text-gray-600">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-blue-500">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mx-auto mb-16 max-w-md rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-8 shadow-sm">
          <h2 className="text-blue-600 mb-6 text-center text-lg font-light">
            Контактная форма
          </h2>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-600">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Сообщение
              </label>
              <textarea
                rows={4}
                placeholder="Ваше сообщение..."
                className="focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 outline-none rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 w-full py-3 text-sm transition-all duration-300 transform shadow-lg hover:shadow-blue-500/25 rounded-lg"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          3. Neumorphism
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Основные черты: мягкие тени создают иллюзию объемности элементов,
          минималистичная цветовая палитра с преобладанием нейтральных оттенков,
          плавные переходы между светом и тенью. В светлой теме используются
          нежные тени для создания эффекта "выступающих" элементов, в темной -
          более контрастные тени с инвертированной цветовой схемой. Стиль
          отличается современным технологичным видом с тактильным ощущением
          интерфейса, где каждый элемент кажется физически осязаемым.
        </p>
      </div>

      <div className="bg-neutral-100 px-8 py-16 font-sans text-neutral-900">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                <span className="text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors hover:text-neutral-600"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="rounded-xl border border-neutral-900 px-6 py-3 transition-colors hover:bg-neutral-900 hover:text-white">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-24 text-center">
            <h1 className="mb-6 text-5xl font-bold">
              Здесь будет наш
              <span className="block">заголовок</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-neutral-600">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-xl border border-neutral-900 px-8 py-4 transition-colors hover:bg-neutral-900 hover:text-white">
                Главная кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mb-24">
            <h2 className="mb-2 text-3xl font-bold">Наши услуги</h2>
            <p className="mb-8 text-neutral-600">
              Мягкий свет и рельефные карточки
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-neutral-100 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] transition hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]"
                >
                  {/* Discount Label */}
                  <div className="mb-4 text-xs text-red-500">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-2 font-semibold">Услуга {item}</h3>
                  <p className="mb-4 text-sm text-neutral-500">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-4">
                    <div className="mb-2 text-xs">
                      <span className="mr-2 line-through">₽199 999</span>
                      <span className="font-bold">₽99 999</span>
                    </div>
                    <div className="text-xs text-green-600">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded border border-neutral-900 px-3 py-1 text-sm transition hover:bg-neutral-900 hover:text-white"
                  >
                    Подробнее
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-24">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="rounded-xl bg-neutral-100 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] transition ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold">UI/UX Дизайн</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="rounded-xl bg-neutral-100 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] transition ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold">Адаптивность</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="rounded-xl bg-neutral-100 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] transition ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold">Быстрая разработка</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <h2 className="mb-8 text-3xl font-bold">Отзывы клиентов</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-neutral-100 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)]"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 font-bold shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold">Иван Петров</div>
                      <div className="text-sm text-neutral-600">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-500">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mx-auto mb-24 max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">Контактная форма</h2>
          <form className="mx-auto grid max-w-md gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded border border-neutral-300 p-3 focus:border-neutral-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Сообщение
              </label>
              <textarea
                placeholder="Ваше сообщение..."
                rows={4}
                className="w-full rounded border border-neutral-300 p-3 focus:border-neutral-900 focus:outline-none"
              ></textarea>
            </div>
            <button className="rounded border border-neutral-900 px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white">
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="bg-neutral-900 px-8 py-16 font-sans text-neutral-100">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                <span className="text-xl font-bold text-neutral-100">L</span>
              </div>
              <span className="text-xl font-bold text-neutral-100">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-neutral-400 transition-colors hover:text-neutral-200"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="rounded-xl border border-neutral-200 px-6 py-3 text-neutral-100 transition-colors hover:bg-neutral-200 hover:text-neutral-900">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-24 text-center">
            <h1 className="mb-6 text-5xl font-bold text-neutral-100">
              Здесь будет наш
              <span className="block">заголовок</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-neutral-400">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-xl border border-neutral-200 px-8 py-4 text-neutral-100 transition-colors hover:bg-neutral-200 hover:text-neutral-900">
                Главная кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mb-24">
            <h2 className="mb-2 text-3xl font-bold text-neutral-100">
              Наши услуги
            </h2>
            <p className="mb-8 text-neutral-400">
              Глубокие тени и неоновые акценты
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-neutral-800 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)] transition hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"
                >
                  {/* Discount Label */}
                  <div className="mb-4 text-xs text-red-400">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-2 font-semibold text-neutral-100">
                    Услуга {item}
                  </h3>
                  <p className="mb-4 text-sm text-neutral-400">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-4">
                    <div className="mb-2 text-xs">
                      <span className="mr-2 text-neutral-500 line-through">
                        ₽199 999
                      </span>
                      <span className="font-bold text-neutral-100">
                        ₽99 999
                      </span>
                    </div>
                    <div className="text-xs text-green-400">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded border border-neutral-200 px-3 py-1 text-sm text-neutral-100 transition hover:bg-neutral-200 hover:text-neutral-900"
                  >
                    Подробнее
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-24">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="rounded-xl bg-neutral-800 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)] ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-neutral-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold text-neutral-100">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-sm text-neutral-400">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="rounded-xl bg-neutral-800 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)] transition ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-neutral-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold text-neutral-100">
                  Адаптивность
                </h3>
                <p className="mb-6 text-sm text-neutral-400">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="rounded-xl bg-neutral-800 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)] transition ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-neutral-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold text-neutral-100">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm text-neutral-400">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-neutral-500"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold text-neutral-100">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <h2 className="mb-8 text-3xl font-bold text-neutral-100">
              Отзывы клиентов
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-neutral-800 p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)]"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 font-bold text-neutral-100 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-100">
                        Иван Петров
                      </div>
                      <div className="text-sm text-neutral-400">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-400">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-300">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mx-auto mb-24 max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-neutral-100">
            Контактная форма
          </h2>
          <form className="mx-auto grid max-w-md gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-200">
                Почта
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded border border-neutral-600 bg-neutral-800 p-3 text-neutral-100 placeholder-neutral-500 focus:border-neutral-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-200">
                Сообщение
              </label>
              <textarea
                placeholder="Ваше сообщение..."
                rows={4}
                className="w-full rounded border border-neutral-600 bg-neutral-800 p-3 text-neutral-100 placeholder-neutral-500 focus:border-neutral-400 focus:outline-none"
              ></textarea>
            </div>
            <button className="rounded border border-neutral-200 px-4 py-2 text-neutral-100 transition-colors hover:bg-neutral-200 hover:text-neutral-900">
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          4. Минимализм с акцентом на типографику
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          
          Основные черты: чистая белая основа, тонкие горизонтальные разделители
          вместо карточек, сдержанная серая палитра, акцент на качественную
          типографику с четкой иерархией, минимальное количество декоративных
          элементов и упор на читабельность контента.
        </p>
      </div>
      <div className="bg-white p-8 font-sans">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center">
                <span className="text-xl font-medium">L</span>
              </div>
              <span className="text-xl font-medium text-gray-900">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="bg-gray-900 px-6 py-3 text-sm text-white transition-colors hover:bg-gray-800">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-light tracking-tight text-gray-900">
              Здесь будет наш <span className="block">заголовок</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-600">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="mx-auto h-0.5 w-24 bg-gray-300"></div>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-gray-900 px-8 py-4 text-sm text-white transition-colors hover:bg-gray-800">
                Главная кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mx-auto mb-16 grid max-w-4xl gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative border-t border-gray-200 pt-8"
              >
                {/* Discount Label - в правом верхнем углу */}
                <div className="absolute -top-2 right-0 border border-red-600 bg-white px-2 py-1 text-xs text-red-600">
                  Демпинг до 08.2026
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="mb-2 text-xl font-medium text-gray-900">
                      Услуга {item}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Описание услуги. Можно сразу перейти на отдельную страницу
                      с подробным описанием услуги. Элементы могут располагаться
                      как угодно и где угодно.
                    </p>
                  </div>

                  <div className="flex flex-col items-end space-y-4">
                    {/* Price Comparison - снизу справа */}
                    <div className="text-right">
                      <div className="text-sm text-gray-400 line-through">
                        ₽199 999
                      </div>
                      <div className="font-medium text-gray-900">₽99 999</div>
                      <div className="mt-1 text-xs text-green-600">
                        Экономия ₽100 000
                      </div>
                    </div>

                    <a
                      href="#"
                      className="border-b border-gray-900 pb-0.5 text-sm text-gray-900 hover:border-gray-700 hover:text-gray-700"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advantages Section */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="grid gap-8 border-t border-gray-200 pt-16 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="border-t border-gray-200 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="border-t border-gray-200 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Адаптивность
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="border-t border-gray-200 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mx-auto mb-16 max-w-4xl border-t border-gray-200 pt-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-2xl font-medium text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto mb-16 max-w-4xl border-t border-gray-200 pt-16">
            <h2 className="mb-8 text-2xl font-medium text-gray-900">
              Отзывы клиентов
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div key={item} className="border-t border-gray-200 pt-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center font-medium text-gray-600">
                      JD
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Иван Петров
                      </div>
                      <div className="text-sm text-gray-600">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-gray-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mx-auto max-w-md border-t border-gray-200 pt-16">
          <h2 className="mb-6 text-center text-lg font-medium text-gray-900">
            Контактная форма
          </h2>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-600">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 px-2 py-3 outline-none focus:border-gray-900"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Сообщение
              </label>
              <textarea
                rows={4}
                placeholder="Ваше сообщение..."
                className="w-full border-b border-gray-300 px-2 py-3 outline-none focus:border-gray-900"
              />
            </div>
            <button className="w-full bg-gray-900 py-3 text-sm text-white transition-colors hover:bg-gray-800">
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-900 p-8 font-sans text-gray-100">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center">
                <span className="text-xl font-medium text-gray-100">L</span>
              </div>
              <span className="text-xl font-medium text-gray-100">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 transition-colors hover:text-gray-200"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="bg-gray-100 px-6 py-3 text-sm text-gray-900 transition-colors hover:bg-gray-200">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-light tracking-tight text-gray-100">
              Здесь будет наш <span className="block">заголовок</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-400">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="mx-auto h-0.5 w-24 bg-gray-700"></div>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-gray-100 px-8 py-4 text-sm text-gray-900 transition-colors hover:bg-gray-200">
                Главная кнопка
              </button>
            </div>
          </div>

          {/* Cards with Pricing Comparison */}
          <div className="mx-auto mb-16 grid max-w-4xl gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative border-t border-gray-700 pt-8"
              >
                {/* Discount Label - в правом верхнем углу */}
                <div className="absolute -top-2 right-0 border border-red-500 bg-gray-800 px-2 py-1 text-xs text-red-400">
                  Демпинг до 08.2026
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="mb-2 text-xl font-medium text-gray-100">
                      Услуга {item}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Описание услуги. Можно сразу перейти на отдельную страницу
                      с подробным описанием услуги. Элементы могут располагаться
                      как угодно и где угодно.
                    </p>
                  </div>

                  <div className="flex flex-col items-end space-y-4">
                    {/* Price Comparison - снизу справа */}
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        ₽199 999
                      </div>
                      <div className="font-medium text-gray-100">₽99 999</div>
                      <div className="mt-1 text-xs text-green-400">
                        Экономия ₽100 000
                      </div>
                    </div>

                    <a
                      href="#"
                      className="border-b border-gray-100 pb-0.5 text-sm text-gray-100 transition-colors hover:border-gray-300 hover:text-gray-300"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advantages Section */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="grid gap-8 border-t border-gray-700 pt-16 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="border-t border-gray-700 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-100">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="border-t border-gray-700 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-100">
                  Адаптивность
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="border-t border-gray-700 pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-100">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mx-auto mb-16 max-w-4xl border-t border-gray-700 pt-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-2xl font-medium text-gray-100">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto mb-16 max-w-4xl border-t border-gray-700 pt-16">
            <h2 className="mb-8 text-2xl font-medium text-gray-100">
              Отзывы клиентов
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div key={item} className="border-t border-gray-700 pt-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center font-medium text-gray-400">
                      JD
                    </div>
                    <div>
                      <div className="font-medium text-gray-100">
                        Иван Петров
                      </div>
                      <div className="text-sm text-gray-400">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-gray-500">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mx-auto max-w-md border-t border-gray-700 pt-16">
          <h2 className="mb-6 text-center text-lg font-medium text-gray-100">
            Контактная форма
          </h2>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-600 bg-transparent px-2 py-3 text-gray-100 outline-none transition-colors focus:border-gray-300"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Сообщение
              </label>
              <textarea
                rows={4}
                placeholder="Ваше сообщение..."
                className="w-full border-b border-gray-600 bg-transparent px-2 py-3 text-gray-100 outline-none transition-colors focus:border-gray-300"
              />
            </div>
            <button className="w-full bg-gray-100 py-3 text-sm text-gray-900 transition-colors hover:bg-gray-200">
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          5. Брутализм
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Основные черты: моноширинный шрифт, контрастная
          черно-белая цветовая схема, грубые рамки вокруг всех элементов,
          отсутствие скруглений и теней, намеренно "сырой" вид с акцентом на
          функциональность, геометричная сетка и смелая типографика.
        </p>
      </div>
      <div className="min-h-screen bg-white font-mono text-black">
        <div>
          {/* Header */}
          <header className="container mx-auto border-b border-black px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold tracking-tighter">Logo</div>
              </div>

              {/* Navigation + CTA Button */}
              <div className="flex items-center gap-6">
                {/* Navigation */}
                <nav className="hidden space-x-6 md:flex">
                  {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="border-b border-transparent px-2 py-1 text-sm font-medium transition-colors hover:border-black"
                      >
                        {item}
                      </a>
                    )
                  )}
                </nav>

                {/* CTA Button */}
                <button className="border border-black bg-black px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-800">
                  Оставить заявку
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="container mx-auto px-6 py-24">
            <div className="max-w-4xl">
              <h1 className="mb-8 text-7xl leading-none font-black tracking-tighter">
                ЗДЕСЬ
                <br />
                БУДЕТ НАШ
                <br />
                <span className="bg-black px-4 text-white">ЗАГОЛОВОК</span>
              </h1>
              <div className="my-12 border-t border-b border-black py-8">
                <p className="max-w-2xl text-xl">
                  Здесь будет подзаголовок. Положение не имеет значения - слева,
                  справа, по центру. Больше текста, меньше текста. Какие мы
                  молодцы.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-black bg-black px-12 py-4 font-bold text-white transition-colors hover:bg-gray-800">
                  Главная кнопка →
                </button>
                <button className="border border-black px-8 py-4 font-bold transition-colors hover:bg-black hover:text-white">
                  Вторая кнопка
                </button>
              </div>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="container mx-auto border-t border-black px-6 py-16">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-4xl font-black">УСЛУГИ</h2>
              <div className="text-gray-600">01/03</div>
            </div>

            <div className="grid gap-0 border border-black md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group border-r border-black p-8 transition-colors last:border-r-0 hover:bg-gray-100"
                >
                  {/* Discount Label */}
                  <div className="mb-4 border border-black bg-black px-3 py-1 text-sm font-bold text-white">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-4 text-2xl font-black">Услуга {item}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="text-2xl font-black">₽99 999</span>
                      <span className="text-lg text-gray-600 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="text-sm font-bold text-green-600">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block border border-black px-4 py-2 text-sm font-bold transition-colors hover:bg-black hover:text-white"
                  >
                    Подробнее →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="container mx-auto border-t border-black px-6 py-16">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-4xl font-black">ПРЕИМУЩЕСТВА</h2>
              <div className="text-gray-600">02/03</div>
            </div>
            <div className="grid gap-0 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="border-r border-black p-8 transition-colors hover:bg-gray-100">
                <h3 className="mb-4 text-2xl font-black">UI/UX ДИЗАЙН</h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="border-r border-black p-8 transition-colors hover:bg-gray-100">
                <h3 className="mb-4 text-2xl font-black">АДАПТИВНОСТЬ</h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="p-8 transition-colors hover:bg-gray-100">
                <h3 className="mb-4 text-2xl font-black">БЫСТРАЯ РАЗРАБОТКА</h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-black"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto border-t border-black px-6 py-16">
            <div className="grid grid-cols-2 gap-8 border border-black p-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-black">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto border-t border-black px-6 py-16">
            <h2 className="mb-12 text-4xl font-black">ОТЗЫВЫ КЛИЕНТОВ</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  text: "Команда показала исключительное качество кода и поддерживала четкую коммуникацию на протяжении всего проекта. Их внимание к оптимизации производительности впечатляет.",
                  author: "CTO, Технологический стартап",
                  project: "SAAS Платформа",
                },
                {
                  text: "Чистая архитектура, тщательная документация и своевременная поставка. Они поняли наши бизнес-потребности и идеально перевели их в технические решения.",
                  author: "Продукт менеджер, E-commerce",
                  project: "Интернет-магазин",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="border border-black p-8 transition-colors hover:bg-gray-100"
                >
                  <div className="mb-6 text-2xl font-black">
                    "{testimonial.text}"
                  </div>
                  <div className="border-t border-black pt-4">
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Form Elements */}
          <section className="container mx-auto border-t border-black px-6 py-16">
            <div className="mx-auto max-w-md">
              <h2 className="mb-6 text-center text-2xl font-black">
                КОНТАКТНАЯ ФОРМА
              </h2>
              <form className="space-y-4 border border-black p-8">
                <div>
                  <label className="mb-2 block text-sm font-bold">Почта</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-black px-2 py-3 outline-none focus:border-gray-600"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ваше сообщение..."
                    className="w-full border-b border-black px-2 py-3 outline-none focus:border-gray-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-black bg-black py-3 font-bold text-white transition-colors hover:bg-gray-800"
                >
                  Отправить
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className="min-h-screen bg-black font-mono text-white">
        <div>
          {/* Header */}
          <header className="container mx-auto border-b border-white px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold tracking-tighter">Logo</div>
              </div>

              {/* Navigation + CTA Button */}
              <div className="flex items-center gap-6">
                {/* Navigation */}
                <nav className="hidden space-x-6 md:flex">
                  {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="border-b border-transparent px-2 py-1 text-sm font-medium transition-colors hover:border-white"
                      >
                        {item}
                      </a>
                    )
                  )}
                </nav>

                {/* CTA Button */}
                <button className="border border-white bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-gray-200">
                  Оставить заявку
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="container mx-auto px-6 py-24">
            <div className="max-w-4xl">
              <h1 className="mb-8 text-7xl font-black leading-none tracking-tighter">
                ЗДЕСЬ
                <br />
                БУДЕТ НАШ
                <br />
                <span className="bg-white px-4 text-black">ЗАГОЛОВОК</span>
              </h1>
              <div className="my-12 border-t border-b border-white py-8">
                <p className="max-w-2xl text-xl text-gray-300">
                  Здесь будет подзаголовок. Положение не имеет значения - слева,
                  справа, по центру. Больше текста, меньше текста. Какие мы
                  молодцы.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-white bg-white px-12 py-4 font-bold text-black transition-colors hover:bg-gray-200">
                  Главная кнопка →
                </button>
                <button className="border border-white px-8 py-4 font-bold transition-colors hover:bg-white hover:text-black">
                  Вторая кнопка
                </button>
              </div>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="container mx-auto border-t border-white px-6 py-16">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-4xl font-black">УСЛУГИ</h2>
              <div className="text-gray-400">01/03</div>
            </div>

            <div className="grid gap-0 border border-white md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group border-r border-white p-8 transition-colors last:border-r-0 hover:bg-gray-900"
                >
                  {/* Discount Label */}
                  <div className="mb-4 border border-white bg-white px-3 py-1 text-sm font-bold text-black">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-4 text-2xl font-black">Услуга {item}</h3>
                  <p className="mb-6 leading-relaxed text-gray-400">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="text-2xl font-black">₽99 999</span>
                      <span className="text-lg text-gray-400 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="text-sm font-bold text-green-400">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block border border-white px-4 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-black"
                  >
                    Подробнее →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="container mx-auto border-t border-white px-6 py-16">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-4xl font-black">ПРЕИМУЩЕСТВА</h2>
              <div className="text-gray-400">02/03</div>
            </div>
            <div className="grid gap-0 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="border-r border-white p-8 transition-colors hover:bg-gray-900">
                <h3 className="mb-4 text-2xl font-black">UI/UX ДИЗАЙН</h3>
                <p className="mb-6 leading-relaxed text-gray-400">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="border-r border-white p-8 transition-colors hover:bg-gray-900">
                <h3 className="mb-4 text-2xl font-black">АДАПТИВНОСТЬ</h3>
                <p className="mb-6 leading-relaxed text-gray-400">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="p-8 transition-colors hover:bg-gray-900">
                <h3 className="mb-4 text-2xl font-black">БЫСТРАЯ РАЗРАБОТКА</h3>
                <p className="mb-6 leading-relaxed text-gray-400">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-white"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto border-t border-white px-6 py-16">
            <div className="grid grid-cols-2 gap-8 border border-white p-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-black">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto border-t border-white px-6 py-16">
            <h2 className="mb-12 text-4xl font-black">ОТЗЫВЫ КЛИЕНТОВ</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  text: "Команда показала исключительное качество кода и поддерживала четкую коммуникацию на протяжении всего проекта. Их внимание к оптимизации производительности впечатляет.",
                  author: "CTO, Технологический стартап",
                  project: "SAAS Платформа",
                },
                {
                  text: "Чистая архитектура, тщательная документация и своевременная поставка. Они поняли наши бизнес-потребности и идеально перевели их в технические решения.",
                  author: "Продукт менеджер, E-commerce",
                  project: "Интернет-магазин",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="border border-white p-8 transition-colors hover:bg-gray-900"
                >
                  <div className="mb-6 text-2xl font-black">
                    "{testimonial.text}"
                  </div>
                  <div className="border-t border-white pt-4">
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Form Elements */}
          <section className="container mx-auto border-t border-white px-6 py-16">
            <div className="mx-auto max-w-md">
              <h2 className="mb-6 text-center text-2xl font-black">
                КОНТАКТНАЯ ФОРМА
              </h2>
              <form className="space-y-4 border border-white p-8">
                <div>
                  <label className="mb-2 block text-sm font-bold">Почта</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-white bg-transparent px-2 py-3 text-white outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ваше сообщение..."
                    className="w-full border-b border-white bg-transparent px-2 py-3 text-white outline-none focus:border-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-white bg-white py-3 font-bold text-black transition-colors hover:bg-gray-200"
                >
                  Отправить
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          6. Tech Minimalism
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Основные
          черты: темная цветовая схема с черным фоном, синие акценты для
          интерактивных элементов, серые рамки и разделители, минималистичный
          подход с акцентом на типографику, тонкие анимации при наведении с
          синим свечением. Стиль создает впечатление технологичности,
          профессионализма и современности.
        </p>
      </div>
      <div className="bg-black font-sans text-white">
        <div>
          {/* Header */}
          <header className="border-b border-neutral-800 px-10 py-6">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700">
                  <span className="text-lg font-bold">L</span>
                </div>
                <span className="text-lg font-bold">Logo</span>
              </div>

              {/* Navigation */}
              <nav className="flex gap-8">
                {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-sm transition-colors hover:text-blue-500"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>

              {/* CTA Button */}
              <button className="border border-blue-500 px-5 py-2 text-sm text-blue-500 transition hover:bg-blue-500 hover:text-white">
                Оставить заявку
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="border-b border-neutral-800 px-10 py-32">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                Здесь будет наш <span className="text-blue-500">заголовок</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-neutral-400">
                Здесь будет подзаголовок. Положение не имеет значения - слева,
                справа, по центру. Больше текста, меньше текста. Какие мы
                молодцы.
              </p>
              <div className="flex justify-center gap-4">
                <button className="border border-blue-500 px-6 py-3 text-sm text-blue-500 transition hover:bg-blue-500 hover:text-white">
                  Главная кнопка
                </button>
                <button className="border border-neutral-700 px-6 py-3 text-sm transition hover:border-blue-500 hover:text-blue-500">
                  Вторая кнопка
                </button>
              </div>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="border-b border-neutral-800 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">Услуги</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border border-neutral-700 p-8 transition hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  >
                    {/* Discount Label */}
                    <div className="mb-4 text-xs text-red-400">
                      Демпинг до 08.2026
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">
                      Услуга {item}
                    </h3>
                    <p className="mb-6 text-sm text-neutral-400">
                      Описание услуги. Можно сразу перейти на отдельную страницу
                      с подробным описанием услуги. Элементы могут располагаться
                      как угодно и где угодно.
                    </p>

                    {/* Price Comparison */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center gap-4">
                        <span className="text-2xl font-bold">₽99 999</span>
                        <span className="text-lg text-neutral-500 line-through">
                          ₽199 999
                        </span>
                      </div>
                      <div className="text-sm text-green-400">
                        Экономия ₽100 000
                      </div>
                    </div>

                    <button className="border border-blue-500 px-4 py-2 text-xs text-blue-500 transition hover:bg-blue-500 hover:text-white">
                      Подробнее
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="border-b border-neutral-800 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Преимущества
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {/* Card 1 - UI/UX */}
                <div className="border border-neutral-700 p-8 ">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-neutral-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">UI/UX Дизайн</h3>
                  <p className="mb-6 text-sm text-neutral-400">
                    Создаем интуитивные интерфейсы, которые пользователи
                    понимают с первого взгляда. Прорабатываем каждый пиксель для
                    идеального пользовательского опыта.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Исследование пользователей
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Прототипирование и тестирование
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Современные тенденции
                    </li>
                  </ul>
                </div>

                {/* Card 2 - Adaptiveness */}
                <div className="border border-neutral-700 p-8 ">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-neutral-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">Адаптивность</h3>
                  <p className="mb-6 text-sm text-neutral-400">
                    Ваш сайт будет идеально выглядеть на любом устройстве — от
                    смартфона до десктопа. Mobile-first подход и тщательное
                    тестирование.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Mobile-first подход
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Кроссбраузерная совместимость
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Быстрая загрузка
                    </li>
                  </ul>
                </div>

                {/* Card 3 - Fast Development */}
                <div className="border border-neutral-700 p-8 ">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-neutral-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">
                    Быстрая разработка
                  </h3>
                  <p className="mb-6 text-sm text-neutral-400">
                    Используем современные технологии и проверенные методологии
                    для быстрого вывода вашего продукта на рынок без потери
                    качества.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Agile методология
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Современный стек технологий
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Непрерывная интеграция
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-b border-neutral-800 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { number: "10K+", label: "Пользователей" },
                  { number: "99.9%", label: "Аптайм" },
                  { number: "24/7", label: "Поддержка" },
                  { number: "50+", label: "Функций" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="border-b border-neutral-800 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Отзывы клиентов
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="border border-neutral-700 p-8 transition hover:border-blue-500"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border border-neutral-700 font-semibold">
                        JD
                      </div>
                      <div>
                        <div className="font-semibold">Иван Петров</div>
                        <div className="text-sm text-neutral-400">
                          Чудо-юдо клиент
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 text-neutral-400">
                      "Отличная работа! Команда профессионалов, которые
                      действительно понимают, что делают. Проект был сдан
                      вовремя и превзошел все ожидания."
                    </p>
                    <div className="text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Form Elements */}
        <section className="border-b border-neutral-800 px-10 py-24">
          <div className="mx-auto max-w-md">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Контактная форма
            </h2>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Почта</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-neutral-700 bg-black p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full border border-neutral-700 bg-black p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button className="w-full border border-blue-500 py-3 text-sm text-blue-500 transition hover:bg-blue-500 hover:text-white">
                Отправить
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="bg-white font-sans text-gray-900">
        <div>
          {/* Header */}
          <header className="border-b border-gray-200 px-10 py-6">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-gray-300">
                  <span className="text-lg font-bold">L</span>
                </div>
                <span className="text-lg font-bold">Logo</span>
              </div>

              {/* Navigation */}
              <nav className="flex gap-8">
                {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-sm transition-colors hover:text-blue-600"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>

              {/* CTA Button */}
              <button className="border border-blue-600 px-5 py-2 text-sm text-blue-600 transition hover:bg-blue-600 hover:text-white">
                Оставить заявку
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="border-b border-gray-200 px-10 py-32">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                Здесь будет наш <span className="text-blue-600">заголовок</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-gray-600">
                Здесь будет подзаголовок. Положение не имеет значения - слева,
                справа, по центру. Больше текста, меньше текста. Какие мы
                молодцы.
              </p>
              <div className="flex justify-center gap-4">
                <button className="border border-blue-600 px-6 py-3 text-sm text-blue-600 transition hover:bg-blue-600 hover:text-white">
                  Главная кнопка
                </button>
                <button className="border border-gray-300 px-6 py-3 text-sm transition hover:border-blue-600 hover:text-blue-600">
                  Вторая кнопка
                </button>
              </div>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="border-b border-gray-200 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">Услуги</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border border-gray-300 p-8 transition hover:border-blue-600 hover:shadow-lg"
                  >
                    {/* Discount Label */}
                    <div className="mb-4 text-xs text-red-600">
                      Демпинг до 08.2026
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">
                      Услуга {item}
                    </h3>
                    <p className="mb-6 text-sm text-gray-600">
                      Описание услуги. Можно сразу перейти на отдельную страницу
                      с подробным описанием услуги. Элементы могут располагаться
                      как угодно и где угодно.
                    </p>

                    {/* Price Comparison */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center gap-4">
                        <span className="text-2xl font-bold">₽99 999</span>
                        <span className="text-lg text-gray-400 line-through">
                          ₽199 999
                        </span>
                      </div>
                      <div className="text-sm text-green-600">
                        Экономия ₽100 000
                      </div>
                    </div>

                    <button className="border border-blue-600 px-4 py-2 text-xs text-blue-600 transition hover:bg-blue-600 hover:text-white">
                      Подробнее
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="border-b border-gray-200 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Преимущества
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {/* Card 1 - UI/UX */}
                <div className="border border-gray-300 p-8 ">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-gray-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">UI/UX Дизайн</h3>
                  <p className="mb-6 text-sm text-gray-600">
                    Создаем интуитивные интерфейсы, которые пользователи
                    понимают с первого взгляда. Прорабатываем каждый пиксель для
                    идеального пользовательского опыта.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Исследование пользователей
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Прототипирование и тестирование
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Современные тенденции
                    </li>
                  </ul>
                </div>

                {/* Card 2 - Adaptiveness */}
                <div className="border border-gray-300 p-8 ">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-gray-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">Адаптивность</h3>
                  <p className="mb-6 text-sm text-gray-600">
                    Ваш сайт будет идеально выглядеть на любом устройстве — от
                    смартфона до десктопа. Mobile-first подход и тщательное
                    тестирование.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Mobile-first подход
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Кроссбраузерная совместимость
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Быстрая загрузка
                    </li>
                  </ul>
                </div>

                {/* Card 3 - Fast Development */}
                <div className="border border-gray-300 p-8 ">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-gray-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">
                    Быстрая разработка
                  </h3>
                  <p className="mb-6 text-sm text-gray-600">
                    Используем современные технологии и проверенные методологии
                    для быстрого вывода вашего продукта на рынок без потери
                    качества.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Agile методология
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Современный стек технологий
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      Непрерывная интеграция
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-b border-gray-200 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { number: "10K+", label: "Пользователей" },
                  { number: "99.9%", label: "Аптайм" },
                  { number: "24/7", label: "Поддержка" },
                  { number: "50+", label: "Функций" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="border-b border-gray-200 px-10 py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Отзывы клиентов
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="border border-gray-300 p-8 transition hover:border-blue-600"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border border-gray-300 font-semibold">
                        JD
                      </div>
                      <div>
                        <div className="font-semibold">Иван Петров</div>
                        <div className="text-sm text-gray-600">
                          Чудо-юдо клиент
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600">
                      "Отличная работа! Команда профессионалов, которые
                      действительно понимают, что делают. Проект был сдан
                      вовремя и превзошел все ожидания."
                    </p>
                    <div className="text-yellow-500">{"★".repeat(5)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Form Elements */}
        <section className="border-b border-gray-200 px-10 py-24">
          <div className="mx-auto max-w-md">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Контактная форма
            </h2>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Почта</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 bg-white p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full border border-gray-300 bg-white p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                />
              </div>
              <button className="w-full border border-blue-600 py-3 text-sm text-blue-600 transition hover:bg-blue-600 hover:text-white">
                Отправить
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          7. Glassmorphism
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Он был особенно популярен в 2020-2022 годах, сейчас сохраняет
          умеренную популярность в дизайнерских кругах. Основные черты стиля -
          это полупрозрачность с размытием фона, создающая эффект матового
          стекла, градиентные фоновые подложки, тонкие полупрозрачные границы и
          насыщенные цветовые акценты (чаще всего фиолетовые или пурпурные).
          Стиль характеризуется большой скругленностью углов элементов,
          минималистичной типографикой с жирными шрифтами и общей легкостью
          визуального восприятия за счет прозрачностей и размытий.
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800 font-sans text-white">
        <div>
          {/* Header */}
          <header className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <span className="text-xl font-black">L</span>
                </div>
                <span className="text-2xl font-black">Logo</span>
              </div>

              {/* Navigation */}
              <nav className="hidden space-x-8 md:flex">
                {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="font-medium transition-colors hover:text-purple-300"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>

              {/* CTA Button */}
              <button className="rounded-xl border border-purple-400/30 bg-purple-600/20 px-6 py-2 font-semibold backdrop-blur-md transition-colors hover:bg-purple-600/30">
                Оставить заявку
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="container mx-auto px-6 py-28 text-center">
            <h1 className="mb-6 text-6xl font-black">
              Здесь будет наш
              <span className="block text-purple-400">заголовок</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-xl text-gray-300 backdrop-blur-md">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-2xl border border-purple-400/50 bg-purple-600/30 px-8 py-4 font-bold backdrop-blur-md transition-colors hover:bg-purple-600/40">
                Главная кнопка
              </button>
              <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-bold backdrop-blur-md transition-colors hover:bg-white/10">
                Вторая кнопка
              </button>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="container mx-auto px-6 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/50 hover:bg-white/15"
                >
                  {/* Discount Label */}
                  <div className="mb-4 inline-block rounded-full border border-purple-400/50 bg-purple-600/20 px-4 py-1 text-sm font-semibold backdrop-blur-md">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-4 text-2xl font-black">Услуга {item}</h3>
                  <p className="mb-6 text-gray-300">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black">₽99 999</span>
                      <span className="text-lg text-gray-400 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-green-400">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition-colors hover:bg-white/10"
                  >
                    Подробнее
                    <span>→</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="container mx-auto px-6 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl ">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  🎨
                </div>
                <h3 className="mb-4 text-2xl font-black">UI/UX Дизайн</h3>
                <p className="mb-6 text-gray-300">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  {[
                    "Исследование пользователей",
                    "Прототипирование и тестирование",
                    "Современные тенденции",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all 5">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  📱
                </div>
                <h3 className="mb-4 text-2xl font-black">Адаптивность</h3>
                <p className="mb-6 text-gray-300">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  {[
                    "Mobile-first подход",
                    "Кроссбраузерная совместимость",
                    "Быстрая загрузка",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl ">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  ⚡
                </div>
                <h3 className="mb-4 text-2xl font-black">Быстрая разработка</h3>
                <p className="mb-6 text-gray-300">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  {[
                    "Agile методология",
                    "Современный стек технологий",
                    "Непрерывная интеграция",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-6 py-20">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-black text-purple-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-6 py-16">
            <h2 className="mb-12 text-center text-4xl font-black">
              Отзывы клиентов
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/50 bg-purple-600/20 font-semibold backdrop-blur-md">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold">Иван Петров</div>
                      <div className="text-gray-400">Чудо-юдо клиент</div>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-300">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Form Elements */}
        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="mb-8 text-center text-3xl font-black">
              Контактная форма
            </h2>
            <form className="space-y-6">
              <div>
                <label className="mb-3 block font-medium">Почта</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-md transition-colors focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-3 block font-medium">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-md transition-colors focus:border-purple-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl border border-purple-400/50 bg-purple-600/30 px-8 py-4 font-bold backdrop-blur-md transition-colors hover:bg-purple-600/40"
              >
                Отправить
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-gray-100 font-sans text-gray-900">
        <div>
          {/* Header */}
          <header className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md shadow-lg">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-200 bg-purple-50">
                  <span className="text-xl font-black text-purple-600">L</span>
                </div>
                <span className="text-2xl font-black text-gray-900">Logo</span>
              </div>

              {/* Navigation */}
              <nav className="hidden space-x-8 md:flex">
                {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="font-medium text-gray-600 transition-colors hover:text-purple-600"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>

              {/* CTA Button */}
              <button className="rounded-xl border border-purple-300 bg-purple-500 px-6 py-2 font-semibold text-white backdrop-blur-md transition-colors hover:bg-purple-600 shadow-md">
                Оставить заявку
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="container mx-auto px-6 py-28 text-center">
            <h1 className="mb-6 text-6xl font-black text-gray-900">
              Здесь будет наш
              <span className="block text-purple-600">заголовок</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl rounded-2xl border border-gray-200 bg-white/80 p-6 text-xl text-gray-600 backdrop-blur-md shadow-lg">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-2xl border border-purple-300 bg-purple-500 px-8 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-purple-600 shadow-lg">
                Главная кнопка
              </button>
              <button className="rounded-2xl border border-gray-300 bg-white px-8 py-4 font-bold text-gray-700 backdrop-blur-md transition-colors hover:bg-gray-50 shadow-lg">
                Вторая кнопка
              </button>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="container mx-auto px-6 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-300 hover:shadow-xl"
                >
                  {/* Discount Label */}
                  <div className="mb-4 inline-block rounded-full border border-purple-300 bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700 backdrop-blur-md">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-4 text-2xl font-black text-gray-900">
                    Услуга {item}
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black text-gray-900">
                        ₽99 999
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-green-600">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-purple-300"
                  >
                    Подробнее
                    <span className="text-purple-600">→</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="container mx-auto px-6 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="group rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-xl ">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  🎨
                </div>
                <h3 className="mb-4 text-2xl font-black text-gray-900">
                  UI/UX Дизайн
                </h3>
                <p className="mb-6 text-gray-600">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  {[
                    "Исследование пользователей",
                    "Прототипирование и тестирование",
                    "Современные тенденции",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="group rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-xl ">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  📱
                </div>
                <h3 className="mb-4 text-2xl font-black text-gray-900">
                  Адаптивность
                </h3>
                <p className="mb-6 text-gray-600">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  {[
                    "Mobile-first подход",
                    "Кроссбраузерная совместимость",
                    "Быстрая загрузка",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="group rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-xl ">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  ⚡
                </div>
                <h3 className="mb-4 text-2xl font-black text-gray-900">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-gray-600">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  {[
                    "Agile методология",
                    "Современный стек технологий",
                    "Непрерывная интеграция",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-6 py-20">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-black text-purple-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-6 py-16">
            <h2 className="mb-12 text-center text-4xl font-black text-gray-900">
              Отзывы клиентов
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-xl shadow-lg"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-300 bg-purple-100 font-semibold text-purple-700 backdrop-blur-md">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Иван Петров
                      </div>
                      <div className="text-gray-500">Чудо-юдо клиент</div>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-600">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-500">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Form Elements */}
        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-xl shadow-xl">
            <h2 className="mb-8 text-center text-3xl font-black text-gray-900">
              Контактная форма
            </h2>
            <form className="space-y-6">
              <div>
                <label className="mb-3 block font-medium text-gray-700">
                  Почта
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 backdrop-blur-md transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <div>
                <label className="mb-3 block font-medium text-gray-700">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 backdrop-blur-md transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl border border-purple-300 bg-purple-500 px-8 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-purple-600 shadow-lg"
              >
                Отправить
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="mx-auto w-200 rounded-lg bg-white p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          8. Dark and Light Modern Minimalism
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Он очень популярен в 2023-2024 годах, особенно в tech-индустрии и
          SaaS-продуктах. Основные черты: глубокий темный фон (neutral-950),
          контрастные фиолетовые акценты, минималистичные карточки с тонкими
          границами, умеренная скругленность углов, типографика с четкой
          иерархией и общий акцент на функциональность и читаемость. Стиль
          создает профессиональное и современное впечатление без излишней
          декоративности.
        </p>
      </div>
      <div className="bg-neutral-950 px-10 py-20 font-sans text-neutral-100">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                <span className="text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors hover:text-violet-400"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="rounded border border-violet-400 px-6 py-3 text-sm font-medium text-violet-400 transition hover:bg-violet-500 hover:text-white">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="mb-6 text-4xl font-bold tracking-tight">
              Здесь будет наш
              <span className="block text-violet-400">заголовок</span>
            </h1>
            <p className="mb-10 max-w-2xl text-neutral-400">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex gap-4">
              <button className="rounded border border-violet-400 px-8 py-4 text-sm font-medium text-violet-400 transition hover:bg-violet-500 hover:text-white">
                Главная кнопка
              </button>
              <button className="rounded border border-neutral-800 px-8 py-4 text-sm font-medium transition hover:border-violet-400 hover:text-violet-400">
                Вторая кнопка
              </button>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="mb-24">
            <h2 className="mb-6 text-4xl font-bold tracking-tight">
              Наши услуги
            </h2>
            <p className="mb-10 max-w-2xl text-neutral-400">
              Мы объединяем технологии и эстетику. Минимализм, код, точность.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-violet-500"
                >
                  {/* Discount Label */}
                  <div className="mb-4 text-xs text-red-400">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">Услуга {item}</h3>
                  <p className="mb-4 text-sm text-neutral-500">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="text-2xl font-bold">₽99 999</span>
                      <span className="text-lg text-neutral-500 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="text-sm text-green-400">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <button className="rounded border border-violet-400 px-4 py-2 text-sm font-medium text-violet-400 transition hover:bg-violet-500 hover:text-white">
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="mb-24">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-lg font-semibold">UI/UX Дизайн</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-lg font-semibold">Адаптивность</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-lg font-semibold">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-24">
            <h2 className="mb-8 text-4xl font-bold tracking-tight">
              Отзывы клиентов
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-violet-500"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 font-semibold">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold">Иван Петров</div>
                      <div className="text-sm text-neutral-400">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-400">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-400">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Form Elements */}
        <section className="mx-auto mb-24 max-w-6xl">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">
            Контактная форма
          </h2>
          <form className="mx-auto grid max-w-md gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded border border-neutral-800 bg-neutral-900 p-3 text-white focus:border-violet-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Сообщение
              </label>
              <textarea
                placeholder="Ваше сообщение..."
                rows={4}
                className="w-full rounded border border-neutral-800 bg-neutral-900 p-3 text-white focus:border-violet-500 focus:outline-none"
              />
            </div>
            <button className="rounded border border-violet-400 px-4 py-2 text-sm font-medium text-violet-400 transition hover:bg-violet-500 hover:text-white">
              Отправить
            </button>
          </form>
        </section>
      </div>

      <div className="bg-neutral-50 font-sans text-neutral-900">
        <div className="mx-auto max-w-6xl px-10 py-20">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-sm">
                <span className="text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold">Logo</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {["Главная", "Услуги", "Проекты", "Блог", "Контакты"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors hover:text-blue-600"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <button className="rounded border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Оставить заявку
            </button>
          </header>

          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="mb-6 text-4xl font-bold">
              Здесь будет наш
              <span className="block text-blue-600">заголовок</span>
            </h1>
            <p className="mb-10 max-w-2xl text-neutral-600">
              Здесь будет подзаголовок. Положение не имеет значения - слева,
              справа, по центру. Больше текста, меньше текста. Какие мы молодцы.
            </p>
            <div className="flex gap-4">
              <button className="rounded border border-blue-600 px-8 py-4 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
                Главная кнопка
              </button>
              <button className="rounded border border-neutral-300 px-8 py-4 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600">
                Вторая кнопка
              </button>
            </div>
          </section>

          {/* Cards with Pricing Comparison */}
          <section className="mb-24">
            <h2 className="mb-6 text-4xl font-bold">Наши услуги</h2>
            <p className="mb-10 max-w-2xl text-neutral-600">
              Мы соединяем эстетику и технологии, создавая цифровые продукты
              будущего.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  {/* Discount Label */}
                  <div className="mb-4 text-xs text-red-600">
                    Демпинг до 08.2026
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">Услуга {item}</h3>
                  <p className="mb-4 text-sm text-neutral-500">
                    Описание услуги. Можно сразу перейти на отдельную страницу с
                    подробным описанием услуги. Элементы могут располагаться как
                    угодно и где угодно.
                  </p>

                  {/* Price Comparison */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="text-2xl font-bold">₽99 999</span>
                      <span className="text-lg text-neutral-500 line-through">
                        ₽199 999
                      </span>
                    </div>
                    <div className="text-sm text-green-600">
                      Экономия ₽100 000
                    </div>
                  </div>

                  <button className="rounded border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="mb-24">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 - UI/UX */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-lg font-semibold">UI/UX Дизайн</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Создаем интуитивные интерфейсы, которые пользователи понимают
                  с первого взгляда. Прорабатываем каждый пиксель для идеального
                  пользовательского опыта.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Исследование пользователей
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Прототипирование и тестирование
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Современные тенденции
                  </li>
                </ul>
              </div>

              {/* Card 2 - Adaptiveness */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-lg font-semibold">Адаптивность</h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Ваш сайт будет идеально выглядеть на любом устройстве — от
                  смартфона до десктопа. Mobile-first подход и тщательное
                  тестирование.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Mobile-first подход
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Кроссбраузерная совместимость
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Быстрая загрузка
                  </li>
                </ul>
              </div>

              {/* Card 3 - Fast Development */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-lg font-semibold">
                  Быстрая разработка
                </h3>
                <p className="mb-6 text-sm text-neutral-500">
                  Используем современные технологии и проверенные методологии
                  для быстрого вывода вашего продукта на рынок без потери
                  качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Agile методология
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Современный стек технологий
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    Непрерывная интеграция
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "99.9%", label: "Аптайм" },
                { number: "24/7", label: "Поддержка" },
                { number: "50+", label: "Функций" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-24">
            <h2 className="mb-8 text-4xl font-bold">Отзывы клиентов</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-white font-semibold">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold">Иван Петров</div>
                      <div className="text-sm text-neutral-600">
                        Чудо-юдо клиент
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-600">
                    "Отличная работа! Команда профессионалов, которые
                    действительно понимают, что делают. Проект был сдан вовремя
                    и превзошел все ожидания."
                  </p>
                  <div className="text-yellow-500">{"★".repeat(5)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Form Elements */}
          <section className="mb-24">
            <h2 className="mb-8 text-4xl font-bold">Контактная форма</h2>
            <form className="mx-auto grid max-w-md gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Почта</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded border border-neutral-300 bg-white p-3 focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Сообщение
                </label>
                <textarea
                  placeholder="Ваше сообщение..."
                  rows={4}
                  className="w-full rounded border border-neutral-300 bg-white p-3 focus:border-blue-600 focus:outline-none"
                />
              </div>
              <button className="rounded border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
                Отправить
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>

      </main>
    </div>
  );
}
