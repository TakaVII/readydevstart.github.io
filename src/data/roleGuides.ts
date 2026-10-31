/**
 * Extended "how to become" content for career guide role pages.
 *
 * Each entry is rendered by `src/components/RoleGuide.astro` inside the role page,
 * and its FAQs are also published as FAQPage structured data.
 *
 * The five original pilot roles live below; every other role lives in a
 * per-discipline file in `src/data/roleGuides/`, merged into `roleGuides`.
 *
 * To add a role: add an entry keyed by the role's URL slug, then render
 * <RoleGuide slug="..." /> on that role page and update its title/description
 * to target "How to Become a ..." searches.
 *
 * Keep it factual: no invented salary figures, statistics, or quotes.
 */

export interface RoleGuide {
  name: string;
  /** Ordered steps for breaking into the role. */
  steps: { title: string; body: string }[];
  /** Core skills, beyond the tool list already on the page. */
  skills: { title: string; body: string }[];
  /** What hiring managers look for in a portfolio for this role. */
  portfolio: string[];
  /** Heading/intro overrides for roles where "portfolio" isn't the right word (e.g. business roles). */
  portfolioTitle?: string;
  portfolioIntro?: string;
  faqs: { question: string; answer: string }[];
}

import { animationAudioGuides } from "./roleGuides/animation-audio";
import { artGuides } from "./roleGuides/art";
import { designQaInfraGuides } from "./roleGuides/design-qa-infra";
import { marketingGuides } from "./roleGuides/marketing";
import { productionBusinessGuides } from "./roleGuides/production-business";
import { programmingGuides } from "./roleGuides/programming";

export const roleGuides: Record<string, RoleGuide> = {
  ...animationAudioGuides,
  ...artGuides,
  ...designQaInfraGuides,
  ...marketingGuides,
  ...productionBusinessGuides,
  ...programmingGuides,

  "game-designer": {
    name: "Game Designer",
    steps: [
      { title: "Learn the fundamentals of game design", body: "Study how rules, goals, feedback, and player choice create an experience. Frameworks like MDA (Mechanics, Dynamics, Aesthetics) and core loops give you a shared vocabulary with other designers. Our Game Design 101 quest log is a good starting point." },
      { title: "Prototype constantly, starting on paper", body: "Board game and paper prototypes let you test a rule in minutes. Once an idea holds up, rebuild it in an engine like Unity, Godot, or Unreal so you can show it working, not just describe it." },
      { title: "Learn enough engine and scripting to build alone", body: "Designers who can wire up their own mechanics with visual scripting or basic C#/GDScript iterate faster and are easier to hire for small teams." },
      { title: "Finish small games and join game jams", body: "Shipping small, complete games proves you can scope, cut, and polish. Game jams on itch.io are a low-risk way to practice under constraints and meet collaborators." },
      { title: "Document and explain your design decisions", body: "Write short design docs and postmortems for your projects: what problem you were solving, what you tried, what the playtests showed, and what you changed." },
      { title: "Apply for junior and adjacent roles", body: "Many designers enter through junior design, QA, or community roles. Tailor each application to the studio's games and show you understand what makes them work." },
    ],
    skills: [
      { title: "Systems thinking", body: "Seeing how mechanics, economies, and progression affect each other, and predicting what players will actually do." },
      { title: "Communication & documentation", body: "Turning ideas into clear specs, one-pagers, and diagrams that programmers and artists can build from." },
      { title: "Playtesting & iteration", body: "Running tests, separating what players say from what they do, and changing the design based on evidence." },
      { title: "Prototyping", body: "Building rough, playable versions quickly in an engine or on paper." },
      { title: "Basic math & spreadsheets", body: "Balancing numbers such as damage, costs, and drop rates, often in Excel or Google Sheets." },
    ],
    portfolio: [
      "2–4 playable projects, ideally in the browser (itch.io) so reviewers can try them in a minute.",
      "A short breakdown per project: the design goal, your specific contribution, and what you changed after playtesting.",
      "At least one design document or one-pager that shows how you communicate a feature.",
      "Gameplay videos or GIFs at the top of each project for reviewers who won't download anything.",
      "Projects that match the genre of the studios you're applying to, where possible.",
    ],
    faqs: [
      { question: "Do you need a degree to become a game designer?", answer: "No. A degree in game design or a related field can help with structure and connections, but studios hire designers mainly on their portfolio and shipped work. Many working designers are self-taught or came from other roles such as QA." },
      { question: "Do game designers need to know how to code?", answer: "Not always, but it helps a lot. Being able to prototype your own ideas with visual scripting or basic scripting in an engine makes you faster and more independent, especially on small indie teams." },
      { question: "What is the difference between a game designer and a level designer?", answer: "A game designer defines the rules, systems, and mechanics of the game as a whole. A level designer uses those mechanics to build specific spaces, encounters, and pacing that the player moves through." },
      { question: "How do I get my first game design job?", answer: "Build and finish small playable games, document your design decisions, take part in game jams, and apply to junior or adjacent roles. Networking in game dev communities and Discord servers also helps you hear about openings early." },
    ],
  },

  "level-designer": {
    name: "Level Designer",
    steps: [
      { title: "Study level design theory", body: "Learn how layout, sightlines, landmarks, pacing, and flow guide players without words. GDC talks and resources like The Level Design Book (linked below) are excellent free starting points." },
      { title: "Analyze levels you love", body: "Draw top-down maps of levels from games you play and annotate why they work: where the player is guided, where tension rises, where they rest." },
      { title: "Learn a level editor or engine", body: "Get comfortable blocking out spaces in Unreal, Unity, or Godot, or in mod tools for existing games. Greyboxing (building with simple shapes) is the core daily skill." },
      { title: "Build and playtest small, complete levels", body: "Make short levels with a clear goal and iterate on them with real playtesters. Watch where players get lost or bored and fix it." },
      { title: "Mod existing games", body: "Map-making and modding communities let you work within a shipped game's mechanics, which is very close to what you'll do on a professional team." },
      { title: "Present your work and apply", body: "Build a portfolio around a few polished levels and apply for junior level design or world-building roles." },
    ],
    skills: [
      { title: "Spatial design & blockouts", body: "Building readable spaces quickly with simple geometry before any art is made." },
      { title: "Player guidance", body: "Using lighting, landmarks, composition, and affordances to lead players naturally." },
      { title: "Pacing & encounter design", body: "Balancing combat, puzzles, exploration, and rest so the experience flows." },
      { title: "Scripting", body: "Setting up triggers, events, and simple logic with visual scripting or code." },
      { title: "Collaboration", body: "Working with environment artists, designers, and writers to turn a blockout into a finished level." },
    ],
    portfolio: [
      "A few complete, playable levels rather than many unfinished ones.",
      "Top-down maps and annotated screenshots that explain the intended player path and pacing.",
      "Before/after comparisons from blockout to final, showing how playtesting changed the layout.",
      "A walkthrough video for each level so reviewers can see it without downloading anything.",
      "Levels built in the engine or genre of the studios you're targeting, where possible.",
    ],
    faqs: [
      { question: "What software do level designers use?", answer: "Mostly game engines and their editors, such as Unreal Engine, Unity, or Godot, plus mod tools for existing games. Many also use 3D tools like Blender for simple props and 2D tile editors such as Tiled or LDtk for 2D games." },
      { question: "Do level designers need to know how to code?", answer: "Deep programming isn't usually required, but most level designers script events and interactions with visual scripting (like Unreal Blueprints) or light scripting, so basic logic skills are very useful." },
      { question: "Is modding a good way to become a level designer?", answer: "Yes. Building maps and mods for existing games is one of the most common ways into level design, because it teaches you to design within real mechanics and gives you shareable portfolio pieces." },
      { question: "What is greyboxing in level design?", answer: "Greyboxing (or blockout) is building a level with simple, untextured shapes to test layout, scale, and flow before artists spend time on final visuals." },
    ],
  },

  "concept-artist": {
    name: "Concept Artist",
    steps: [
      { title: "Build strong art fundamentals", body: "Drawing, perspective, anatomy, value, color, and composition matter more than any software. Daily studies from life and reference compound quickly." },
      { title: "Learn to design, not just render", body: "Concept art is about solving visual problems: shape language, silhouettes, function, and storytelling. Practice exploring many rough ideas before polishing one." },
      { title: "Get fluent in digital tools", body: "Learn a painting program such as Photoshop, Krita, or Clip Studio Paint. Many concept artists also use 3D (Blender, ZBrush) to block out shapes and perspective quickly." },
      { title: "Make a focused portfolio", body: "Pick a specialty such as characters, environments, or props, and build a body of work for a coherent fictional world rather than unrelated pieces." },
      { title: "Share work and get feedback", body: "Post regularly on ArtStation and join art communities. Honest critique from working artists is one of the fastest ways to improve." },
      { title: "Apply for junior roles and freelance work", body: "Junior concept, illustration, and freelance asset work can all lead into full-time concept art positions." },
    ],
    skills: [
      { title: "Drawing & art fundamentals", body: "Perspective, anatomy, value, light, and color theory." },
      { title: "Visual problem-solving", body: "Designing things that read clearly, fit the world, and can actually be built in 3D." },
      { title: "Speed & iteration", body: "Producing many thumbnails and variations quickly so the team can choose a direction." },
      { title: "Communicating with production", body: "Making callouts, orthographic views, and material notes that modelers can work from." },
      { title: "Visual research", body: "Gathering and using reference to ground designs in real-world logic." },
    ],
    portfolio: [
      "Process, not just finished paintings: thumbnails, iterations, and the final design.",
      "A clear specialty (characters, environments, or props) that matches the jobs you want.",
      "Projects built around a coherent world or brief, showing consistent design language.",
      "Production-ready sheets with turnarounds or callouts that a 3D artist could use.",
      "A tight selection of your strongest pieces rather than everything you've ever made.",
    ],
    faqs: [
      { question: "Do you need a degree to be a concept artist?", answer: "No. Studios hire concept artists based on their portfolio. Art school can help build fundamentals and connections, but many concept artists are self-taught through online courses, practice, and critique." },
      { question: "What software do concept artists use?", answer: "Most use a digital painting program such as Photoshop, Krita, or Clip Studio Paint, often with a drawing tablet. Many also use 3D tools like Blender or ZBrush to block out forms and perspective." },
      { question: "What's the difference between concept art and illustration?", answer: "Concept art explores and defines designs for production, so it prioritizes clarity, iteration, and function. Illustration usually produces a polished final image meant to be seen by the audience, such as key art or cards." },
      { question: "Should a concept art portfolio show sketches?", answer: "Yes. Studios want to see how you think, so showing thumbnails, variations, and the process toward a final design is usually as important as the finished piece." },
    ],
  },

  "gameplay-programmer": {
    name: "Gameplay Programmer",
    steps: [
      { title: "Learn a programming language used in games", body: "C# (Unity) and C++ (Unreal and many in-house engines) are the most common. GDScript (Godot) is also great for learning. Focus on core programming concepts that transfer between languages." },
      { title: "Learn a game engine deeply", body: "Pick one engine and learn its architecture: scenes or levels, components, input, physics, animation, and UI." },
      { title: "Recreate mechanics from games you know", body: "Rebuilding things like a platformer jump, a lock-on camera, or an inventory teaches you how real features are structured and tuned." },
      { title: "Learn the math and patterns behind gameplay", body: "Vectors, basic linear algebra, state machines, and common design patterns show up in almost every gameplay system." },
      { title: "Ship small games and collaborate", body: "Game jams and small team projects teach you to work with designers' requests, version control, and deadlines." },
      { title: "Show your code and apply", body: "Share clean, readable code on GitHub alongside playable builds, then apply for junior gameplay or generalist programmer roles." },
    ],
    skills: [
      { title: "Programming fundamentals", body: "Data structures, debugging, and writing code other people can read and change." },
      { title: "Game feel", body: "Tuning movement, input response, and feedback so mechanics feel good to play." },
      { title: "Math for games", body: "Vectors, transforms, and basic physics for movement, cameras, and collisions." },
      { title: "Working with designers", body: "Building systems with tunable values so designers can iterate without code changes." },
      { title: "Performance & profiling", body: "Finding and fixing slow code using the engine's profiler." },
    ],
    portfolio: [
      "Playable builds (ideally in the browser) of games or mechanics you programmed.",
      "Links to clean, documented source code on GitHub for at least one project.",
      "Short write-ups explaining a technical problem you solved and how.",
      "Videos showing the mechanics in action for quick review.",
      "Clear notes on what you did yourself in any team project.",
    ],
    faqs: [
      { question: "What programming language should a gameplay programmer learn?", answer: "C++ and C# are the most widely used. C++ is standard in Unreal Engine and many AAA studios, while C# is used in Unity. Learning one well makes the other much easier to pick up." },
      { question: "Do you need a computer science degree to be a gameplay programmer?", answer: "A degree helps, especially at larger studios, but it isn't strictly required. A portfolio of playable projects and readable code can demonstrate the same skills." },
      { question: "What's the difference between a gameplay programmer and an engine programmer?", answer: "Gameplay programmers build the features players interact with, such as movement, combat, and abilities. Engine programmers build the underlying technology, such as rendering, memory, and tools, that gameplay code runs on." },
      { question: "How much math do gameplay programmers need?", answer: "Mostly practical math: vectors, angles, interpolation, and some basic physics. You don't need advanced math for most gameplay work, but comfort with vectors is essential." },
    ],
  },

  "game-producer": {
    name: "Game Producer",
    steps: [
      { title: "Understand how games are made", body: "Learn the stages of development (concept, pre-production, production, alpha, beta, launch) and what each discipline needs at each stage." },
      { title: "Learn project management methods", body: "Get familiar with Agile and Scrum, sprint planning, backlogs, and tools like Jira, Trello, or Asana." },
      { title: "Produce real projects", body: "Volunteer to manage a game jam team, a student project, or an indie team. Planning, scoping, and shipping a real game is the best evidence you can show." },
      { title: "Get close to development", body: "Many producers start in QA, community, or associate producer roles where they learn how teams actually work day to day." },
      { title: "Build communication and leadership skills", body: "Producers spend most of their time aligning people, resolving blockers, and communicating clearly with the team and stakeholders." },
      { title: "Apply for associate or junior producer roles", body: "Highlight concrete results: games shipped, schedules kept, problems you solved, and how you supported the team." },
    ],
    skills: [
      { title: "Planning & scoping", body: "Breaking a game into milestones, estimating work, and cutting scope when needed." },
      { title: "Communication", body: "Keeping the team, leads, and stakeholders aligned with clear updates." },
      { title: "Risk management", body: "Spotting problems early and having a plan before they become crunch." },
      { title: "Team support", body: "Removing blockers and protecting the team's focus and wellbeing." },
      { title: "Basic budgeting", body: "Understanding costs, resources, and how decisions affect the schedule." },
    ],
    portfolio: [
      "Games you helped ship, with your specific production responsibilities.",
      "Examples of schedules, roadmaps, or sprint boards (with sensitive details removed).",
      "Short case studies of problems you solved, such as a scope cut or a missed milestone you recovered.",
      "Evidence of team leadership, such as running a game jam team or a student project.",
      "References from teammates who can speak to how you work.",
    ],
    faqs: [
      { question: "What does a game producer do day to day?", answer: "Producers plan and track the work, run meetings such as sprint planning and standups, remove blockers, manage scope and risks, and keep everyone, from the team to publishers, informed and aligned." },
      { question: "Do game producers need technical or art skills?", answer: "Not necessarily, but understanding how each discipline works makes you much more effective. Many producers have backgrounds in QA, design, or another development role." },
      { question: "How do you become a game producer with no experience?", answer: "Start by producing small projects such as game jams, student games, or indie teams, learn Agile methods and tools like Jira, and look for associate producer or QA roles that put you close to development." },
      { question: "What's the difference between a game producer and a project manager?", answer: "The roles overlap heavily. In many studios, producers also own broader responsibilities like stakeholder communication, external partners, and the overall vision, while project managers focus more on scheduling and tracking." },
    ],
  },
};
