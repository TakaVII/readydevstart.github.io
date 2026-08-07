export interface SearchItem {
  id: string;
  title: string;
  category: 'Quest Logs' | 'Equipment' | 'Blueprints' | 'Career Roles' | 'Job Boards' | 'General';
  description: string;
  url: string;
  icon: string;
  tags: string[];
}

export const searchItems: SearchItem[] = [
  // Quest Logs
  {
    id: 'quest-logs',
    title: 'Quest Logs Overview',
    category: 'Quest Logs',
    description: 'Step-by-step game development learning paths from ideation to launching on stores.',
    url: 'quest-logs/',
    icon: '🗺️',
    tags: ['guides', 'learning', 'tutorials', 'quest', 'path', 'fundamentals']
  },
  {
    id: 'getting-started',
    title: 'Getting Started Guide',
    category: 'Quest Logs',
    description: 'Your 10-minute quickstart to game development setup, mindsets, and core tools.',
    url: 'quest-logs/getting-started/',
    icon: '🚀',
    tags: ['setup', 'beginner', 'first steps', 'mindset', 'indie game academy']
  },
  {
    id: 'game-design-101',
    title: 'Game Design 101',
    category: 'Quest Logs',
    description: 'Core game mechanics, game loops, player motivation, level flow, and design frameworks.',
    url: 'quest-logs/game-design-101/',
    icon: '🎮',
    tags: ['design', 'mechanics', 'game loop', 'gameplay', 'prototyping']
  },
  {
    id: 'your-first-game',
    title: 'Your First Game',
    category: 'Quest Logs',
    description: 'Scope down, build a minimal playable prototype, and finish your very first game project.',
    url: 'quest-logs/your-first-game/',
    icon: '🕹️',
    tags: ['prototype', 'scoping', 'game jam', 'first project', 'completion']
  },
  {
    id: 'publishing-guide',
    title: 'Publishing Guide',
    category: 'Quest Logs',
    description: 'Steam, itch.io, iOS, Android, trailer polish, marketing setup, and store launch strategies.',
    url: 'quest-logs/publishing-guide/',
    icon: '📦',
    tags: ['steam', 'itch.io', 'marketing', 'store page', 'release', 'launch']
  },

  // Equipment
  {
    id: 'equipment',
    title: 'Equipment Hub',
    category: 'Equipment',
    description: 'Curated software and tool recommendations for game engines, art, audio, and management.',
    url: 'equipment/',
    icon: '⚔️',
    tags: ['tools', 'software', 'engines', 'workstation', 'equipment']
  },
  {
    id: 'game-engines',
    title: 'Game Engines',
    category: 'Equipment',
    description: 'Compare Unity, Unreal Engine, Godot, GameMaker, Construct 3, and specialized engines.',
    url: 'equipment/game-engines/',
    icon: '⚙️',
    tags: ['unity', 'unreal engine', 'godot', 'gamemaker', 'construct', 'engine']
  },
  {
    id: 'art-tools',
    title: 'Art & Design Tools',
    category: 'Equipment',
    description: 'Blender, Maya, Aseprite, Photoshop, Krita, Substance 3D, Spine, and pixel art software.',
    url: 'equipment/art-tools/',
    icon: '🎨',
    tags: ['blender', 'aseprite', 'photoshop', '3d modeling', '2d art', 'substance', 'spine']
  },
  {
    id: 'audio-tools',
    title: 'Audio Tools',
    category: 'Equipment',
    description: 'Reaper, FMOD, Wwise, Audacity, Ableton Live, FL Studio, and sound effect libraries.',
    url: 'equipment/audio-tools/',
    icon: '🎧',
    tags: ['reaper', 'fmod', 'wwise', 'sound design', 'music', 'sfx', 'daw']
  },
  {
    id: 'project-management',
    title: 'Project Management Tools',
    category: 'Equipment',
    description: 'Trello, Notion, Miro, HacknPlan, Jira, GitHub, PlasticSCM, and team collaboration.',
    url: 'equipment/project-management/',
    icon: '📋',
    tags: ['notion', 'trello', 'jira', 'hacknplan', 'github', 'version control', 'roadmap']
  },

  // Blueprints
  {
    id: 'blueprints',
    title: 'Blueprints Hub',
    category: 'Blueprints',
    description: 'Production-ready templates for game design, studio setup, pitch decks, and press kits.',
    url: 'blueprints/',
    icon: '📐',
    tags: ['templates', 'gdd', 'one pager', 'pitch deck', 'press kit', 'charter']
  },
  {
    id: 'studio-template',
    title: 'Studio Charter Template',
    category: 'Blueprints',
    description: 'Founding document template for indie game studios, equity sharing, values, and rules.',
    url: 'blueprints/studio-template/',
    icon: '🏢',
    tags: ['studio', 'indie', 'co-founders', 'legal', 'charter', 'contract']
  },
  {
    id: 'game-design-doc',
    title: 'Game Design Document (GDD)',
    category: 'Blueprints',
    description: 'Full GDD template covering gameplay mechanics, narrative, art direction, and audio plan.',
    url: 'blueprints/game-design-doc/',
    icon: '📄',
    tags: ['gdd', 'game design document', 'specification', 'mechanics', 'design']
  },
  {
    id: 'one-pager',
    title: 'IGA Game Design One Pager',
    category: 'Blueprints',
    description: 'Concise one-page summary template to pitch your game concept quickly and clearly.',
    url: 'blueprints/one-pager/',
    icon: '📑',
    tags: ['one pager', 'pitch', 'executive summary', 'concept', 'idea']
  },
  {
    id: 'pitch-deck',
    title: 'Publisher Pitch Deck Template',
    category: 'Blueprints',
    description: 'Slide-by-slide pitch deck blueprint for securing funding or publisher deals.',
    url: 'blueprints/pitch-deck/',
    icon: '📊',
    tags: ['pitch deck', 'publisher', 'funding', 'investors', 'budget', 'slides']
  },
  {
    id: 'press-kit',
    title: 'Indie Game Press Kit Template',
    category: 'Blueprints',
    description: 'Media kit blueprint for games press, streamers, content creators, and journalists.',
    url: 'blueprints/press-kit/',
    icon: '📰',
    tags: ['press kit', 'dopresskit', 'media', 'streamers', 'pr', 'marketing']
  },

  // Career Guide & Job Boards
  {
    id: 'career-guide',
    title: 'Career Guide Hub',
    category: 'Career Roles',
    description: 'Explore game industry career paths, salary benchmarks, skill requirements, and hiring tips.',
    url: 'career-guide/',
    icon: '🎯',
    tags: ['careers', 'jobs', 'roles', 'salaries', 'hiring', 'industry']
  },
  {
    id: 'job-boards',
    title: 'Game Industry Job Boards',
    category: 'Job Boards',
    description: 'Curated list of game dev job boards: Hitmarker, Work With Indies, GamesIndustry.biz, etc.',
    url: 'career-guide/job-boards/',
    icon: '💼',
    tags: ['job boards', 'hitmarker', 'work with indies', 'remote jobs', 'careers', 'hiring']
  },
  {
    id: 'career-resources',
    title: 'Career Resources & Communities',
    category: 'Job Boards',
    description: 'Discord gamedev databases, LinkedIn creators, portfolios, and networking networks.',
    url: 'career-guide/resources/',
    icon: '🌐',
    tags: ['discord', 'linkedin', 'networking', 'communities', 'mentors']
  },

  // Career Roles - Programming
  {
    id: 'role-gameplay-programmer',
    title: 'Gameplay Programmer',
    category: 'Career Roles',
    description: 'Implement character controls, combat systems, game logic, player interactions, and physics.',
    url: 'career-guide/roles/programming/gameplay-programmer/',
    icon: '💻',
    tags: ['programming', 'gameplay', 'c++', 'c#', 'unity', 'unreal', 'mechanics']
  },
  {
    id: 'role-ai-programmer',
    title: 'AI Programmer',
    category: 'Career Roles',
    description: 'Design enemy behaviors, state machines, behavior trees, pathfinding, and NPC routines.',
    url: 'career-guide/roles/programming/ai-programmer/',
    icon: '🤖',
    tags: ['ai', 'artificial intelligence', 'behavior trees', 'pathfinding', 'a*']
  },
  {
    id: 'role-engine-programmer',
    title: 'Engine Programmer',
    category: 'Career Roles',
    description: 'Build core rendering, memory management, low-level architecture, and engine systems.',
    url: 'career-guide/roles/programming/engine-programmer/',
    icon: '🔧',
    tags: ['engine', 'c++', 'rendering', 'performance', 'low level', 'memory']
  },
  {
    id: 'role-graphics-programmer',
    title: 'Graphics Programmer',
    category: 'Career Roles',
    description: 'Develop custom shaders, lighting pipelines, raytracing, HLSL/GLSL, and visual effects rendering.',
    url: 'career-guide/roles/programming/graphics-programmer/',
    icon: '✨',
    tags: ['graphics', 'shaders', 'hlsl', 'glsl', 'vulkan', 'directx', 'rendering']
  },

  // Career Roles - Design
  {
    id: 'role-game-designer',
    title: 'Game Designer',
    category: 'Career Roles',
    description: 'Craft systems, progression models, player emotions, game balance, and gameplay loops.',
    url: 'career-guide/roles/design/game-designer/',
    icon: '🎨',
    tags: ['game designer', 'systems', 'balancing', 'rules', 'mechanics']
  },
  {
    id: 'role-level-designer',
    title: 'Level Designer',
    category: 'Career Roles',
    description: 'Construct environments, blockouts, spatial pacing, encounter design, and environmental storytelling.',
    url: 'career-guide/roles/design/level-designer/',
    icon: '🗺️',
    tags: ['level design', 'whitebox', 'blockout', 'pacing', 'puzzles', 'encounters']
  },
  {
    id: 'role-narrative-designer',
    title: 'Narrative Designer & Writer',
    category: 'Career Roles',
    description: 'Write dialogue, world lore, quest structure, branching stories, and environmental narrative.',
    url: 'career-guide/roles/design/narrative-designer-writer/',
    icon: '✍️',
    tags: ['narrative', 'writer', 'dialogue', 'story', 'quests', 'lore']
  },

  // Career Roles - Art
  {
    id: 'role-concept-artist',
    title: 'Concept Artist',
    category: 'Career Roles',
    description: 'Visualize character designs, environments, props, moodboards, and art style keys.',
    url: 'career-guide/roles/art/concept-artist/',
    icon: '🖼️',
    tags: ['concept art', 'illustration', 'photoshop', 'character design', 'art direction']
  },
  {
    id: 'role-3d-modeling-artist',
    title: '3D Modeling Artist',
    category: 'Career Roles',
    description: 'Create high/low poly 3D assets, UV unwrapping, baking, and hard surface or organic modeling.',
    url: 'career-guide/roles/art/3d-modeling-artist/',
    icon: '🧊',
    tags: ['3d', 'blender', 'maya', 'zbrush', 'modeling', 'texturing']
  },
  {
    id: 'role-character-animator',
    title: 'Character Animator',
    category: 'Career Roles',
    description: 'Animate character locomotion, combat strikes, keyframes, rigging, and facial performances.',
    url: 'career-guide/roles/animation/character-animator/',
    icon: '🏃',
    tags: ['animation', 'character', 'keyframes', 'mocap', 'locomotion', 'rigging']
  },

  // Career Roles - Audio
  {
    id: 'role-sound-designer',
    title: 'Sound Designer',
    category: 'Career Roles',
    description: 'Record, synthesize, and integrate sound effects, weapon impacts, foley, and ambient soundscapes.',
    url: 'career-guide/roles/audio/sound-designer/',
    icon: '🔊',
    tags: ['sound design', 'sfx', 'fmod', 'wwise', 'audio', 'foley']
  },
  {
    id: 'role-composer',
    title: 'Game Music Composer',
    category: 'Career Roles',
    description: 'Compose adaptive soundtracks, interactive music systems, leitmotifs, and orchestral scores.',
    url: 'career-guide/roles/audio/composer/',
    icon: '🎵',
    tags: ['music', 'composer', 'soundtrack', 'adaptive audio', 'score']
  },

  // Career Roles - Production & Business
  {
    id: 'role-game-producer',
    title: 'Game Producer',
    category: 'Career Roles',
    description: 'Manage dev schedules, agile sprints, milestone deliverables, budgets, and team communication.',
    url: 'career-guide/roles/production/game-producer/',
    icon: '📈',
    tags: ['producer', 'scrum', 'agile', 'milestones', 'schedules', 'budget']
  },
  {
    id: 'role-community-manager',
    title: 'Community Manager',
    category: 'Career Roles',
    description: 'Grow Discord servers, engage player communities, handle social channels, and coordinate playtests.',
    url: 'career-guide/roles/marketing/community-manager/',
    icon: '💬',
    tags: ['community', 'discord', 'social media', 'players', 'marketing']
  },

  // About
  {
    id: 'about',
    title: 'About Ready Dev Start & Indie Game Academy',
    category: 'General',
    description: 'Learn about our mission, open source guides, Discord community, and leadership team.',
    url: 'about/',
    icon: '💡',
    tags: ['about', 'indie game academy', 'iga', 'mission', 'discord', 'community']
  }
];
