import React, { useEffect, useRef, useState } from 'react';
import { InfoTable } from './ResponsiveTable';

const STORAGE_KEY = 'anna-diring-prep-checklist-v1';

interface Answers {
  step1: string;
  step2: string;
  step3: string;
  step4Criteria: boolean[];
  step4Final: string;
}

const DEFAULT_ANSWERS: Answers = {
  step1: '',
  step2: '',
  step3: '',
  step4Criteria: [false, false, false, false, false],
  step4Final: '',
};

const CRITERIA = [
  'Запрос конкретный (не «стать счастливым», а «перестать просыпаться с тревогой»)',
  'Запрос про меня, а не про других («хочу, чтобы муж…» — это не запрос)',
  'Я могу измерить результат («я пойму, что стало лучше, когда…»)',
  'Запрос реалистичный и достижимый',
  'Запрос связан с тем, что я могу изменить в себе',
];

function loadAnswers(): Answers {
  if (typeof window === 'undefined') return DEFAULT_ANSWERS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ANSWERS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_ANSWERS,
      ...parsed,
      step4Criteria:
        Array.isArray(parsed.step4Criteria) && parsed.step4Criteria.length === CRITERIA.length
          ? parsed.step4Criteria
          : DEFAULT_ANSWERS.step4Criteria,
    };
  } catch {
    return DEFAULT_ANSWERS;
  }
}

function isStepComplete(step: 1 | 2 | 3 | 4, answers: Answers): boolean {
  if (step === 1) return answers.step1.trim().length > 0;
  if (step === 2) return answers.step2.trim().length > 0;
  if (step === 3) return answers.step3.trim().length > 0;
  return answers.step4Criteria.every(Boolean);
}

interface AccordionStepProps {
  stepNumber: 1 | 2 | 3 | 4;
  title: string;
  question: string;
  isOpen: boolean;
  isComplete: boolean;
  onToggle: () => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  children: React.ReactNode;
}

function AccordionStep({
  stepNumber,
  title,
  question,
  isOpen,
  isComplete,
  onToggle,
  onNext,
  onBack,
  isFirst,
  isLast,
  children,
}: AccordionStepProps) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 shadow-sm overflow-hidden ${
        isOpen
          ? 'border-[hsl(104,25%,78%)] bg-[#f0fdf4]'
          : 'border-border bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
      >
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-serif shadow-sm transition-colors duration-300 ${
            isComplete
              ? 'bg-[hsl(104,35%,40%)] text-white'
              : isOpen
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground'
          }`}
        >
          {isComplete ? '✓' : stepNumber}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-0.5">
            Шаг {stepNumber}
          </p>
          <h4 className="text-lg md:text-xl font-serif text-foreground">{title}</h4>
        </div>
        <span
          className={`flex-shrink-0 text-xl text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-6 pt-0">
            <p className="text-sm md:text-base text-muted-foreground font-light italic mb-5">{question}</p>
            {children}

            <div className="flex items-center justify-between gap-3 mt-6 flex-wrap">
              <button
                type="button"
                onClick={onBack}
                disabled={isFirst}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground disabled:opacity-0 disabled:pointer-events-none transition-colors duration-200 py-2 px-1"
              >
                ← Назад
              </button>

              {isLast ? (
                <a
                  href="#booking"
                  onClick={(e) => {
                    const target = document.getElementById('booking');
                    if (target) {
                      e.preventDefault();
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm text-center w-full sm:w-auto"
                >
                  Перейти к записи на консультацию
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-foreground/85 transition-all duration-300 shadow-sm w-full sm:w-auto"
                >
                  Далее →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SavedIndicator({ show }: { show: boolean }) {
  return (
    <div
      className={`text-xs text-[hsl(104,28%,32%)] font-medium tracking-wide mt-2 transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      aria-live="polite"
    >
      ✓ Ваши ответы сохранены
    </div>
  );
}

const textareaClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground font-light placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-colors duration-200 resize-none';

export function PreparationAccordion() {
  const [answers, setAnswers] = useState<Answers>(DEFAULT_ANSWERS);
  const [openStep, setOpenStep] = useState<1 | 2 | 3 | 4>(1);
  const [showSaved, setShowSaved] = useState(false);
  const savedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    setAnswers(loadAnswers());
    hasLoaded.current = true;
  }, []);

  useEffect(() => {
    if (!hasLoaded.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    setShowSaved(true);
    if (savedTimeout.current) clearTimeout(savedTimeout.current);
    savedTimeout.current = setTimeout(() => setShowSaved(false), 2000);
    return () => {
      if (savedTimeout.current) clearTimeout(savedTimeout.current);
    };
  }, [answers]);

  const completedCount = [1, 2, 3, 4].filter((s) =>
    isStepComplete(s as 1 | 2 | 3 | 4, answers)
  ).length;

  const goTo = (step: 1 | 2 | 3 | 4) => setOpenStep(step);

  const toggleCriterion = (index: number) => {
    setAnswers((prev) => {
      const next = [...prev.step4Criteria];
      next[index] = !next[index];
      return { ...prev, step4Criteria: next };
    });
  };

  return (
    <div>
      {/* PROGRESS INDICATOR */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Шаг {openStep} из 4
          </span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Заполнено: {completedCount} / 4
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-accent/60 overflow-hidden mb-3">
          <div
            className="h-full bg-[hsl(104,35%,45%)] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(openStep / 4) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          {[1, 2, 3, 4].map((s) => {
            const step = s as 1 | 2 | 3 | 4;
            const complete = isStepComplete(step, answers);
            return (
              <button
                key={step}
                type="button"
                onClick={() => goTo(step)}
                aria-label={`Перейти к шагу ${step}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  step === openStep
                    ? 'bg-primary scale-125'
                    : complete
                    ? 'bg-[hsl(104,35%,55%)]'
                    : 'bg-border'
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <AccordionStep
          stepNumber={1}
          title="Определите «зону боли»"
          question="«Что прямо сейчас причиняет мне больше всего страданий?»"
          isOpen={openStep === 1}
          isComplete={isStepComplete(1, answers)}
          onToggle={() => setOpenStep(openStep === 1 ? 1 : 1)}
          onNext={() => goTo(2)}
          onBack={() => goTo(1)}
          isFirst
          isLast={false}
        >
          <div className="mb-5">
            <InfoTable
              leftHeader="Сфера жизни"
              rightHeader="Примеры боли"
              rows={[
                ['Эмоции', 'Постоянная тревога, чувство вины, апатия, раздражительность'],
                ['Отношения', 'Конфликты с партнёром, одиночество, страх близости'],
                ['Работа', 'Выгорание, отсутствие смысла, страх ошибки'],
                ['Тело', 'Усталость, бессонница, психосоматика'],
                ['Самооценка', 'Чувство неудачника, самокритика, неуверенность'],
              ]}
            />
          </div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
            Запишите одну главную «зону боли»
          </label>
          <textarea
            className={textareaClass}
            rows={3}
            value={answers.step1}
            onChange={(e) => setAnswers((prev) => ({ ...prev, step1: e.target.value }))}
            placeholder="Например: постоянная тревога и бессонница из-за работы…"
          />
          <SavedIndicator show={showSaved && openStep === 1} />
        </AccordionStep>

        <AccordionStep
          stepNumber={2}
          title="Представьте «желаемое состояние»"
          question="«Как я пойму, что стало легче? Что изменится?»"
          isOpen={openStep === 2}
          isComplete={isStepComplete(2, answers)}
          onToggle={() => setOpenStep(openStep === 2 ? 2 : 2)}
          onNext={() => goTo(3)}
          onBack={() => goTo(1)}
          isFirst={false}
          isLast={false}
        >
          <div className="mb-5">
            <InfoTable
              leftHeader="Если боль в…"
              rightHeader="Как вы это заметите?"
              rows={[
                ['Тревоге', 'Перестану просыпаться с учащённым сердцебиением'],
                ['Чувстве вины', 'Перестану извиняться без причины'],
                ['Апатии', 'Появится желание что-то делать'],
                ['Конфликтах', 'Научусь спокойно говорить о своих чувствах'],
              ]}
            />
          </div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
            Запишите, как вы поймёте, что стало лучше
          </label>
          <textarea
            className={textareaClass}
            rows={3}
            value={answers.step2}
            onChange={(e) => setAnswers((prev) => ({ ...prev, step2: e.target.value }))}
            placeholder="Например: перестану просыпаться среди ночи и буду спокойнее реагировать на критику…"
          />
          <SavedIndicator show={showSaved && openStep === 2} />
        </AccordionStep>

        <AccordionStep
          stepNumber={3}
          title="Сформулируйте запрос по формуле"
          question="Формула хорошего запроса поможет собрать всё, что вы написали выше, в одну фразу."
          isOpen={openStep === 3}
          isComplete={isStepComplete(3, answers)}
          onToggle={() => setOpenStep(openStep === 3 ? 3 : 3)}
          onNext={() => goTo(4)}
          onBack={() => goTo(2)}
          isFirst={false}
          isLast={false}
        >
          <div className="bg-accent/50 border border-border/60 rounded-xl px-6 py-4 mb-4 text-center">
            <p className="text-base md:text-lg font-serif text-foreground italic">
              «Я хочу <span className="text-primary not-italic font-medium">[конкретное изменение]</span>, чтобы{' '}
              <span className="text-primary not-italic font-medium">[как это повлияет на мою жизнь]</span>»
            </p>
          </div>
          <ul className="flex flex-col gap-2 mb-5">
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
          <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
            Запишите свой запрос
          </label>
          <textarea
            className={textareaClass}
            rows={3}
            value={answers.step3}
            onChange={(e) => setAnswers((prev) => ({ ...prev, step3: e.target.value }))}
            placeholder="«Я хочу…, чтобы…»"
          />
          <SavedIndicator show={showSaved && openStep === 3} />
        </AccordionStep>

        <AccordionStep
          stepNumber={4}
          title="Проверьте запрос на «прочность»"
          question="Пройдите по чек-листу и отметьте, что уже выполняется."
          isOpen={openStep === 4}
          isComplete={isStepComplete(4, answers)}
          onToggle={() => setOpenStep(openStep === 4 ? 4 : 4)}
          onNext={() => goTo(4)}
          onBack={() => goTo(3)}
          isFirst={false}
          isLast
        >
          <ul className="flex flex-col gap-3 mb-5">
            {CRITERIA.map((criterion, i) => (
              <li key={i}>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={answers.step4Criteria[i]}
                    onChange={() => toggleCriterion(i)}
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border border-[hsl(104,25%,75%)] accent-[hsl(104,35%,40%)] cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground font-light">{criterion}</span>
                </label>
              </li>
            ))}
          </ul>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
            Финальная формулировка запроса (можно скопировать из шага 3 и уточнить)
          </label>
          <textarea
            className={textareaClass}
            rows={3}
            value={answers.step4Final}
            onChange={(e) => setAnswers((prev) => ({ ...prev, step4Final: e.target.value }))}
            placeholder="«Я хочу…, чтобы…»"
          />
          <SavedIndicator show={showSaved && openStep === 4} />
        </AccordionStep>
      </div>
    </div>
  );
}
