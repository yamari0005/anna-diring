import React, { useState, useEffect } from 'react';
import { FadeIn } from './components/FadeIn';
import { InfoTable, ComparisonTable } from './components/ResponsiveTable';
import { PreparationAccordion } from './components/PreparationAccordion';

const NAV_LINKS = [
  { id: 'approach', label: 'Подход' },
  { id: 'for-whom', label: 'Для кого' },
  { id: 'about', label: 'Обо мне' },
  { id: 'consultation', label: 'Консультация' },
  { id: 'preparation', label: 'Как подготовиться' },
  { id: 'contacts', label: 'Контакты' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col font-sans">
      {/* HEADER */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-transparent transition-all duration-300">
        <div>
          <div className="font-serif text-xl md:text-2xl tracking-wide font-medium">Анна Диринг</div>
          <div className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">клинический психолог</div>
        </div>
        <nav className="flex items-center gap-5 md:gap-8">
          <a
            href="#approach"
            onClick={(e) => scrollToSection(e, 'approach')}
            className="hidden sm:inline text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Подход
          </a>
          <a
            href="#for-whom"
            onClick={(e) => scrollToSection(e, 'for-whom')}
            className="hidden sm:inline text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Для кого
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="hidden sm:inline text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Обо мне
          </a>
          <a
            href="#consultation"
            onClick={(e) => scrollToSection(e, 'consultation')}
            className="hidden sm:inline text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Консультация
          </a>
          <a
            href="#preparation"
            onClick={(e) => scrollToSection(e, 'preparation')}
            className="hidden sm:inline text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Как подготовиться
          </a>
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, 'booking')}
            className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Записаться
          </a>
          <a
            href="#contacts"
            onClick={(e) => scrollToSection(e, 'contacts')}
            className="hidden sm:inline text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Контакты
          </a>

          {/* Mobile: hamburger toggle, always to the left of "Записаться" */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="sm:hidden order-first -mr-1 relative w-8 h-8 flex items-center justify-center text-foreground"
          >
            <span
              className={`absolute w-5 h-[1.5px] bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-[6px]'
              }`}
            />
            <span
              className={`absolute w-5 h-[1.5px] bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute w-5 h-[1.5px] bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-[6px]'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`sm:hidden fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`sm:hidden fixed top-0 left-0 right-0 z-[60] pt-24 px-6 pb-6 bg-background border-b border-border shadow-lg transition-all duration-300 ease-out origin-top ${
          isMenuOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col divide-y divide-border">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="py-4 text-base tracking-wide text-foreground/90 hover:text-foreground active:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <main className="flex-grow flex flex-col">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden">
          {/* Background image / texture */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="/images/hero-light.jpg" 
              alt="" 
              className="w-full h-full object-cover object-center mix-blend-multiply"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
                Терапия для тех, кто устал<br className="hidden md:block"/> быть сильным
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Психологическая поддержка для людей с перегрузками. Помогаю найти опору и принять решения, не копаясь бесконечно в прошлом.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6} className="w-full sm:w-auto">
              <a 
                href="#booking"
                onClick={(e) => scrollToSection(e, 'booking')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                Записаться на консультацию
              </a>
            </FadeIn>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section id="approach" className="py-10 md:py-14 px-6 bg-accent/30 relative" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[50vh] rounded-2xl overflow-hidden shadow-xl shadow-muted/50">
              <img 
                src="/images/nature-calm.jpg" 
                alt="Спокойная природа" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">
                  Работа с состоянием<br/>«Здесь и сейчас»
                </h2>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Мой подход — это не бесконечный анализ детства. Мы работаем с тем, что болит сегодня: с выгоранием, страхом ошибок, комом в горле и необходимостью принимать решения. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mt-4">
                  Я создаю пространство, где можно быть живым, а не «удобным».
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FOR WHOM SECTION */}
        <section id="for-whom" className="py-10 md:py-14 px-6 relative bg-background" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-serif mb-10 text-center">Вам это нужно, если...</h2>
            </FadeIn>
            
            <div className="flex flex-col gap-6">
              {[
                "Если вы привыкли всё тянуть на себя",
                "Если нужно принять сложное решение, но страшно",
                "Если вы чувствуете выгорание и потерю вкуса к жизни",
                "Если вы боитесь показаться слабым или несовершенным",
                "Если вам трудно просить о помощи",
                "Если вы постоянно сомневаетесь в своих решениях",
                "Если вы чувствуете, что живёте не свою жизнь"
              ].map((item, index) => (
                <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
                  <div className="bg-white border border-border p-8 rounded-2xl flex items-start gap-6 hover:border-primary/50 transition-colors duration-500 group shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 group-hover:bg-primary transition-colors duration-500 flex-shrink-0"></div>
                    <p className="text-xl md:text-2xl font-light text-foreground/90">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* HOW A SESSION WORKS SECTION */}
        <section id="consultation" className="py-10 md:py-14 px-6 relative bg-accent/30" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-center">Как проходит консультация</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed font-light text-center max-w-2xl mx-auto mb-10">
                Все консультации проходят онлайн в удобном для вас формате (видеозвонок в мессенджере). Длительность зависит от выбранной услуги:
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Консультация клинического психолога", duration: "60 минут" },
                { title: "Диагностика семейных отношений", duration: "60 минут" },
                { title: "Профориентация подростка", duration: "60 минут" },
                { title: "Работа с метафорическими картами (МАК)", duration: "60 минут" },
                { title: "Персональная медитация", duration: "25 минут" },
              ].map((item, index) => (
                <FadeIn key={index} direction="up" delay={0.1 + index * 0.05}>
                  <div className="bg-white border border-border p-6 rounded-2xl flex items-start justify-between gap-4 h-full shadow-sm">
                    <p className="text-base md:text-lg text-foreground/90 font-light">{item.title}</p>
                    <span className="text-sm uppercase tracking-widest text-primary whitespace-nowrap flex-shrink-0 mt-1">{item.duration}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed font-light text-center mb-8">
                Точное время и формат мы обсудим при записи.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex justify-center">
                <a 
                  href="#booking"
                  onClick={(e) => scrollToSection(e, 'booking')}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                >
                  Записаться на консультацию
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PREPARE FOR CONSULTATION SECTION */}
        <section id="preparation" className="py-10 md:py-14 px-6 bg-background" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-center">Как подготовиться к консультации</h2>
            </FadeIn>

            {/* Что такое запрос */}
            <FadeIn direction="up" delay={0.1}>
              <div className="mt-10 mb-10 bg-accent/50 border border-border rounded-2xl p-8 shadow-sm flex items-start gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0 mt-0.5">💡</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-3 text-foreground">Что такое «запрос»?</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Запрос — это ответ на вопрос: <span className="text-foreground font-normal">«Чего я хочу добиться в терапии? Что должно измениться в моей жизни?»</span>
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Хороший vs Плохой запрос */}
            <FadeIn direction="up" delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-[hsl(104,30%,96%)] border border-[hsl(104,25%,82%)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">✅</span>
                    <span className="text-base font-medium text-[hsl(104,28%,32%)] uppercase tracking-widest">Хороший запрос</span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      { label: 'Конкретный', ex: '«я хочу перестать просыпаться с тревогой»' },
                      { label: 'Измеримый', ex: '«я хочу плакать не чаще 2 раз в неделю»' },
                      { label: 'Реалистичный', ex: '«я хочу научиться говорить "нет"»' },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-sm uppercase tracking-wide text-[hsl(104,28%,28%)] font-medium">{item.label}</span>
                        <span className="text-sm text-[hsl(104,15%,38%)] font-light italic">{item.ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[hsl(10,45%,96%)] border border-[hsl(10,40%,85%)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">❌</span>
                    <span className="text-base font-medium text-[hsl(10,40%,45%)] uppercase tracking-widest">Плохой запрос</span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      { label: 'Слишком общий', ex: '«мне плохо, сделайте что-нибудь»' },
                      { label: 'Неизмеримый', ex: '«хочу быть счастливым»' },
                      { label: 'Ориентированный на других', ex: '«хочу, чтобы муж меня понял»' },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-sm uppercase tracking-wide text-[hsl(10,40%,38%)] font-medium">{item.label}</span>
                        <span className="text-sm text-[hsl(10,25%,45%)] font-light italic">{item.ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Пошаговая инструкция — интерактивный аккордеон */}
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-serif mb-3 text-center text-foreground">Пошаговая инструкция</h3>
              <p className="text-sm text-muted-foreground font-light text-center mb-8 max-w-xl mx-auto">
                Заполните каждый шаг своими ответами — они сохранятся в этом браузере, и вы сможете вернуться к ним позже.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.22}>
              <div className="mb-12">
                <PreparationAccordion />
              </div>
            </FadeIn>

            {/* Примеры хороших и плохих запросов */}
            <FadeIn direction="up" delay={0.3}>
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-serif mb-4 text-center text-foreground">Примеры хороших и плохих запросов</h3>
                <div className="flex justify-center mb-2">
                  <button
                    type="button"
                    onClick={() => setShowExamples((v) => !v)}
                    aria-expanded={showExamples}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-white text-sm md:text-base uppercase tracking-widest text-foreground shadow-sm hover:shadow-md hover:bg-accent/40 transition-all duration-300"
                  >
                    {showExamples ? 'Скрыть' : 'Показать примеры'}
                    <span className={`transition-transform duration-300 ${showExamples ? 'rotate-180' : ''}`}>
                      {showExamples ? '▲' : '▼'}
                    </span>
                  </button>
                </div>
                {showExamples && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="pt-6">
                      <ComparisonTable
                        badHeader="❌ Плохой запрос"
                        goodHeader="✅ Хороший запрос"
                        rows={[
                          ['«Хочу стать счастливой»', '«Хочу перестать просыпаться с чувством вины»'],
                          ['«Хочу, чтобы муж перестал кричать»', '«Хочу научиться спокойно реагировать на критику и говорить о своих чувствах»'],
                          ['«Хочу найти себя»', '«Хочу понять, что мне нравится делать, и найти время для этого»'],
                          ['«Мне плохо, помогите»', '«Я хочу уменьшить тревогу, которая мешает мне работать и общаться»'],
                          ['«Хочу избавиться от депрессии»', '«Хочу вернуть способность радоваться тому, что раньше приносило удовольствие»'],
                        ]}
                      />
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Что делать, если не получается */}
            <FadeIn direction="up" delay={0.32}>
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center text-foreground">Что делать, если не получается сформулировать запрос?</h3>
              <div className="flex flex-col gap-4 mb-12">
                {[
                  {
                    num: '1',
                    title: 'Начните с самого простого',
                    text: '«Я не знаю, чего хочу, но знаю, что чувствую [назвать чувство]. Я хочу, чтобы это чувство стало слабее».',
                    ex: 'Например: «Я чувствую постоянную усталость и пустоту. Я хочу, чтобы у меня появились силы и желание что-то делать».',
                  },
                  {
                    num: '2',
                    title: 'Используйте технику «Пустой стул»',
                    text: 'Представьте, что напротив вас сидит ваша лучшая подруга. Она пришла к вам и говорит то же самое, что вы чувствуете. Что бы вы ей посоветовали? О чём бы она попросила психолога?',
                    ex: '',
                  },
                  {
                    num: '3',
                    title: 'Спросите у психолога',
                    text: 'На первой сессии психолог поможет сформулировать запрос. Это нормально — не знать ответа сразу. Вы можете сказать:',
                    ex: '«Я пока не могу чётко сформулировать, чего хочу. Я просто знаю, что так больше не могу. Помогите мне разобраться».',
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-base font-serif shadow-sm">{item.num}</span>
                    <div>
                      <p className="text-base font-medium text-foreground mb-2">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
                      {item.ex && <p className="text-sm text-muted-foreground font-light leading-relaxed mt-2 italic">{item.ex}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Зачем нужен хороший запрос */}
            <FadeIn direction="up" delay={0.33}>
              <div className="bg-accent/40 border border-border/60 rounded-2xl px-6 md:px-10 py-8 mb-12 text-center">
                <p className="text-lg md:text-xl font-serif font-bold text-foreground mb-4 leading-snug italic">
                  Хороший запрос — это не обязанность, а инструмент.
                </p>
                <p className="text-sm text-muted-foreground font-light mb-4 leading-snug">Он помогает:</p>
                <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
                  {[
                    { who: 'Психологу', what: 'понять, куда двигаться' },
                    { who: 'Вам', what: 'видеть прогресс' },
                    { who: 'Терапии', what: 'быть эффективной' },
                  ].map((item) => (
                    <div key={item.who} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-sm text-muted-foreground font-light leading-snug">
                        <span className="text-foreground font-medium">{item.who}</span> — {item.what}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn direction="up" delay={0.35}>
              <div className="flex justify-center">
                <a
                  href="#booking"
                  onClick={(e) => scrollToSection(e, 'booking')}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  Перейти к записи на консультацию
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-10 md:py-14 px-6 bg-secondary/10 relative overflow-hidden" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-12 items-center">
            <FadeIn direction="up" className="mx-auto md:mx-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg shadow-muted/50 border border-border">
                <img 
                  src="/images/anna-portrait-bw.jpg" 
                  alt="Анна Диринг" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <span className="block text-sm uppercase tracking-widest text-primary font-medium mb-6 text-center md:text-left">Обо мне</span>
              <p className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed italic text-center md:text-left">
                «Я Анна Диринг. Верю, что успех клиента — это главный допинг психолога. Моя цель — чтобы вы стали настолько устойчивыми, что я больше не понадобилась.»
              </p>
            </FadeIn>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section id="booking" className="py-10 md:py-14 px-6 bg-accent/30" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-center">Запись на консультацию</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed text-center max-w-2xl mx-auto mb-10">
                Пожалуйста, заполните короткую анкету ниже. Это поможет мне лучше понять вашу ситуацию до нашей встречи. После отправки формы вы сможете выбрать удобное время.
              </p>
            </FadeIn>

            {/* Шаг 1: Анкета */}
            <FadeIn direction="up" delay={0.15}>
              <div className="mb-14">
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-serif shadow-sm">1</span>
                  <h3 className="text-xl md:text-2xl font-serif text-foreground">Заполните анкету</h3>
                </div>
                <div className="rounded-2xl border border-border shadow-lg shadow-muted/40 overflow-hidden bg-white">
                  <iframe
                    src="https://forms.yandex.ru/u/67b338f302848f01bc274c59/"
                    title="Анкета для консультации"
                    className="w-full block"
                    style={{
                      width: '100%',
                      height: '600px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden',
                    }}
                    frameBorder="0"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Шаг 2: Выбор времени */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm text-center flex flex-col items-center gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-serif shadow-sm mb-1">2</span>
                <h3 className="text-xl md:text-2xl font-serif text-foreground">Шаг 2: Выберите время</h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md">
                  После заполнения формы нажмите кнопку ниже, чтобы перейти в календарь и выбрать свободный слот.
                </p>
                <a
                  href="https://dikidi.net/1773633?p=0.pi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 shadow-sm mt-2"
                >
                  Выбрать время консультации →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACTS */}
      <footer id="contacts" className="bg-foreground text-background py-12 md:py-16 px-6" style={{ scrollMarginTop: '100px' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Начать работу</h2>
              <p className="text-background/70 text-lg max-w-sm font-light mb-10">
                Запишитесь на первую консультацию, чтобы обсудить ваш запрос и понять, насколько вам комфортно работать со мной.
              </p>
            </FadeIn>
          </div>
          
          <div className="flex flex-col items-start md:items-end justify-center gap-8">
            <FadeIn direction="up" delay={0.1} className="w-full md:w-auto">
              <p className="text-background/70 text-lg md:text-xl uppercase tracking-widest mb-4">
                Запись на консультацию и расписание:
              </p>
              <a 
                href="https://dikidi.net/1773633?p=0.pi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-background text-foreground px-8 py-4 rounded-full text-base uppercase tracking-widest hover:bg-background/90 transition-colors duration-300"
              >
                Открыть расписание на Dikidi
              </a>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="w-full md:w-auto pt-4 border-t border-background/10 md:text-right">
              <a href="mailto:Annadiring@yandex.ru" className="block text-xl md:text-2xl font-light hover:text-primary transition-colors duration-300">
                Annadiring@yandex.ru
              </a>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3} className="w-full md:w-auto pt-4 border-t border-background/10 md:text-right">
              <a 
                href="https://t.me/Annadiring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg font-medium tracking-wide uppercase hover:text-primary transition-colors duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="120" cy="120" r="120" fill="#229ED9" />
                  <path
                    d="M50 118l124-48c6-2 11 1 9 10l-21 100c-2 8-7 10-14 6l-38-28-18 17c-2 2-4 4-8 4l3-40 73-66c3-3-1-5-5-2l-90 57-39-12c-8-3-8-8 2-11z"
                    fill="white"
                  />
                </svg>
                Мой канал в Telegram
              </a>
            </FadeIn>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-background/10 text-sm text-background/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Анна Диринг. Все права защищены.</p>
          <p>Психологическое консультирование</p>
        </div>
      </footer>
    </div>
  );
}

export default App;