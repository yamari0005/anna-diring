import React from 'react';
import { FadeIn } from './components/FadeIn';

function App() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            href="#contacts" 
            onClick={(e) => scrollToSection(e, 'contacts')}
            className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Контакты
          </a>
        </nav>
      </header>

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
            
            <FadeIn direction="up" delay={0.6}>
              <a 
                href="https://dikidi.net/1773633?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                Записаться на консультацию
              </a>
            </FadeIn>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section id="approach" className="py-12 md:py-16 px-6 bg-accent/30 relative" style={{ scrollMarginTop: '100px' }}>
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
        <section id="for-whom" className="py-12 md:py-16 px-6 relative bg-background" style={{ scrollMarginTop: '100px' }}>
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
        <section id="consultation" className="py-12 md:py-16 px-6 relative bg-accent/30" style={{ scrollMarginTop: '100px' }}>
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
                  href="https://dikidi.net/1773633?p=0.pi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                >
                  Записаться на консультацию
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PREPARE FOR CONSULTATION SECTION */}
        <section id="prepare" className="py-12 md:py-20 px-6 bg-background" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-center">Как подготовиться к консультации</h2>
            </FadeIn>

            {/* Что такое запрос */}
            <FadeIn direction="up" delay={0.1}>
              <div className="mt-10 mb-10 bg-accent/40 border border-border rounded-2xl p-8">
                <h3 className="text-xl md:text-2xl font-serif mb-4 text-foreground">Что такое «запрос»?</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Запрос — это ответ на вопрос: <span className="text-foreground font-normal">«Чего я хочу добиться в терапии? Что должно измениться в моей жизни?»</span>
                </p>
              </div>
            </FadeIn>

            {/* Хороший vs Плохой запрос */}
            <FadeIn direction="up" delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base font-medium text-primary uppercase tracking-widest">✓ Хороший запрос</span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      { label: 'Конкретный', ex: '«я хочу перестать просыпаться с тревогой»' },
                      { label: 'Измеримый', ex: '«я хочу плакать не чаще 2 раз в неделю»' },
                      { label: 'Реалистичный', ex: '«я хочу научиться говорить "нет"»' },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-sm uppercase tracking-wide text-foreground font-medium">{item.label}</span>
                        <span className="text-sm text-muted-foreground font-light italic">{item.ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base font-medium text-muted-foreground uppercase tracking-widest">✗ Плохой запрос</span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      { label: 'Слишком общий', ex: '«мне плохо, сделайте что-нибудь»' },
                      { label: 'Неизмеримый', ex: '«хочу быть счастливым»' },
                      { label: 'Ориентированный на других', ex: '«хочу, чтобы муж меня понял»' },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-sm uppercase tracking-wide text-foreground font-medium">{item.label}</span>
                        <span className="text-sm text-muted-foreground font-light italic">{item.ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Пошаговая инструкция */}
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-serif mb-8 text-center text-foreground">Пошаговая инструкция</h3>
            </FadeIn>

            <div className="flex flex-col gap-6 mb-12">
              {/* Шаг 1 */}
              <FadeIn direction="up" delay={0.22}>
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">1</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-serif text-foreground">Определите «зону боли»</h4>
                      <p className="text-sm text-muted-foreground mt-1 font-light">«Что прямо сейчас причиняет мне больше всего страданий?»</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-muted-foreground font-medium w-1/3">Сфера жизни</th>
                          <th className="text-left py-2 text-xs uppercase tracking-widest text-muted-foreground font-medium">Примеры боли</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Эмоции', 'Постоянная тревога, чувство вины, апатия, раздражительность'],
                          ['Отношения', 'Конфликты с партнёром, одиночество, страх близости'],
                          ['Работа', 'Выгорание, отсутствие смысла, страх ошибки'],
                          ['Тело', 'Усталость, бессонница, психосоматика'],
                          ['Самооценка', 'Чувство неудачника, самокритика, неуверенность'],
                        ].map(([sphere, pain]) => (
                          <tr key={sphere} className="border-b border-border/50 last:border-0">
                            <td className="py-2.5 pr-4 text-foreground font-medium align-top">{sphere}</td>
                            <td className="py-2.5 text-muted-foreground font-light">{pain}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeIn>

              {/* Шаг 2 */}
              <FadeIn direction="up" delay={0.24}>
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">2</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-serif text-foreground">Представьте «желаемое состояние»</h4>
                      <p className="text-sm text-muted-foreground mt-1 font-light">«Как я пойму, что стало легче? Что изменится?»</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-muted-foreground font-medium w-1/3">Если боль в…</th>
                          <th className="text-left py-2 text-xs uppercase tracking-widest text-muted-foreground font-medium">Как вы это заметите?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Тревоге', 'Перестану просыпаться с учащённым сердцебиением'],
                          ['Чувстве вины', 'Перестану извиняться без причины'],
                          ['Апатии', 'Появится желание что-то делать'],
                          ['Конфликтах', 'Научусь спокойно говорить о своих чувствах'],
                        ].map(([pain, sign]) => (
                          <tr key={pain} className="border-b border-border/50 last:border-0">
                            <td className="py-2.5 pr-4 text-foreground font-medium align-top">{pain}</td>
                            <td className="py-2.5 text-muted-foreground font-light">{sign}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeIn>

              {/* Шаг 3 */}
              <FadeIn direction="up" delay={0.26}>
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">3</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-serif text-foreground">Сформулируйте запрос по формуле</h4>
                    </div>
                  </div>
                  <div className="bg-accent/50 rounded-xl px-6 py-4 mb-4 text-center">
                    <p className="text-base md:text-lg font-serif text-foreground italic">
                      «Я хочу <span className="text-primary not-italic font-medium">[конкретное изменение]</span>, чтобы <span className="text-primary not-italic font-medium">[как это повлияет на мою жизнь]</span>»
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {[
                      '«Я хочу перестать винить себя за каждую ошибку, чтобы чувствовать себя спокойнее и увереннее»',
                      '«Я хочу научиться говорить «нет», чтобы перестать чувствовать себя использованной»',
                      '«Я хочу вернуть интерес к жизни, чтобы просыпаться с желанием что-то делать»',
                    ].map((ex) => (
                      <li key={ex} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                        <span className="text-primary mt-0.5 flex-shrink-0">—</span>
                        <span className="italic">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Шаг 4 */}
              <FadeIn direction="up" delay={0.28}>
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">4</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-serif text-foreground">Проверьте запрос на «прочность»</h4>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      'Запрос конкретный (не «стать счастливым», а «перестать просыпаться с тревогой»)',
                      'Запрос про меня, а не про других («хочу, чтобы муж…» — это не запрос)',
                      'Я могу измерить результат («я пойму, что стало лучше, когда…»)',
                      'Запрос реалистичный и достижимый',
                      'Запрос связан с тем, что я могу изменить в себе',
                    ].map((criterion, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary/40 mt-0.5"></span>
                        <span className="text-sm text-muted-foreground font-light">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Примеры хороших и плохих запросов */}
            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center text-foreground">Примеры запросов</h3>
              <div className="overflow-x-auto mb-12 rounded-2xl border border-border shadow-sm">
                <table className="w-full text-sm border-collapse bg-white">
                  <thead>
                    <tr className="border-b border-border bg-accent/30">
                      <th className="text-left px-5 py-3 text-xs uppercase tracking-widest text-muted-foreground font-medium w-1/2">❌ Плохой запрос</th>
                      <th className="text-left px-5 py-3 text-xs uppercase tracking-widest text-primary font-medium w-1/2">✅ Хороший запрос</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['«Хочу стать счастливой»', '«Хочу перестать просыпаться с чувством вины»'],
                      ['«Хочу, чтобы муж перестал кричать»', '«Хочу научиться спокойно реагировать на критику и говорить о своих чувствах»'],
                      ['«Хочу найти себя»', '«Хочу понять, что мне нравится делать, и найти время для этого»'],
                      ['«Мне плохо, помогите»', '«Я хочу уменьшить тревогу, которая мешает мне работать и общаться»'],
                      ['«Хочу избавиться от депрессии»', '«Хочу вернуть способность радоваться тому, что раньше приносило удовольствие»'],
                    ].map(([bad, good], i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="px-5 py-3 text-muted-foreground font-light align-top italic">{bad}</td>
                        <td className="px-5 py-3 text-foreground font-light align-top">{good}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  <div key={item.num} className="bg-white border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-foreground flex items-center justify-center text-sm font-medium">{item.num}</span>
                    <div>
                      <p className="text-base font-medium text-foreground mb-2">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
                      {item.ex && <p className="text-sm text-muted-foreground font-light leading-relaxed mt-2 italic">{item.ex}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn direction="up" delay={0.35}>
              <div className="flex justify-center">
                <a
                  href="#contacts"
                  onClick={(e) => scrollToSection(e, 'contacts')}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                >
                  Перейти к записи на консультацию
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-12 md:py-16 px-6 bg-secondary/10 relative overflow-hidden" style={{ scrollMarginTop: '100px' }}>
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
                className="inline-flex items-center justify-center bg-background text-foreground px-8 py-4 rounded-full text-base uppercase tracking-widest hover:bg-background/90 transition-colors duration-300"
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
                Написать в Telegram
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
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