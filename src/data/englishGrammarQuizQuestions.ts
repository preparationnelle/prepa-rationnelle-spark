import type { MathQuizQuestion } from '@/components/quiz/MathQuiz';

export const tempsVerbauxQuizQuestions: MathQuizQuestion[] = [
    {
        id: 1,
        question: "Complete the sentence: 'When I arrived at the station, the train ______.'",
        options: [
            "left",
            "has left",
            "had left",
            "was leaving"
        ],
        correctAnswer: 2,
        explanation: "The train left *before* I arrived. We use the **Past Perfect** (had left) to describe an action that happened before another action in the past."
    },
    {
        id: 2,
        question: "Choose the correct form: 'Look at those dark clouds! It ______ to rain.'",
        options: [
            "will",
            "is going",
            "shall",
            "might"
        ],
        correctAnswer: 1,
        explanation: "We use **be going to** for predictions based on present evidence (the clouds)."
    },
    {
        id: 3,
        question: "Complete: 'I ______ in London since 2010.'",
        options: [
            "live",
            "am living",
            "have lived",
            "was living"
        ],
        correctAnswer: 2,
        explanation: "The action started in the past and continues to the present. We use the **Present Perfect** with 'since' or 'for'."
    },
    {
        id: 4,
        question: "Select the correct option: 'While I ______ dinner, the phone rang.'",
        options: [
            "cooked",
            "was cooking",
            "have cooked",
            "am cooking"
        ],
        correctAnswer: 1,
        explanation: "A long action in progress (was cooking - **Past Continuous**) is interrupted by a short action (rang - **Past Simple**)."
    },
    {
        id: 5,
        question: "Complete: 'The meeting ______ at 9:00 AM tomorrow.'",
        options: [
            "start",
            "starts",
            "is starting",
            "will start"
        ],
        correctAnswer: 1,
        explanation: "For timetables and scheduled events (like trains, meetings), we use the **Present Simple**, even for future time."
    },
    {
        id: 6,
        question: "Choose the correct answer: 'I ______ him for years.'",
        options: [
            "know",
            "am knowing",
            "have known",
            "knew"
        ],
        correctAnswer: 2,
        explanation: "'Know' is a stative verb and is rarely used in continuous forms. Use the **Present Perfect** (have known) for duration up to now."
    },
    {
        id: 7,
        question: "Complete: 'If it rains tomorrow, we ______ home.'",
        options: [
            "stay",
            "stayed",
            "will stay",
            "would stay"
        ],
        correctAnswer: 2,
        explanation: "First Conditional: If + Present Simple, **Will + Verb**. Used for likely future situations."
    },
    {
        id: 8,
        question: "Complete this dialogue: 'Where's John?' 'He ______ to the shops.' (He is not here now)",
        options: [
            "went",
            "has gone",
            "has been",
            "was going"
        ],
        correctAnswer: 1,
        explanation: "**Has gone** implies he went and hasn't returned yet. 'Has been' would mean he went and came back."
    },
    {
        id: 9,
        question: "Complete: 'By this time next year, I ______ my studies.'",
        options: [
            "will finish",
            "will be finishing",
            "will have finished",
            "finish"
        ],
        correctAnswer: 2,
        explanation: "We use the **Future Perfect** (will have finished) to say something will be completed *before* a specific time in the future."
    },
    {
        id: 10,
        question: "Choose the correct form: 'I ______ a lot of tennis when I was younger.'",
        options: [
            "play",
            "was playing",
            "used to play",
            "have played"
        ],
        correctAnswer: 2,
        explanation: "**Used to** describes past habits or states that are no longer true."
    }
];
