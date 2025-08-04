import dataFlixImg from "../assets/dataflix.jpg";
export const eventsData = [
  {
    id: "dataflix",
    title: "DataFlix",
    subtitle: "Stream the Data. Decode the Truth.",
    shortDescription:
      "Step into the shoes of data detectives and uncover hidden truths through logical reasoning, coding, and storytelling.",
    introduction:
      "🎬 Welcome to DataFlix— where cinema meets data science! Participants become data detectives, diving deep into datasets to uncover hidden insights, solve puzzles, and decode cinematic mysteries. Across three thrilling rounds, your team will apply logic, coding, and creativity to unlock the secrets lurking beneath the surface. Whether it's through SQL sleuthing, Python-powered puzzles, or storytelling through scenes, DataFlix is your chance to shine on the silver screen of data.",
    image: dataFlixImg,
    rounds: [
      {
        name: "Round 1: Quote It Like You Mean It",
        description:
          "🧠 A filmy twist on technical know-how. Decode famous movie quotes that hide technical clues. Each quote ties into CS fundamentals, Python, or SQL concepts. Think logically, crack the connection, and prove your tech smarts.",
        duration: "45 minutes",
        image: dataFlixImg,
      },
      {
        name: "Round 2: IMDB – Interrogating Movies by DataBase",
        description:
          "📊 Dive into a movie-themed SQL dataset and showcase your data interrogation skills. You'll be asked to run analytical queries on a structured movie database (fields include title, genre, box office, etc.). Questions range from simple filtering to grouped aggregations and nested queries.",
        duration: "1 hour 30 minutes",
        image: "https://learn.g2.com/hubfs/what-is-advanced-analytics.jpg",
      },
      {
        name: "Round 3: SceneDecode – The Cinematic Code Hunt",
        description:
          "🎭 Decode hidden technical problems wrapped in cinematic riddles. One team member draws a card with a dramatized scene. Behind each scene is a coding or logic question. Solve it by writing code, explaining the logic, or cracking a puzzle. Team swaps and LLM hints add drama and unpredictability!",
        duration: "45 minutes + 10 minutes presentation (if any)",
        image: "https://learn.g2.com/hubfs/what-is-advanced-analytics.jpg",
      },
    ],
    rules: [
      "👥 Teams of 2–3 members only",
      "💻 Participants must bring their own laptops",
      "🌐 Internet access will be provided for research",
      "🧠 All analysis must be done using Python, R, SQL, or Julia",
      "🎤 Final presentation must be under 10 minutes (if applicable)",
      "📊 Judging will be based on technical accuracy, creativity, presentation, and detective-like deduction",
      "📁 All code, notebooks, and queries must be submitted at the end of the event",
      "🃏 In Round 3, each team gets one-time-use lifelines: (1) Swap teammate, or (2) Ask the LLM for a hint",
      "🎲 During Round 3, non-active teammates play a parallel minigame to avoid clue sharing and add fun",
    ],
    organizers: ["organizer1", "organizer2", "organizer3"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "St. Joseph's Institute of Technology",
    registrationLink: "#",
    color: "nebula-cyan",
  },
  {
    id: "hack-or-haunt",
    title: "Hack or Haunt",
    subtitle: "A Sinister Symphony of Code, Logic, and Fear",
    shortDescription:
      "Navigate a cursed digital realm of glitchy riddles, eerie algorithms, and haunted logic traps. Only the sharpest minds survive.",
    introduction:
      "Welcome to Hack or Haunt, a horror-themed technical challenge where participants must solve dark puzzles, decode twisted algorithms, and conquer haunted logic traps. Test your mental strength, technical skills, and nerve under pressure in this nightmare realm. Enter if you dare...",
    rounds: [
      {
        name: "Round 1 – Escape Rituals",
        description:
          "Trapped in a haunted realm, your only escape is to conquer 5 rapid-fire quizzes and mind-bending puzzles. Each level must be completed to advance further into the darkness.",
        instructions: [
          "Solve all 5 levels using logical reasoning and critical thinking.",
          "Each correct guess awards +10 points.",
          "No second guesses are allowed.",
          "Fastest and most accurate team wins!",
        ],
        duration: "45 minutes",
        image:
          "https://b1415357.smushcdn.com/1415357/wp-content/uploads/2023/07/rapid-fire-questions_result.webp?lossy=0&strip=1&webp=1",
      },
      {
        name: "Round 2 – Haunt the Prompt",
        description:
          "Craft a short horror story blending creativity, logic, and suspense using your own original tech prompts.",
        instructions: [
          "Write your story within 15 minutes.",
          "AI-generated content and internet usage allowed.",
          "Stories judged on creativity and spook factor.",
          "Top stories qualify for next round.",
        ],
        duration: "15 minutes",
        image:
          "https://imgcdn.stablediffusionweb.com/2024/9/15/2dab98ad-b572-4f34-871a-c19af93b4853.jpg",
      },
      {
        name: "Round 3 – CodeTrace",
        description:
          "Analyze pre-written code snippets and predict their outputs without using any compiler.",
        instructions: [
          "Code snippets in Python, C, or Java will be provided.",
          "Write the output on paper – no IDEs or compilers allowed.",
          "Time per question will be specified.",
          "Clear and precise answers are required.",
        ],
        duration: "1 hour",
        image:
          "https://www.codiga.io/img/posts/how-to-display-code-snippets-in-html/hero.jpg",
      },
    ],
    rules: [
      "Teams of 2-3 participants only.",
      "Mobile phones and AI tools allowed only in specific rounds.",
      "Bring your own laptops for coding rounds if specified.",
      "Maintain discipline and silence to preserve the horror experience.",
      "Judges’ decisions are final and binding.",
      "In case of a tie, bonus horror puzzles or time-based ranking will decide the winner.",
    ],
    organizers: ["organizer4", "organizer5", "organizer6"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "St. Joseph's Institute of Technology",
    registrationLink: "#",
    color: "midnight-black",
    image: "/images/events/hack-or-haunt-bg.jpg",
  },

  {
    id: "codesync",
    title: "CodeSync",
    subtitle: "Toonified Tech Adventure",
    shortDescription:
      "A tech-inspired, animation-themed event combining light coding with interactive games. Think fast, think visual, and decode your way to victory!",
    introduction:
      "Decode, describe & dominate your way through Animatech, a tech and animation fusion challenge. Test your knowledge, logic, and teamwork in a series of engaging rounds designed to stimulate both your coding skills and visual thinking.",
    image: "/images/events/animatech-bg.jpg",
    rounds: [
      {
        name: "Round 1 – Ani-Quest (System Required)",
        description:
          "A fun and fast-paced quiz round featuring tech and animation trivia plus visual questions that test your knowledge and reflexes.",
        instructions: [
          "Questions will be displayed via the provided link.",
          "Teams must respond through the link as directed.",
          "No hints or multiple attempts allowed per question.",
          "Switching tabs or using AI tools is malpractice and leads to disqualification.",
        ],
        duration: "30 minutes",
        image:
          "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/61ea923bdd0a8_anime_quiz.png",
      },
      {
        name: "Round 2 – Script Flip",
        description:
          "A logic-based challenge where teams receive shuffled lines of code and must reorder them to form a working program.",
        instructions: [
          "Rearranged code must produce the correct logic or output.",
          "Teams must clearly number or rewrite the correct sequence.",
          "No syntax corrections needed unless specified.",
        ],
        duration: "45 minutes",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e168e1e8ef01c6c48ed12f1/1641946080050-7RDF3OOK6I58GBWI3X35/Flip-the-Script.jpg",
      },
      {
        name: "Round 3 – LogicLens",
        description:
          "Identify hidden technical terms embedded in a single picture using visual clues.",
        instructions: [
          "Teams must identify all keywords based on the visual clue.",
          "Bonus points for identifying the overarching connection.",
          "No external help or collaboration allowed.",
        ],
        duration: "30 minutes",
        image:
          "https://media.licdn.com/dms/image/v2/D5612AQGei8OVGjFcaQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712145136298?e=2147483647&v=beta&t=mOlLmiB8Orl22jl3IeXvaN7U65-2eBSk985FKq1PbRI",
      },
    ],
    rules: [
      "Teams must have 2-3 participants.",
      "No phones or electronic devices during rounds.",
      "Judges’ decisions are final and binding.",
    ],
    organizers: ["organizer7", "organizer8", "organizer9"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "St. Joseph's Institute of Technology",
    registrationLink: "#",
    color: "vibrant-cyan",
  },
  {
    id: "prompt-e-flux",
    title: "Prompt-E-Flux",
    subtitle: "Where Creativity Charges Through Circuits of the Mind",
    shortDescription:
      "A dynamic sci-fi-themed triathlon of words, neural coordination, and visual imagination for teams of two.",
    introduction:
      "Welcome to Prompt-e-Flux, a dynamic sci-fi-themed triathlon for the mind. This is no ordinary event — it’s a fusion of futuristic language, neural coordination, and visual imagination. Each team of two will flow through three electrifying rounds, each charged with the energy of innovation and creativity.",
    image: "/images/events/prompt-e-flux-bg.jpg",
    rounds: [
      {
        name: "Round 1: Word Puzzle",
        description:
          "Begin your journey with a cryptic maze of words and puzzles inspired by sci-fi lore, technologies, and characters.",
        instructions: [
          "Teams receive a worksheet with 10–12 puzzles.",
          "Time limit: 1 minute.",
          "No phones or external tools allowed.",
          "Teams guessing the most words qualify for the next round.",
        ],
        duration: "1 minute",
        image:
          "https://media.istockphoto.com/id/1427598915/vector/word-game.jpg?s=612x612&w=0&k=20&c=FcR8Krh11wNQtOoku_1oatAupsYL5q6OCGHlm8rqYyQ=",
      },
      {
        name: "Round 2: MindMerge",
        description:
          "One member describes a sci-fi word without using 3–4 restricted words while the teammate guesses within the timer. Can you think and speak in sync?",
        instructions: [
          "1 minute per word.",
          "No gestures or sound effects.",
          "Teams guessing the most words qualify for the next round.",
        ],
        duration: "Varies",
        image:
          "https://www.shutterstock.com/image-vector/innovative-ai-robot-brain-rocket-600nw-2449657547.jpg",
      },
      {
        name: "Round 3: Prompt-e-Poster",
        description:
          "Transform a prompt into a captivating sci-fi movie poster. Design a title, central visual, optional tagline, and sci-fi elements inspired by the prompt.",
        instructions: [
          "Time limit: 30–40 minutes.",
          "Use of titles, taglines, symbols, dates is encouraged.",
          "No pre-digital work allowed.",
          "Only the two team members can collaborate on the design.",
        ],
        duration: "30-40 minutes",
        requirements: ["Laptop required for this round."],
        image:
          "https://fullyfilmy.in/cdn/shop/products/POS-519-NOFRAME.jpg?v=1747993256",
      },
    ],
    rules: [
      "Teams of exactly 2 participants.",
      "Laptop required for the third round.",
      "No use of mobile phones or external help during the event or disqualification applies.",
    ],
    organizers: ["organizer10", "organizer11", "organizer12"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "St. Joseph's Institute of Technology",
    registrationLink: "#",
    color: "cosmic-orange",
  },
  {
    id: "techverse",
    title: "TechVerse",
    subtitle: "Unlock the Universe of Intelligence",
    shortDescription:
      "A thrilling blend of AI and Data Science testing rapid decision-making, silent inference, and encrypted problem-solving.",
    introduction:
      "Welcome to TechVerse, where intelligence is challenged through rapid decision-making, silent inference, and encrypted problem-solving. Engage in rounds that test your factual accuracy, non-verbal reasoning, and logical decoding skills, reflecting the evolving frontiers of modern technology and computational thinking.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220404/pngtree-codes-and-shell-screen-with-blue-digits-key-decoding-program-photo-image_26452040.jpg",
    rounds: [
      {
        name: "Round 1 – DecodeX",
        description:
          "Kickstart with encrypted puzzles and programming logic to challenge analytical thinking under pressure.",
        instructions: [
          "Common questions displayed on screen for all teams simultaneously.",
          "Includes encrypted messages (Binary, Caesar Cipher, Reverse encoding, etc.) and programming logic puzzles.",
          "Answers written on pen and paper; no electronic devices allowed.",
          "3-minute limit per question.",
          "Points awarded for correctness, speed, and logical approach (partial credit possible).",
          "Top scoring teams advance.",
        ],
        duration: "Varies (3 minutes per question)",
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20220404/pngtree-codes-and-shell-screen-with-blue-digits-key-decoding-program-photo-image_26452040.jpg",
      },
      {
        name: "Round 2 – Muted Mystery",
        description:
          "A non-verbal guessing game where one member acts out tech terms silently while the teammate guesses.",
        instructions: [
          "No speaking, humming, or writing allowed.",
          "45 seconds per team to guess as many terms as possible.",
          "Each correct guess awards +10 points.",
          "Only visual cues and mouth movements permitted.",
          "Any verbal clue disqualifies that term.",
        ],
        duration: "45 seconds per team",
        image:
          "https://www.firstediting.com/wp-content/uploads/2022/06/Blog-940x788-3.png",
      },
      {
        name: "Round 3 – Prompt Pitch",
        description:
          "Teams use AI tools to generate and present solutions to real-world AI/Data Science challenges.",
        instructions: [
          "Teams receive a problem statement or scenario.",
          "Create a 3-slide AI-generated presentation (no pre-made or reused templates).",
          "Preparation time: 30–45 minutes.",
          "Presentation time: 2–3 minutes per team.",
          "Judging based on creativity, technical relevance, clarity, and confidence.",
          "Bonus points for innovative prompt/tool use.",
        ],
        duration: "30–45 minutes prep + 2–3 minutes presentation",
        image:
          "https://www.shutterstock.com/image-vector/illustration-abstract-stream-information-generate-600nw-2529513881.jpg",
      },
    ],
    rules: [
      "Teams of 2-3 participants.",
      "No mobile phones or external help allowed.",
      "Judges’ decisions are final and binding.",
      "Bonus decoding challenge to break ties.",
      "Maintain discipline and fair play.",
    ],
    organizers: ["organizer13", "organizer14", "organizer15"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "St. Joseph's Institute of Technology",
    registrationLink: "#",
    color: "nebula-cyan",
  },
];

export default eventsData;
