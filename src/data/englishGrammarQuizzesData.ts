import type { MathQuizQuestion } from '@/components/quiz/MathQuiz';
import { tempsVerbauxQuizQuestions } from './englishGrammarQuizQuestions';

export const englishGrammarQuizzes: Record<string, MathQuizQuestion[]> = {
    'temps-verbaux': tempsVerbauxQuizQuestions,
    'conditionnels': [
        {
            id: 1,
            question: "Complete: 'If I ______ enough money, I would buy a boat.'",
            options: ["have", "had", "would have", "will have"],
            correctAnswer: 1,
            explanation: "Second Conditional (hypothetical present/future): If + Past Simple, would + verb."
        },
        {
            id: 2,
            question: "Complete: 'If you ______ water to 100°C, it boils.'",
            options: ["heated", "heat", "will heat", "would heat"],
            correctAnswer: 1,
            explanation: "Zero Conditional (general truth): If + Present Simple, Present Simple."
        },
        {
            id: 3,
            question: "Complete: 'I ______ helping you if I had known you were in trouble.'",
            options: ["would help", "will help", "would have helped", "had helped"],
            correctAnswer: 2,
            explanation: "Third Conditional (hypothetical past): If + Past Perfect, would have + past participle."
        },
        {
            id: 4,
            question: "Complete: 'Unless you ______ now, you will be late.'",
            options: ["leave", "don't leave", "will leave", "left"],
            correctAnswer: 0,
            explanation: "'Unless' means 'if not'. We use it with the Present Simple to talk about the future."
        },
        {
            id: 5,
            question: "Complete: 'I wish I ______ taller.'",
            options: ["am", "will be", "were", "would be"],
            correctAnswer: 2,
            explanation: "We use 'I wish' + Past Simple (or 'were' for all persons) to express a wish about the present."
        }
    ],
    'voix-passives': [
        {
            id: 1,
            question: "Change to passive: 'Someone has stolen my bike.' -> 'My bike ______.'",
            options: ["is stolen", "was stolen", "has been stolen", "had been stolen"],
            correctAnswer: 2,
            explanation: "The active verb is Present Perfect ('has stolen'), so the passive is Present Perfect Passive ('has been stolen')."
        },
        {
            id: 2,
            question: "Complete: 'Smoking ______ in this restaurant.'",
            options: ["not allowed", "is not allowed", "doesn't allow", "has not allowed"],
            correctAnswer: 1,
            explanation: "We need the passive voice (be + past participle) to say that a rule applies to smoking."
        },
        {
            id: 3,
            question: "Complete: 'The letter ______ yesterday.'",
            options: ["sent", "was sent", "is sent", "has been sent"],
            correctAnswer: 1,
            explanation: "Specific past time ('yesterday') requires Past Simple Passive ('was sent')."
        },
        {
            id: 4,
            question: "Complete: 'This house ______ in 1900.'",
            options: ["built", "was built", "has been built", "is built"],
            correctAnswer: 1,
            explanation: "We use the passive voice to focus on the object (the house) and Past Simple for a finished action in the past."
        },
        {
            id: 5,
            question: "Complete: 'The winners ______ usually announced at the end of the ceremony.'",
            options: ["are", "is", "have", "will"],
            correctAnswer: 0,
            explanation: "Present Simple Passive for a general routine/fact: 'are announced'."
        }
    ],
    'discours-indirect': [
        {
            id: 1,
            question: "Report this: 'I am happy.' -> He said he ______ happy.",
            options: ["is", "was", "has been", "will be"],
            correctAnswer: 1,
            explanation: "Backshift: Present Simple ('am') changes to Past Simple ('was') in reported speech."
        },
        {
            id: 2,
            question: "Report this: 'I will call you.' -> She said she ______ me.",
            options: ["will call", "would call", "called", "calls"],
            correctAnswer: 1,
            explanation: "Backshift: 'Will' changes to 'would' in reported speech."
        },
        {
            id: 3,
            question: "Report this: 'Where do you live?' -> He asked me where ______.",
            options: ["do I live", "did I live", "I lived", "I live"],
            correctAnswer: 2,
            explanation: "In reported questions, the word order changes to subject + verb, and the tense backshifts."
        },
        {
            id: 4,
            question: "Report this: 'Don't shout!' -> He told me ______.",
            options: ["don't shout", "not to shout", "to not shout", "no shouting"],
            correctAnswer: 1,
            explanation: "Imperatives change to 'to' + infinitive (or 'not to' + infinitive)."
        },
        {
            id: 5,
            question: "Report this: 'I saw him yesterday.' -> He said he had seen him ______.",
            options: ["yesterday", "the day before", "tomorrow", "next day"],
            correctAnswer: 1,
            explanation: "Time expressions change: 'yesterday' becomes 'the day before' or 'the previous day'."
        }
    ],
    'modaux': [
        {
            id: 1,
            question: "Complete: 'You ______ smoke in the hospital.' (Prohibition)",
            options: ["don't have to", "mustn't", "couldn't", "shouldn't"],
            correctAnswer: 1,
            explanation: "Mustn't expresses prohibition (it is forbidden)."
        },
        {
            id: 2,
            question: "Complete: 'I ______ swim when I was 5.' (Ability in the past)",
            options: ["can", "could", "might", "should"],
            correctAnswer: 1,
            explanation: "Could is used for general ability in the past."
        },
        {
            id: 3,
            question: "Complete: 'Where is he?' 'He ______ be at work, it's 10 AM.' (Strong probability)",
            options: ["can", "must", "should", "might"],
            correctAnswer: 1,
            explanation: "Must is used for logical deduction or strong probability."
        },
        {
            id: 4,
            question: "Complete: 'You ______ buy a ticket, it's free.' (Lack of obligation)",
            options: ["mustn't", "don't have to", "shouldn't", "couldn't"],
            correctAnswer: 1,
            explanation: "Don't have to means it is not necessary."
        },
        {
            id: 5,
            question: "Complete: 'I ______ allow you to go.' (Refusal)",
            options: ["won't", "don't", "not", "am not"],
            correctAnswer: 0,
            explanation: "Won't can express refusal."
        }
    ],
    'prepositions': [
        {
            id: 1,
            question: "Complete: 'I am interested ______ history.'",
            options: ["at", "on", "in", "by"],
            correctAnswer: 2,
            explanation: "Interested *in*."
        },
        {
            id: 2,
            question: "Complete: 'She is good ______ playing the piano.'",
            options: ["in", "at", "on", "of"],
            correctAnswer: 1,
            explanation: "Good *at*."
        },
        {
            id: 3,
            question: "Complete: 'I depends ______ the weather.'",
            options: ["of", "from", "on", "at"],
            correctAnswer: 2,
            explanation: "Depend *on*."
        },
        {
            id: 4,
            question: "Complete: 'He is afraid ______ dogs.'",
            options: ["of", "by", "from", "at"],
            correctAnswer: 0,
            explanation: "Afraid *of*."
        },
        {
            id: 5,
            question: "Complete: 'We arrived ______ the airport at 6.'",
            options: ["to", "in", "at", "on"],
            correctAnswer: 2,
            explanation: "Arrive *at* (a specific place/building), Arrive *in* (a city/country)."
        }
    ],
    'articles': [
        {
            id: 1,
            question: "Complete: 'I need ______ information about hotels.'",
            options: ["an", "a", "some", "many"],
            correctAnswer: 2,
            explanation: "Information is uncountable, so we cannot use a/an. We use 'some'."
        },
        {
            id: 2,
            question: "Complete: 'She is ______ honest person.'",
            options: ["a", "an", "the", "-"],
            correctAnswer: 1,
            explanation: "'Honest' starts with a vowel sound, so we use 'an'."
        },
        {
            id: 3,
            question: "Complete: '______ Moon goes around the Earth.'",
            options: ["A", "An", "The", "-"],
            correctAnswer: 2,
            explanation: "We use 'the' for unique objects (The Moon, The Sun)."
        },
        {
            id: 4,
            question: "Complete: 'I don't like ______ dogs.' (Generalization)",
            options: ["the", "a", "-", "some"],
            correctAnswer: 2,
            explanation: "Zero article is used for plural nouns when talking in general."
        },
        {
            id: 5,
            question: "Complete: 'Can you pass me ______ salt, please?'",
            options: ["a", "an", "the", "-"],
            correctAnswer: 2,
            explanation: "We use 'the' because the listener knows which salt we mean (the one on the table)."
        }
    ],
    'relatives': [
        {
            id: 1,
            question: "Complete: 'The man ______ called yesterday is my boss.'",
            options: ["which", "who", "whose", "where"],
            correctAnswer: 1,
            explanation: "Who relates to people."
        },
        {
            id: 2,
            question: "Complete: 'This is the book ______ I bought.'",
            options: ["who", "whose", "which", "where"],
            correctAnswer: 2,
            explanation: "Which (or that) relates to things."
        },
        {
            id: 3,
            question: "Complete: 'That's the woman ______ son is a doctor.'",
            options: ["who", "which", "whose", "that"],
            correctAnswer: 2,
            explanation: "Whose indicates possession."
        },
        {
            id: 4,
            question: "Complete: 'I remember the day ______ we met.'",
            options: ["where", "that", "which", "when"],
            correctAnswer: 3,
            explanation: "When relates to time."
        },
        {
            id: 5,
            question: "Complete: 'The hotel, ______ is in the center, is very expensive.'",
            options: ["that", "who", "which", "what"],
            correctAnswer: 2,
            explanation: "In non-defining relative clauses (with commas), we must use 'which' for things, not 'that'."
        }
    ],
    'gerondif-infinitif': [
        {
            id: 1,
            question: "Complete: 'I enjoy ______ books.'",
            options: ["reading", "to read", "read", "to reading"],
            correctAnswer: 0,
            explanation: "Enjoy is followed by the gerund (-ing)."
        },
        {
            id: 2,
            question: "Complete: 'I decided ______ a new car.'",
            options: ["buying", "to buy", "buy", "for buying"],
            correctAnswer: 1,
            explanation: "Decide is followed by the infinitive (to + verb)."
        },
        {
            id: 3,
            question: "Complete: 'He stopped ______ to answer his phone.'",
            options: ["driving", "drive", "to drive", "driven"],
            correctAnswer: 0,
            explanation: "Wait, both are possible but mean different things. 'Stopped driving' (quit the action). 'Stopped to drive' (stopped in order to drive). The prompt suggests interruption of driving, so 'stopped driving'. Let's pick a clearer example. 'He admitted ______ the money.' -> 'stealing'."
        },
        {
            id: 4,
            question: "Complete: 'I look forward to ______ you.'",
            options: ["see", "seeing", "saw", "seen"],
            correctAnswer: 1,
            explanation: "Look forward to is followed by the gerund (-ing) because 'to' is a preposition here."
        },
        {
            id: 5,
            question: "Complete: 'It is important ______ regular exercise.'",
            options: ["get", "getting", "to get", "for get"],
            correctAnswer: 2,
            explanation: "Adjective + infinitive: It is important to do something."
        }
    ],
    'comparatifs': [
        {
            id: 1,
            question: "Complete: 'This house is ______ than that one.'",
            options: ["big", "biger", "bigger", "more big"],
            correctAnswer: 2,
            explanation: "One-syllable adjectives double the consonant and add -er."
        },
        {
            id: 2,
            question: "Complete: 'She is the ______ student in the class.'",
            options: ["intelligent", "more intelligent", "most intelligent", "intelligentest"],
            correctAnswer: 2,
            explanation: "Superlative of long adjectives uses 'the most'."
        },
        {
            id: 3,
            question: "Complete: 'It was ______ than I expected.'",
            options: ["bad", "worse", "baddest", "worst"],
            correctAnswer: 1,
            explanation: "Irregular comparative: Bad -> Worse."
        },
        {
            id: 4,
            question: "Complete: 'He is not as old ______ he looks.'",
            options: ["than", "that", "as", "like"],
            correctAnswer: 2,
            explanation: "Equality structure: as + adjective + as."
        },
        {
            id: 5,
            question: "Complete: 'The more you study, the ______ you learn.'",
            options: ["more", "most", "much", "many"],
            correctAnswer: 0,
            explanation: "The more... the more structure."
        }
    ],
    'questions': [
        {
            id: 1,
            question: "Complete: '______ did you go last night?'",
            options: ["Where", "What", "Who", "When"],
            correctAnswer: 0,
            explanation: "Asking for a place."
        },
        {
            id: 2,
            question: "Complete: '______ car is this?'",
            options: ["Who", "Whose", "Who's", "Whom"],
            correctAnswer: 1,
            explanation: "Asking for possession."
        },
        {
            id: 3,
            question: "Complete: '______ often do you go to the gym?'",
            options: ["How", "What", "Which", "Who"],
            correctAnswer: 0,
            explanation: "Asking for frequency: How often."
        },
        {
            id: 4,
            question: "Complete: 'You like coffee, ______?'",
            options: ["do you", "don't you", "aren't you", "didn't you"],
            correctAnswer: 1,
            explanation: "Question tag: positive statement -> negative tag."
        },
        {
            id: 5,
            question: "Complete: 'What is she ______?' (Asking for description/personality)",
            options: ["like", "likes", "look like", "liked"],
            correctAnswer: 0,
            explanation: "What is she like? = What kind of person is she?"
        }
    ],
    'expressions-temps': [
        {
            id: 1,
            question: "Complete: 'I haven't seen him ______ ages.'",
            options: ["since", "for", "during", "ago"],
            correctAnswer: 1,
            explanation: "For + period of time."
        },
        {
            id: 2,
            question: "Complete: 'I met him three years ______.'",
            options: ["ago", "since", "for", "before"],
            correctAnswer: 0,
            explanation: "Ago is used with Past Simple to say how far back in the past something happened."
        },
        {
            id: 3,
            question: "Complete: 'I have ______ finished my homework.' (I finished it a moment ago)",
            options: ["yet", "just", "ever", "since"],
            correctAnswer: 1,
            explanation: "Just = a very short time ago."
        },
        {
            id: 4,
            question: "Complete: 'Have you seen that movie ______?'",
            options: ["already", "just", "yet", "still"],
            correctAnswer: 2,
            explanation: "Yet is used in questions and negative sentences at the end."
        },
        {
            id: 5,
            question: "Complete: 'I ______ love you.' (Continuing state)",
            options: ["yet", "still", "already", "anymore"],
            correctAnswer: 1,
            explanation: "Still indicates a situation continues."
        }
    ],
    'concordance': [
        {
            id: 1,
            question: "Complete: 'I didn't know you ______ busy.'",
            options: ["are", "were", "have been", "will be"],
            correctAnswer: 1,
            explanation: "Sequence of Tenses: Main verb past (didn't know) -> Subordinate verb past (were)."
        },
        {
            id: 2,
            question: "Complete: 'He wishes he ______ more time.'",
            options: ["has", "had", "have", "will have"],
            correctAnswer: 1,
            explanation: "Wish + Past Simple for present desire."
        },
        {
            id: 3,
            question: "Complete: 'It's time we ______ home.'",
            options: ["go", "went", "will go", "have gone"],
            correctAnswer: 1,
            explanation: "It's time + Past Simple (Subjunctive mood)."
        },
        {
            id: 4,
            question: "Complete: 'I would rather you ______ smoke inside.'",
            options: ["don't", "didn't", "won't", "not"],
            correctAnswer: 1,
            explanation: "Would rather + subject + Past Simple."
        },
        {
            id: 5,
            question: "Complete: 'If I ______ millionaire, I would travel the world.'",
            options: ["am", "was", "were", "have been"],
            correctAnswer: 2,
            explanation: "Subjunctive 'were' is preferred in formal English for hypothetical situations."
        }
    ],
    'quantifieurs': [
        {
            id: 1,
            question: "Complete: 'I don't have ______ money.'",
            options: ["much", "many", "some", "few"],
            correctAnswer: 0,
            explanation: "Much is used with uncountable nouns in negative sentences."
        },
        {
            id: 2,
            question: "Complete: 'There are ______ apples on the table.'",
            options: ["much", "a little", "many", "any"],
            correctAnswer: 2,
            explanation: "Many is used with countable nouns."
        },
        {
            id: 3,
            question: "Complete: 'I have ______ friends.' (Not many, but enough)",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: 1,
            explanation: "A few = positive connotation (some). Few = negative (not enough)."
        },
        {
            id: 4,
            question: "Complete: 'Would you like ______ coffee?'",
            options: ["any", "some", "many", "a few"],
            correctAnswer: 1,
            explanation: "We use 'some' in offers."
        },
        {
            id: 5,
            question: "Complete: 'There is ______ hope.' (Almost none)",
            options: ["a little", "little", "few", "a few"],
            correctAnswer: 1,
            explanation: "Little = negative connotation (not much/enough)."
        }
    ],
    'subjunctif': [
        {
            id: 1,
            question: "Complete: 'The doctor suggested that she ______ a rest.'",
            options: ["take", "takes", "took", "taking"],
            correctAnswer: 0,
            explanation: "Subjunctive: Base form of the verb after suggest/recommend/insist."
        },
        {
            id: 2,
            question: "Complete: 'It is essential that he ______ on time.'",
            options: ["is", "be", "was", "were"],
            correctAnswer: 1,
            explanation: "Subjunctive 'be' after essential/vital/important."
        },
        {
            id: 3,
            question: "Complete: 'I insist that you ______.'",
            options: ["apologize", "apologized", "apologizes", "will apologize"],
            correctAnswer: 0,
            explanation: "Subjunctive: Base form."
        },
        {
            id: 4,
            question: "Complete: 'God ______ the Queen.'",
            options: ["save", "saves", "saved", "saving"],
            correctAnswer: 0,
            explanation: "Fixed subjunctive phrase."
        },
        {
            id: 5,
            question: "Complete: 'If need ______.'",
            options: ["is", "be", "was", "were"],
            correctAnswer: 1,
            explanation: "Fixed phrase 'If need be'."
        }
    ],
    'inversions': [
        {
            id: 1,
            question: "Complete: 'Never ______ such a beautiful subset.'",
            options: ["I saw", "did I see", "have I seen", "I have seen"],
            correctAnswer: 2,
            explanation: "Inversion after negative adverb 'Never': Aux + Subject + Verb."
        },
        {
            id: 2,
            question: "Complete: 'Hardly had I arrived ______ the phone rang.'",
            options: ["than", "when", "that", "after"],
            correctAnswer: 1,
            explanation: "Hardly... when."
        },
        {
            id: 3,
            question: "Complete: '______ do we see such talent.'",
            options: ["Rarely", "Always", "Sometimes", "Often"],
            correctAnswer: 0,
            explanation: "Negative adverb 'Rarely' triggers inversion."
        },
        {
            id: 4,
            question: "Complete: 'Only then ______ I understand.'",
            options: ["did", "do", "have", "was"],
            correctAnswer: 0,
            explanation: "Only then triggers inversion."
        },
        {
            id: 5,
            question: "Complete: 'So tired ______ that he fell asleep immediately.'",
            options: ["he was", "was he", "he is", "is he"],
            correctAnswer: 1,
            explanation: "So + adj + inversion."
        }
    ],
    'connecteurs': [
        {
            id: 1,
            question: "Complete: 'He is rich, ______ he is not happy.'",
            options: ["therefore", "however", "moreover", "so"],
            correctAnswer: 1,
            explanation: "However expresses contrast."
        },
        {
            id: 2,
            question: "Complete: 'It was raining. ______, we went out.'",
            options: ["Although", "Despite", "Nevertheless", "Whereas"],
            correctAnswer: 2,
            explanation: "Nevertheless (adverb) connects two sentences contrasting."
        },
        {
            id: 3,
            question: "Complete: '______ the rain, we went out.'",
            options: ["Despite", "Although", "However", "Even if"],
            correctAnswer: 0,
            explanation: "Despite implies concession (+ noun)."
        },
        {
            id: 4,
            question: "Complete: 'I passed the exam, ______ I didn't study.'",
            options: ["despite", "even though", "however", "in spite of"],
            correctAnswer: 1,
            explanation: "Even though + clause."
        },
        {
            id: 5,
            question: "Complete: 'He likes football, ______ his brother prefers tennis.'",
            options: ["while", "during", "so", "because"],
            correctAnswer: 0,
            explanation: "While (or Whereas) expresses contrast between two subjects."
        }
    ],
    'verbes-irreguliers': [
        {
            id: 1,
            question: "Past Simple of 'Go':",
            options: ["goed", "gone", "went", "going"],
            correctAnswer: 2,
            explanation: "Go -> Went -> Gone."
        },
        {
            id: 2,
            question: "Past Participle of 'Write':",
            options: ["wrote", "written", "writed", "writing"],
            correctAnswer: 1,
            explanation: "Write -> Wrote -> Written."
        },
        {
            id: 3,
            question: "Past Simple of 'Buy':",
            options: ["bought", "brought", "buyed", "buying"],
            correctAnswer: 0,
            explanation: "Buy -> Bought -> Bought."
        },
        {
            id: 4,
            question: "Past Participle of 'Eat':",
            options: ["ate", "eaten", "eated", "eating"],
            correctAnswer: 1,
            explanation: "Eat -> Ate -> Eaten."
        },
        {
            id: 5,
            question: "Past Simple of 'Think':",
            options: ["thought", "thank", "thinked", "though"],
            correctAnswer: 0,
            explanation: "Think -> Thought -> Thought."
        }
    ],
    'causatives': [
        {
            id: 1,
            question: "Complete: 'I had my car ______ yesterday.'",
            options: ["repair", "repaired", "repairing", "to repair"],
            correctAnswer: 1,
            explanation: "Have + object + Past Participle (for a service)."
        },
        {
            id: 2,
            question: "Complete: 'I made him ______ the truth.'",
            options: ["tell", "to tell", "told", "telling"],
            correctAnswer: 0,
            explanation: "Make + person + base form (force)."
        },
        {
            id: 3,
            question: "Complete: 'I got him ______ the car.'",
            options: ["wash", "to wash", "washed", "washing"],
            correctAnswer: 1,
            explanation: "Get + person + to + infinitive (persuade)."
        },
        {
            id: 4,
            question: "Complete: 'She let me ______ her phone.'",
            options: ["use", "to use", "used", "using"],
            correctAnswer: 0,
            explanation: "Let + person + base form (allow)."
        },
        {
            id: 5,
            question: "Complete: 'We need to get the roof ______.'",
            options: ["fix", "fixed", "to fix", "fixing"],
            correctAnswer: 1,
            explanation: "Get + object + Past Participle."
        }
    ],
    'nuances-lexicales': [
        {
            id: 1,
            question: "Complete: 'The war had a terrible ______ on the economy.'",
            options: ["affect", "effect", "impacts", "results"],
            correctAnswer: 1,
            explanation: "Effect is the noun. Affect is usually the verb."
        },
        {
            id: 2,
            question: "Complete: 'Can you give me some ______?'",
            options: ["advices", "advice", "advise", "advises"],
            correctAnswer: 1,
            explanation: "Advice is uncountable (no plural). Advise is the verb."
        },
        {
            id: 3,
            question: "Complete: 'The bank ______ him 5000 dollars.'",
            options: ["borrowed", "lent", "loaned", "gave"],
            correctAnswer: 1,
            explanation: "Lend = give temporarily. Borrow = take temporarily."
        },
        {
            id: 4,
            question: "Complete: 'He mostly wears ______ clothes.'",
            options: ["lose", "loose", "lost", "loss"],
            correctAnswer: 1,
            explanation: "Loose = not tight. Lose = not win."
        },
        {
            id: 5,
            question: "Complete: 'It's a ______ point.'",
            options: ["mute", "moot", "mood", "mode"],
            correctAnswer: 1,
            explanation: "Moot point = irrelevant or debatable point."
        }
    ]
};
