const STORAGE_KEY = 'anna-diring-prep-checklist-v1';

interface Answers {
  step1: string;
  step2: string;
  step3: string;
  step4Criteria: boolean[];
  step4Final: string;
}

const CRITERIA = [
  'Запрос конкретный (не «стать счастливым», а «перестать просыпаться с тревогой»)',
  'Запрос про меня, а не про других («хочу, чтобы муж…» — это не запрос)',
  'Я могу измерить результат («я пойму, что стало лучше, когда…»)',
  'Запрос реалистичный и достижимый',
  'Запрос связан с тем, что я могу изменить в себе',
];

function loadAnswers(): Answers {
  const defaults: Answers = {
    step1: '',
    step2: '',
    step3: '',
    step4Criteria: [false, false, false, false, false],
    step4Final: '',
  };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    return {
      ...defaults,
      ...parsed,
      step4Criteria:
        Array.isArray(parsed.step4Criteria) && parsed.step4Criteria.length === CRITERIA.length
          ? parsed.step4Criteria
          : defaults.step4Criteria,
    };
  } catch {
    return defaults;
  }
}

/** Escape HTML special characters so user text renders safely in the PDF window. */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

/** Render a user answer: filled text if present, blank underline if empty. */
function answerHtml(value: string, label: string): string {
  const v = value.trim();
  if (v) {
    return `<div class="fill-answer"><span class="fill-label">${label}</span><span class="fill-value">${esc(v)}</span></div>`;
  }
  return `<div class="fill-line"><span class="fill-label">${label}</span><span class="fill-blank">&nbsp;</span></div>`;
}

export function downloadChecklist() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'download_checklist');
}
  const answers = loadAnswers();
  const printWindow = window.open('', '_blank', 'width=820,height=1000');
  if (!printWindow) return;

  const criteriaHtml = CRITERIA.map((text, i) => {
    const checked = answers.step4Criteria[i];
    const checkmark = checked
      ? '<div class="checkbox checked">✓</div>'
      : '<div class="checkbox"></div>';
    const textClass = checked ? 'criteria-text checked-text' : 'criteria-text';
    return `<div class="criteria-item">${checkmark}<div class="${textClass}">${esc(text)}</div></div>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Чек-лист: Как подготовиться к консультации — Анна Диринг</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Georgia, 'Times New Roman', serif;
      max-width: 680px;
      margin: 48px auto;
      padding: 0 24px;
      color: #1a1a1a;
      line-height: 1.65;
      background: #fff;
    }
    .header { text-align: center; margin-bottom: 36px; border-bottom: 1px solid #ddd; padding-bottom: 24px; }
    .header h1 { font-size: 22px; margin-bottom: 6px; }
    .header p { color: #666; font-size: 13px; font-family: Arial, sans-serif; }

    .step { margin-bottom: 24px; border: 1px solid #d4ddd4; border-radius: 10px; padding: 20px 22px; page-break-inside: avoid; }
    .step-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
    .step-num {
      display: inline-flex; align-items: center; justify-content: center;
      width: 30px; height: 30px; border-radius: 50%;
      background: #5c7c5c; color: #fff;
      font-size: 14px; font-family: Arial, sans-serif; font-weight: 600;
      flex-shrink: 0;
    }
    .step-title { font-size: 17px; font-weight: bold; }
    .step-question { color: #555; font-style: italic; font-size: 13px; margin-bottom: 12px; }
    ul { padding-left: 20px; margin-bottom: 12px; }
    li { font-size: 13px; margin-bottom: 5px; font-family: Arial, sans-serif; color: #333; }

    .formula {
      background: #f4f7f4; border-left: 3px solid #5c7c5c;
      border-radius: 4px; padding: 12px 16px;
      font-style: italic; font-size: 15px; margin-bottom: 12px; color: #2a2a2a;
    }

    /* Blank underline (no answer entered) */
    .fill-line {
      margin-top: 10px; font-family: Arial, sans-serif; font-size: 13px; color: #444;
      display: flex; align-items: baseline; gap: 6px;
    }
    .fill-label { white-space: nowrap; flex-shrink: 0; }
    .fill-blank {
      display: inline-block; border-bottom: 1px solid #aaa;
      flex: 1; min-width: 120px;
    }

    /* Filled answer */
    .fill-answer {
      margin-top: 10px; padding: 10px 12px;
      background: #f0fdf4; border: 1px solid #bbdcc0; border-radius: 6px;
      font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a;
    }
    .fill-answer .fill-label {
      display: block; font-size: 11px; text-transform: uppercase;
      letter-spacing: 0.06em; color: #5c7c5c; font-weight: 600; margin-bottom: 4px;
    }
    .fill-value { font-size: 14px; color: #1a1a1a; line-height: 1.5; }

    /* Criteria */
    .criteria-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
    .checkbox {
      width: 17px; height: 17px; border: 1.5px solid #aaa;
      border-radius: 3px; flex-shrink: 0; margin-top: 1px;
      font-size: 12px; display: flex; align-items: center; justify-content: center;
      font-family: Arial, sans-serif; color: #5c7c5c;
    }
    .checkbox.checked { background: #5c7c5c; border-color: #5c7c5c; color: #fff; }
    .criteria-text { font-size: 13px; font-family: Arial, sans-serif; color: #333; line-height: 1.5; }
    .checked-text { color: #1a1a1a; font-weight: 500; }

    .note { background: #fffbf0; border: 1px solid #e5d8a0; border-radius: 8px; padding: 14px 18px; margin-top: 24px; font-family: Arial, sans-serif; font-size: 13px; color: #555; line-height: 1.6; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 12px; color: #888; font-family: Arial, sans-serif; text-align: center; }

    @media print {
      body { margin: 20px auto; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Чек-лист: Как подготовиться к консультации</h1>
    <p>Анна Диринг &nbsp;·&nbsp; Клинический психолог &nbsp;·&nbsp; КПТ и ДПДГ (EMDR)</p>
  </div>

  <div class="step">
    <div class="step-header">
      <div class="step-num">1</div>
      <div class="step-title">Определите «зону боли»</div>
    </div>
    <p class="step-question">Что прямо сейчас причиняет мне больше всего страданий?</p>
    <ul>
      <li>Эмоции: постоянная тревога, чувство вины, апатия, раздражительность</li>
      <li>Отношения: конфликты с партнёром, одиночество, страх близости</li>
      <li>Работа: выгорание, отсутствие смысла, страх ошибки</li>
      <li>Тело: усталость, бессонница, психосоматика</li>
      <li>Самооценка: чувство неудачника, самокритика, неуверенность</li>
    </ul>
    ${answerHtml(answers.step1, 'Моя главная «зона боли»:')}
  </div>

  <div class="step">
    <div class="step-header">
      <div class="step-num">2</div>
      <div class="step-title">Представьте «желаемое состояние»</div>
    </div>
    <p class="step-question">Как я пойму, что стало легче? Что изменится?</p>
    <ul>
      <li>Тревога &rarr; перестану просыпаться с учащённым сердцебиением</li>
      <li>Чувство вины &rarr; перестану извиняться без причины</li>
      <li>Апатия &rarr; появится желание что-то делать</li>
      <li>Конфликты &rarr; научусь спокойно говорить о своих чувствах</li>
    </ul>
    ${answerHtml(answers.step2, 'Как я пойму, что стало лучше:')}
  </div>

  <div class="step">
    <div class="step-header">
      <div class="step-num">3</div>
      <div class="step-title">Сформулируйте запрос по формуле</div>
    </div>
    <p class="step-question">Соберите всё в одну фразу:</p>
    <div class="formula">«Я хочу [конкретное изменение], чтобы [как это повлияет на мою жизнь]»</div>
    <ul>
      <li>«Я хочу перестать винить себя за каждую ошибку, чтобы чувствовать себя спокойнее»</li>
      <li>«Я хочу научиться говорить "нет", чтобы перестать чувствовать себя использованной»</li>
      <li>«Я хочу вернуть интерес к жизни, чтобы просыпаться с желанием что-то делать»</li>
    </ul>
    ${answerHtml(answers.step3, 'Мой запрос:')}
  </div>

  <div class="step">
    <div class="step-header">
      <div class="step-num">4</div>
      <div class="step-title">Проверьте запрос на «прочность»</div>
    </div>
    <p class="step-question">Пройдите по чек-листу и отметьте то, что уже выполняется:</p>
    ${criteriaHtml}
    ${answerHtml(answers.step4Final, 'Финальная формулировка:')}
  </div>

  <div class="note">
    <strong>Не переживайте,</strong> если что-то не заполнено — психолог поможет сформулировать запрос на первой встрече.
    Вы всегда можете сказать: «Я пока не знаю, чего хочу. Я просто знаю, что так больше не могу.»
  </div>

  <div class="footer">
    <p>© Анна Диринг &nbsp;·&nbsp; Психологическое консультирование онлайн</p>
  </div>

  <script>window.addEventListener('load', function() { window.print(); });</script>
</body>
</html>`;

  printWindow.document.write(html);
  printWindow.document.close();
}
