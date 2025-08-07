export const eventsData = [
  {
    id: "dataflix",
    title: "Panels D. Saga",
    subtitle: "The Quest of Comics and Code with the Will of D(Data).",
    shortDescription:
      "A one-of-a-kind technical event merging the worlds of coding, logic, and comics like MCU, DC, Manga, and Manhwa.",
    introduction:
      "Enter a realm where logic fuses with legends and panels hold more than just art — they hold answers. Panels D. Saga blends the power of data with universes from the MCU, DC, Manga, and Manhwa. Across three thrilling rounds, participants decode twisted quotes, extract insights from comic-based data, and face dramatic storytelling-based challenges. Whether you're a coder, comic geek, or proud weeb — this is your multiverse.",
    image:
      "https://thumbs.dreamstime.com/b/open-comic-book-pages-heroes-close-up-background-marvel-dc-comics-high-quality-photo-188517430.jpg", // change this if you want your own custom image
    rounds: [
      {
        name: "Round 1 – Quotes.exe",
        description:
          "🧠 Participants are given famous quotes from comics and manga characters, twisted with technical clues. Decode the meaning behind the quote to extract the correct technical concept.",
        instructions: [
          "Comic/Manga quotes will be displayed with embedded technical clues.",
          "Participants must find the hidden CS or logic-based answer.",
          "Topics include: CS fundamentals, Python, logic, and reasoning.",
          "Answers must be precise and relevant to the embedded clue.",
        ],
        duration: "45 minutes",
        image:
          "https://thumbs.dreamstime.com/b/open-comic-book-pages-heroes-close-up-background-marvel-dc-comics-high-quality-photo-188517430.jpg",
      },
      {
        name: "Round 2 – DataVerse Queries",
        description:
          "📊 Dive into comic-themed datasets and run SQL-style queries to extract hidden insights. Includes interactive challenges inspired by manga/comic sagas.",
        instructions: [
          "Participants will be given structured comic/manga-themed datasets.",
          "They must query the data to solve questions or scenarios.",
          "Queries must use logic, filtering, joins, and aggregations.",
          "Interactive elements will be included (fun, scenario-based activities).",
        ],
        duration: "1 hour 30 minutes",
        image:
          "https://img.freepik.com/free-vector/sql-illustration-concept_114360-9203.jpg",
      },
      {
        name: "Round 3 – Decode or Die",
        description:
          "🎭 One teammate steps into the scene. A dramatic riddle wrapped like a comic panel must be interpreted, decoded, and solved — either through code, logic, or explanation.",
        instructions: [
          "One teammate draws a hidden riddle card written in cinematic/comic format.",
          "Behind each story lies a coding, logic, or problem-solving task.",
          "Participants must decode the narrative and solve accordingly.",
          "Solutions may involve writing code, explaining logic, or solving a puzzle.",
          "Each team gets one-time-use lifelines:",
          "• Swap teammate (restart from beginning)",
          "• Ask the LLM (AI gives hint, not the full answer)",
          "Non-active teammates will play a fun parallel minigame (like Bingo) to avoid distraction and clue sharing.",
        ],
        duration: "45 minutes + additional presentation time if required",
        image:
          "https://s7d1.scene7.com/is/image/wbcollab/Decoding_AI?qlt=90&fmt=webp&resMode=sharp2",
      },
    ],
    rules: [
      "👥 Teams of 2–3 participants only. Solo participation not allowed.",
      "🧑‍🎓 Open to students from all departments.",
      "⏳ Each round is strictly timed. Late submissions won't be considered.",
      "📱 No mobile phones or external help allowed during rounds.",
      "🧑‍⚖️ Judges' decisions are final and binding.",
      "🧠 In Round 3, each team may use one lifeline: (1) teammate swap or (2) AI hint.",
    ],
    organizers: ["organizer1", "organizer2", "organizer3"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "ADS Lab II",
    registrationLink: "#",
    color: "nebula-cyan",
  },
  {
    id: "hack-or-haunt",
    title: "Make a Wish",
    subtitle: "A Magical Tech Quest",
    shortDescription:
      "Step into a world where ancient scrolls meet modern code and each keystroke brings you closer to the genie’s treasure.",
    introduction:
      "Welcome to Make a Wish – an Arabian-inspired tech adventure where teams journey through mystical realms, decode enchanted logic, and unravel the secrets of the Sultan’s scrolls. From sand-buried riddles to ancient machines, every round challenges your creativity, code, and courage. The lamp awaits. The magic is real. Make your wish… and let the challenge begin!",
    rounds: [
      {
        name: "Round 1 – Unlock the Wishes",
        description:
          "Five magical doors await — each sealed with a riddle or puzzle. Solve them all to move forward, but beware: only one try per door!",
        instructions: [
          "Solve all 5 magic doors using logic and quick thinking.",
          "+10 points for each correct answer.",
          "No second chances — only one try per door.",
          "Top 2 teams in each game session (chosen by the genie) directly enter the Hall of Wisdom (Round 2).",
          "Remaining teams continue through additional challenges to qualify.",
          "Only 10 teams will earn a place in Round 2.",
        ],
        duration: "45 minutes",
        image:
          "https://i.pinimg.com/1200x/50/ba/cd/50bacd5b316a65490b832c9a47281d74.jpg",
      },
      {
        name: "Round 2 – Whisper to the Lamp",
        description:
          "Inside the Royal Bazaar, the genie awaits magical stories filled with tech twists. Spin a tale using original prompts and dazzle with your imagination.",
        instructions: [
          "You’ll have 15 minutes to write your magical tale.",
          "AI tools and internet access are allowed.",
          "Judging criteria: creativity, originality, magical immersion.",
          "Only the most captivating tales will qualify for the final round.",
        ],
        duration: "15 minutes",
        image:
          "https://manybackgrounds.com/images/hd/aladdin-genie-s-home-xi8bp47r5q6y1tyi.jpg",
      },
      {
        name: "Round 3 – Escape the SandScript",
        description:
          "Decode ancient SandScripts buried deep in the Desert of Logic. Solve enchanted code puzzles etched by legendary coders — only logic can break the spell.",
        instructions: [
          "Code scrolls will be in Python, C, or Java.",
          "Write the exact output on paper — no compilers or IDEs allowed.",
          "Each SandScript has a time-bound riddle.",
          "Only clear, logical answers will be accepted.",
        ],
        duration: "1 hour",
        image:
          "https://i.pinimg.com/736x/57/8d/52/578d52c88c09347d7009a8f2d31e4592.jpg",
      },
    ],
    rules: [
      "Each team must consist of 2 to 3 participants.",
      "Mobile phones and AI tools are allowed only in specified rounds.",
      "Bring your own laptops for coding rounds (if mentioned).",
      "Maintain silence and discipline to preserve the magical atmosphere.",
      "The judges’ decisions are final and binding — no rewinding time!",
      "In case of a tie, bonus coding puzzles or time-based ranking will determine the winner.",
    ],
    organizers: ["organizer4", "organizer5", "organizer6"],
    date: "2025-08-30",
    time: "10:00 AM - 4:00 PM",
    venue: "Drawing Hall",
    registrationLink: "#",
    color: "desert-gold",
    image:
      "https://i.pinimg.com/1200x/42/38/28/42382830d4dc02d605fbb02e6f3cfcc9.jpg",
  },
  {
    id: "codesync",
    title: "Draw the Sword",
    subtitle: "A Toonified Tech Adventure",
    shortDescription:
      "A tech-inspired, animation-themed event combining light coding with interactive games. Think fast, think visual, and decode your way to victory!",
    introduction:
      "Decode, describe & dominate your way through a toonified tech adventure! Animatech is a tech-inspired, animation-themed event designed to combine light coding with interactive games. It challenges teams to think fast, think visual, and decode their way to victory.",
    image:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/61ea923bdd0a8_anime_quiz.png",
    rounds: [
      {
        name: "Round 1 – Ani-Quest (System Required)",
        description:
          "A fun and fast-paced quiz round featuring tech, animation trivia, and visual questions that test your knowledge and reflexes.",
        instructions: [
          "Questions will be displayed in the link given.",
          "Teams will respond on the link, as directed.",
          "No hints or multiple attempts are allowed per question.",
          "Switching tabs or using AI tools will be considered as malpractice and the team will be disqualified.",
        ],
        duration: "30 minutes",
        image:
          "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/61ea923bdd0a8_anime_quiz.png",
      },
      {
        name: "Round 2 – Script Flip",
        description:
          "A logic-based round where teams are given shuffled lines of code. The task is to reorder them into a correct working program.",
        instructions: [
          "Rearranged code must produce the correct logic or output.",
          "Teams must clearly number or rewrite the correct sequence.",
          "No syntax correction required unless specified.",
        ],
        duration: "45 minutes",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e168e1e8ef01c6c48ed12f1/1641946080050-7RDF3OOK6I58GBWI3X35/Flip-the-Script.jpg",
      },
      {
        name: "Round 3 – LogicLens",
        description:
          "A single picture will contain hidden technical terms that participants must identify using visual clues.",
        instructions: [
          "Teams must identify all keywords based on the visual clue.",
          "Bonus points may be awarded for identifying the overarching connection.",
          "No external help or collaboration with other teams is allowed.",
        ],
        duration: "30 minutes",
        image:
          "https://media.licdn.com/dms/image/v2/D5612AQGei8OVGjFcaQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712145136298?e=2147483647&v=beta&t=mOlLmiB8Orl22jl3IeXvaN7U65-2eBSk985FKq1PbRI",
      },
    ],
    rules: [
      "Each team must consist of 2-3 participants.",
      "No use of phones or electronic devices during any round.",
      "Judges’ decisions are final and binding.",
    ],
    organizers: ["organizer7", "organizer8", "organizer9"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "ADS Lab I",
    registrationLink: "#",
    color: "vibrant-cyan",
  },
  {
    id: "prompt-e-flux",
    title: "Prompt-e-Flux",
    subtitle: "Where Creativity Charges Through Circuits of the Mind",
    shortDescription:
      "A dynamic car-themed triathlon of words, coordination, and visual imagination for teams of two.",
    introduction:
      "Welcome to Prompt-e-Flux, a dynamic car-themed triathlon for the mind. This is no ordinary event — it’s a fusion of high-performance language, mental gear shifts, and visual horsepower. Each team of two will cruise through three electrifying rounds, each fueled with the energy of innovation and creativity.",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/824/289/non_2x/a-formula-race-car-with-sparks-on-a-black-background-ai-generated-free-photo.jpg",
    rounds: [
      {
        name: "Round 1: Wordtrack Relay",
        description:
          "Your journey begins with a cryptic maze of words and puzzles.",
        instructions: [
          "Teams will be given a worksheet with 10–12 puzzles.",
          "Time limit: 1 minute.",
          "No phones or external tools allowed.",
          "The team that guesses the most words qualifies for the next round.",
        ],
        duration: "1 minute",
        image:
          "https://media.istockphoto.com/id/1427598915/vector/word-game.jpg?s=612x612&w=0&k=20&c=FcR8Krh11wNQtOoku_1oatAupsYL5q6OCGHlm8rqYyQ=",
      },
      {
        name: "Round 2: Guess Pit",
        description:
          "One team member must describe a theme-inspired word without using 3–4 restricted words while the teammate guesses within the timer.",
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
        name: "Round 3: Concept Garage",
        description:
          "In this final round, your team will transform a given prompt into a captivating sci-fi poster with a title, central visual, and optional tagline.",
        instructions: [
          "Time limit: 30–40 minutes.",
          "Use of titles, taglines, symbols, and dates is encouraged.",
          "No pre-digital work allowed.",
          "Only the two team members can collaborate on the design.",
        ],
        duration: "30–40 minutes",
        requirements: ["Laptop required for this round."],
        image:
          "https://fullyfilmy.in/cdn/shop/products/POS-519-NOFRAME.jpg?v=1747993256",
      },
    ],
    rules: [
      "Teams of exactly 2 participants.",
      "Laptop required for the third round.",
      "No use of mobile phones or external help during the event, or disqualification applies.",
    ],
    organizers: ["organizer10", "organizer11", "organizer12"],
    date: "2025-08-30",
    time: "8:00 AM - 3:00 PM",
    venue: "ADS lab II",
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
      "https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fHww",
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
          "Teams research and present a given AI tool using communication and technical skills within a time limit.",
        instructions: [
          "Each team is assigned an AI tool on the spot (e.g., ChatGPT, Midjourney, Gemini, GitHub Copilot, etc.).",
          "Create a 4-slide PowerPoint presentation covering: 1. What the tool does, 2. Use cases in AI/Data Science, 3. A real-world application or advantage.",
          "Preparation time: 1 hour.",
          "Presentation time: 2–3 minutes per team.",
          "Slides must be original and created during the event.",
          "Judged on understanding, technical accuracy, presentation clarity, delivery, and creativity.",
          "Bonus points for real-world examples, demos, or creative visuals.",
        ],
        duration: "1 hour prep + 2–3 minutes presentation",
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
    venue: "AV Hall III",
    registrationLink: "#",
    color: "nebula-cyan",
  },
];

export default eventsData;
