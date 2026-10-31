import type { RoleGuide } from "../roleGuides";

export const marketingGuides: Record<string, RoleGuide> = {
  "campaign-specialist": {
    name: "Campaign Specialist",
    steps: [
      { title: "Learn how game marketing beats fit together", body: "Study the usual sequence of a game's marketing: announcement, trailer drops, store page launch, demo, festivals like Steam Next Fest, release, and post-launch updates. Knowing what each beat is for helps you plan campaigns around them." },
      { title: "Break down campaigns you admire", body: "Pick a few game campaigns (the case study collections linked below are a good start) and write down the goal, the audience, the channels used, and the call to action. Doing this repeatedly trains you to think in terms of objectives instead of individual posts." },
      { title: "Get hands-on with the core channels", body: "Learn the basics of paid social (Meta Ads, TikTok Ads), email with Mailchimp, scheduling with Hootsuite or Sprout Social, and a Discord server. You don't need to master each one, but you should know what they can and can't do." },
      { title: "Learn to measure results", body: "Get comfortable with Google Analytics, UTM links, and Steamworks traffic and wishlist reports. A campaign specialist is expected to say what worked and why, then adjust." },
      { title: "Run a real campaign for a small game", body: "Offer to plan a campaign for a friend's indie game, a game jam project, or a student team. A wishlist push before a festival or a launch-week plan gives you a complete story to tell, from brief to results." },
      { title: "Apply for marketing coordinator and junior roles", body: "Many campaign specialists start as marketing coordinators or assistants at studios, publishers, or game marketing agencies. Agencies in particular let you work on many campaigns in a short time." },
    ],
    skills: [
      { title: "Campaign planning", body: "Turning a goal like more wishlists or a successful update into a timeline, budget, channel mix, and set of deliverables." },
      { title: "Data analysis", body: "Reading dashboards and reports, spotting what is underperforming, and deciding where to move budget or effort." },
      { title: "Creative direction", body: "Writing clear briefs for artists, video editors, and copywriters, and giving useful feedback on ads, key art, and trailers." },
      { title: "Cross-team coordination", body: "Keeping PR, community, social, and the dev team working toward the same dates and message." },
      { title: "Budget and vendor management", body: "Tracking spend, comparing quotes from agencies or freelancers, and making sure money goes where it has the most effect." },
    ],
    portfolio: [
      "Two or three campaign case studies, each with the goal, audience, channels, timeline, and outcome.",
      "Sample campaign briefs or plans that show how you organize work for a team.",
      "Examples of creative you directed or wrote, such as ad variations, emails, or social posts.",
      "Screenshots of results from analytics or Steamworks (with sensitive numbers removed if needed) and what you changed because of them.",
      "A short note on what you would do differently next time, which shows you learn from each campaign.",
    ],
    faqs: [
      { question: "What does a campaign specialist do in the video game industry?", answer: "A campaign specialist plans, runs, and measures marketing campaigns for a game, such as a launch, a festival demo push, or a major update. They coordinate channels like paid ads, social media, email, influencers, and events so they all support one goal." },
      { question: "How do I become a marketing campaign specialist for games with no experience?", answer: "Run a campaign for a small indie game or student project, learn the main ad and analytics platforms, and document the results as a case study. Then apply for marketing coordinator or assistant roles at studios, publishers, or game marketing agencies." },
      { question: "What tools should a game campaign specialist learn?", answer: "Start with Google Analytics, Steamworks reports, an ad platform such as Meta Ads or TikTok Ads, a scheduler like Hootsuite or Sprout Social, and Mailchimp for email. Canva is useful for quick creative mockups." },
      { question: "What is the difference between a campaign specialist and a performance marketer?", answer: "A campaign specialist manages the whole campaign across many channels, including organic social, PR, influencers, and events. A performance marketer focuses mainly on paid acquisition and optimizing ads against measurable results like installs or purchases." },
    ],
  },

  "community-manager": {
    name: "Community Manager",
    steps: [
      { title: "Get active in game communities", body: "Spend real time in Discord servers, subreddits, and forums for games you play. Notice how good communities are moderated, how announcements are written, and how developers talk to players." },
      { title: "Volunteer as a moderator", body: "Moderating a Discord server, subreddit, or fan community is one of the most common ways into community management. It teaches you to enforce rules fairly, calm conflicts, and handle difficult people." },
      { title: "Learn the tools of the job", body: "Get comfortable setting up a Discord server with roles, channels, and bots, and learn a scheduler like Hootsuite or Buffer. Basic graphics in Canva and simple video edits are often expected on small teams." },
      { title: "Practice gathering and reporting feedback", body: "Collect player feedback from a community you're part of and summarize it into a short report: top issues, common requests, and overall mood. Turning noisy feedback into something a dev team can act on is a core part of the role." },
      { title: "Build a community of your own", body: "Start a Discord or social presence for a small game, a game jam team, or a fan project. Growing even a small, active group and running a few events gives you concrete experience to talk about." },
      { title: "Apply for junior and support roles", body: "Look for junior community manager, community moderator, and player support roles. Resources like the GamesIndustry.biz guide on getting a community manager job (linked below) explain what studios look for." },
    ],
    skills: [
      { title: "Clear, friendly writing", body: "Writing patch notes, announcements, and replies that sound human and stay on the studio's voice." },
      { title: "Moderation and conflict handling", body: "Applying rules consistently, de-escalating heated threads, and knowing when to step in or step back." },
      { title: "Empathy and patience", body: "Understanding why players are frustrated and responding calmly, even when the feedback is harsh." },
      { title: "Feedback synthesis", body: "Spotting patterns across many messages and passing the important ones to developers in a useful form." },
      { title: "Event planning", body: "Running contests, community nights, AMAs, and livestreams that give players a reason to show up." },
    ],
    portfolio: [
      "Communities you've moderated or built, with a description of your role and what you changed.",
      "Writing samples such as announcements, patch notes, or event posts.",
      "An example feedback report that turns community comments into clear points for a dev team.",
      "Events you organized, with what you planned, how you promoted it, and how players responded.",
      "Examples of how you handled a difficult situation, written without naming or exposing community members.",
    ],
    faqs: [
      { question: "How do you become a community manager for video games?", answer: "Most people start by moderating Discord servers or subreddits, then build or manage a community for a small game. Combine that with strong writing samples and apply for junior community manager, moderator, or player support roles." },
      { question: "What does a game community manager do day to day?", answer: "They post updates and announcements, answer player questions, moderate Discord and social channels, run events, and collect feedback for the development team. They also help handle tense moments, such as a bad update or a server outage." },
      { question: "Is being a Discord moderator good experience for a community manager job?", answer: "Yes. Moderating teaches rule enforcement, conflict handling, and server management, which are all daily parts of community management. Be ready to explain specific situations you handled and what you learned." },
      { question: "What is the difference between a community manager and a social media manager in games?", answer: "A community manager focuses on relationships and conversation with existing players, often in Discord and forums, and passes feedback to developers. A social media manager focuses on publishing content and growing reach across public social platforms." },
    ],
  },

  "content-marketer": {
    name: "Content Marketer",
    steps: [
      { title: "Learn content strategy basics", body: "Understand how content supports goals like awareness, wishlists, and retention. Guides such as HubSpot's and Semrush's content marketing guides (linked below) explain audience research, content pillars, and editorial calendars." },
      { title: "Study how games tell their story outside the game", body: "Look at devlogs, Steam store pages, update posts, trailers, and blogs from games you like. Notice how each piece gives players a reason to care and a next step, like wishlisting or joining Discord." },
      { title: "Build writing and video skills", body: "Practice clear, punchy copy and learn basic video editing in Premiere Pro or a similar tool. Short gameplay clips, GIFs, and trailers are some of the most useful content a game can have." },
      { title: "Learn SEO and analytics", body: "Get familiar with keyword research in Semrush or Ahrefs, publishing on WordPress, and tracking results in Google Analytics. Knowing what people search for helps your blog posts and guides get found." },
      { title: "Create content for a real game", body: "Write a devlog series, cut a trailer, or plan a month of content for an indie or game jam project. Real content with real results is far more convincing than mock samples." },
      { title: "Apply to studios, publishers, and agencies", body: "Look for content marketing, marketing coordinator, and copywriter roles. Game marketing agencies and publishers often hire for content work across several titles at once." },
    ],
    skills: [
      { title: "Copywriting", body: "Writing store page text, headlines, emails, and posts that are short, clear, and make players want to act." },
      { title: "Video and visual editing", body: "Cutting gameplay into clips and trailers, and making simple graphics in Photoshop or Canva." },
      { title: "SEO", body: "Researching search terms and structuring articles and pages so players can find them." },
      { title: "Editorial planning", body: "Running a content calendar in Trello or Asana that lines up with updates, sales, and events." },
      { title: "Measuring content performance", body: "Tracking traffic, engagement, and conversions so you know which formats to make more of." },
    ],
    portfolio: [
      "A mix of formats: written articles or devlogs, short videos or trailers, and social posts.",
      "At least one Steam store page or landing page you wrote or rewrote, with your reasoning.",
      "A sample content calendar or strategy showing how pieces support a launch or update.",
      "Results for published pieces where you have them, such as traffic, views, or wishlist changes.",
      "Samples written in different brand voices to show you can adapt to a studio's style.",
    ],
    faqs: [
      { question: "What does a content marketer do for a video game?", answer: "A content marketer plans and creates the material that promotes a game, such as devlogs, blog posts, trailers, store page copy, newsletters, and social clips. They also track how that content performs and adjust the plan." },
      { question: "How do I get into content marketing in the games industry?", answer: "Build a portfolio of game-related content, ideally for a real indie project, and learn basic SEO and analytics. Then apply for content marketing, copywriting, or marketing coordinator roles at studios, publishers, or game marketing agencies." },
      { question: "Do game content marketers need video editing skills?", answer: "It helps a lot. Gameplay clips, GIFs, and trailers are central to game marketing, so being able to cut basic videos in Premiere Pro or a similar editor makes you more useful, especially on small teams." },
      { question: "Is SEO important for marketing a video game?", answer: "It matters for websites, blogs, guides, and wikis, where players search for information about a game. Discovery on stores like Steam depends more on the platform's own systems, so SEO is one tool among several." },
    ],
  },

  "influencer-marketer": {
    name: "Influencer Marketer",
    steps: [
      { title: "Watch the creators your players watch", body: "Spend time on Twitch, YouTube, and TikTok in the genres you want to market. Learn what kinds of games each creator plays, how they talk to their audience, and what makes a sponsored segment feel natural or forced." },
      { title: "Learn how creator outreach works", body: "Understand the common approaches: sending free keys, paid sponsorships, early access, and creator programs. Key distribution services like Keymailer, and creator discovery tools like Social Blade, are standard parts of the workflow." },
      { title: "Learn disclosure rules", body: "Read the FTC's guidance on endorsements and sponsored content. You will be responsible for making sure paid partnerships are clearly disclosed." },
      { title: "Build and manage a creator list", body: "Practice by building a spreadsheet of creators for a real indie game: channel, audience, genre fit, contact info, and notes. Organizing and tracking outreach is a big part of the job." },
      { title: "Run outreach for a small game", body: "Offer to handle creator outreach for an indie game or demo. Writing pitches, sending keys, following up, and tracking who covered the game gives you a real campaign to show." },
      { title: "Apply to studios, publishers, and agencies", body: "Look for influencer marketing, creator relations, or marketing coordinator roles. Agencies that specialize in game influencer campaigns are a common entry point." },
    ],
    skills: [
      { title: "Creator research", body: "Judging whether a creator's audience, tone, and content actually fit your game, beyond follower counts." },
      { title: "Relationship building", body: "Being reliable and respectful with creators so they want to work with you again." },
      { title: "Negotiation", body: "Agreeing on deliverables, timelines, usage rights, and payment in a way that is fair to both sides." },
      { title: "Organization", body: "Tracking dozens of contacts, keys, deadlines, and deliverables without letting anything slip." },
      { title: "Reporting", body: "Measuring views, engagement, and wishlist or sales changes after coverage, and explaining the results to your team." },
    ],
    portfolio: [
      "Influencer campaigns you ran, with the goal, the creators involved, and the results.",
      "A sample outreach email or pitch that shows how you approach creators.",
      "A creator shortlist with your reasoning for why each one fits the game.",
      "Examples of briefs or asset packs you gave creators, such as key talking points, footage, and dos and don'ts.",
      "A short reflection on what drove results and what you'd change.",
    ],
    faqs: [
      { question: "How do you become an influencer marketer for video games?", answer: "Learn the creator landscape for the genres you care about, practice outreach for an indie game, and track the results in a simple case study. Then apply for influencer marketing or creator relations roles at studios, publishers, or agencies." },
      { question: "How do game studios find streamers and YouTubers to promote their games?", answer: "They research creators who already play similar games, use tools like Social Blade or influencer platforms such as Upfluence to compare channels, and use key distribution services like Keymailer to reach many creators at once." },
      { question: "Do game influencer campaigns have to be disclosed?", answer: "Yes. In the US, the FTC requires clear disclosure when a creator is paid or receives something of value to promote a product. Other countries have similar rules, so check the requirements for each market." },
      { question: "What is the difference between influencer marketing and PR for games?", answer: "PR mostly works with journalists and media outlets to earn coverage like reviews and previews. Influencer marketing works with streamers and content creators, often through paid sponsorships or free keys, to reach their audiences directly." },
    ],
  },

  "performance-marketer": {
    name: "Performance Marketer",
    steps: [
      { title: "Learn the core metrics", body: "Understand cost per install (CPI), cost per acquisition, retention, return on ad spend (ROAS), and lifetime value (LTV). These terms show up in nearly every performance marketing conversation in games." },
      { title: "Learn the major ad platforms", body: "Get hands-on with Google Ads, Meta Ads Manager, and TikTok Ads. Free courses and certifications from the platforms themselves teach campaign setup, targeting, and bidding." },
      { title: "Understand attribution and mobile measurement", body: "Learn how mobile measurement partners like AppsFlyer, Adjust, and Singular track where installs come from, and how privacy changes on iOS and Android affect tracking." },
      { title: "Build strong spreadsheet and analysis skills", body: "Much of the job happens in spreadsheets and dashboards. Practice pivot tables, cohort analysis, and building simple reports that compare channels and creatives." },
      { title: "Run a small paid test", body: "With a small budget, run ads for an indie game, demo, or even a personal project, and track the results. Testing different creatives and audiences gives you a real example of how you make decisions from data." },
      { title: "Apply for UA and paid media roles", body: "Look for junior user acquisition (UA) manager, paid social, or marketing analyst roles at mobile and free-to-play studios, publishers, or ad agencies." },
    ],
    skills: [
      { title: "Data analysis", body: "Reading campaign data, building cohorts, and telling the difference between real trends and noise." },
      { title: "Creative testing", body: "Setting up structured A/B tests on ad creative, copy, and audiences, and acting on the results." },
      { title: "Budget management", body: "Shifting spend between channels and campaigns based on performance, and keeping within budget." },
      { title: "Attribution knowledge", body: "Understanding how installs and purchases are credited to campaigns and where that data can be misleading." },
      { title: "Privacy awareness", body: "Knowing the basics of GDPR, CCPA, and platform tracking rules that affect what data you can use." },
    ],
    portfolio: [
      "Case studies of paid campaigns you ran, including the goal, setup, tests, and outcome.",
      "Examples of creative tests with what you tested, what won, and what you did next.",
      "A sample dashboard or report (with real figures removed if they are confidential).",
      "Platform certifications from Google Ads or Meta, if you have them.",
      "A short write-up showing how you diagnosed a campaign that wasn't working.",
    ],
    portfolioTitle: "What to Show as a Performance Marketer",
    portfolioIntro: "Performance marketing hires are judged on how they make decisions from data. These are the kinds of examples worth bringing to an interview or including in an application:",
    faqs: [
      { question: "What does a performance marketer do in mobile games?", answer: "A performance marketer runs paid campaigns that bring in new players, usually on ad networks and social platforms, and optimizes them against measurable goals like installs, retention, and revenue. In mobile games this role is often called user acquisition (UA)." },
      { question: "What is user acquisition in the game industry?", answer: "User acquisition is the work of bringing new players into a game, mostly through paid advertising. UA teams buy ads, test creatives, and measure which channels bring players who stay and spend." },
      { question: "What tools do game performance marketers use?", answer: "Common tools include ad platforms like Google Ads, Meta Ads, and TikTok Ads, mobile measurement partners like AppsFlyer, Adjust, and Singular, market data tools like Sensor Tower, and analytics tools like Google Analytics or GameAnalytics." },
      { question: "Do you need a marketing degree to work in game user acquisition?", answer: "No. Hiring usually focuses on analytical skill and hands-on platform experience. A background in marketing, business, economics, or data can help, but certifications and real campaign results matter more." },
    ],
  },

  "pr-specialist": {
    name: "PR Specialist",
    steps: [
      { title: "Learn how game PR works", body: "Understand the main tools of the job: press releases, press kits, embargoes, review codes, previews, and interviews. The game PR overviews in the learning resources (linked below) cover the basics well." },
      { title: "Read the outlets you would pitch", body: "Follow game sites, newsletters, and podcasts in the genres you care about, and note which writers cover which kinds of games. Good pitches go to the right person, not to everyone." },
      { title: "Build a press kit", body: "Put together a complete press kit for an indie game, with a fact sheet, description, screenshots, trailer, logos, and contact info. Our Press Kit Guide (linked below) walks through what to include." },
      { title: "Practice writing press releases and pitches", body: "Write short, clear announcements and personalized pitch emails. Journalists receive a lot of email, so a strong subject line and a clear reason to care matter." },
      { title: "Run outreach for a small game", body: "Offer to handle press for an indie game launch or demo. Build a media list, send pitches and keys, follow up politely, and track coverage. This gives you real results to show." },
      { title: "Apply to PR agencies, publishers, and studios", body: "Look for PR assistant, account executive, or communications coordinator roles. Game PR agencies are a common starting point because you work on many titles and build media contacts quickly." },
    ],
    skills: [
      { title: "Writing", body: "Producing press releases, pitches, and talking points that are accurate, clear, and easy for journalists to use." },
      { title: "Media relationships", body: "Knowing who covers what, respecting deadlines and embargoes, and being a reliable contact." },
      { title: "Crisis communication", body: "Responding calmly and honestly when something goes wrong, such as a delay, a broken launch, or a controversy." },
      { title: "Event and interview prep", body: "Organizing press previews and interviews, and preparing developers with key messages and likely questions." },
      { title: "Coverage tracking", body: "Monitoring and reporting coverage with tools like Muck Rack, Cision, or Meltwater, plus manual searches." },
    ],
    portfolio: [
      "Press releases and pitch emails you've written, ideally for real games.",
      "A press kit you built, linked or attached.",
      "Coverage reports showing the outlets and creators that covered a game you worked on.",
      "A media list sample (with personal contact details removed) that shows how you research and organize contacts.",
      "A short case study of a PR campaign, from plan to coverage to what you learned.",
    ],
    faqs: [
      { question: "What does a game PR specialist do?", answer: "A game PR specialist gets a game covered by media. They write press releases, pitch journalists, send review codes, organize previews and interviews, manage press kits, and handle communication when problems arise." },
      { question: "How do I get into video game PR?", answer: "Learn the basics of press kits and pitching, run press outreach for an indie game, and collect the coverage you earn. Then apply for entry-level roles at game PR agencies, publishers, or studios." },
      { question: "What should be in a video game press kit?", answer: "A good press kit includes a fact sheet (title, developer, platforms, release date, price), a short description, key features, screenshots, a trailer, logos and key art, and contact details for press inquiries." },
      { question: "What is an embargo in game PR?", answer: "An embargo is an agreement that journalists can receive information or review copies early but won't publish until a set date and time. It gives outlets time to prepare coverage while keeping the release coordinated." },
    ],
  },

  "social-media-specialist": {
    name: "Social Media Specialist",
    steps: [
      { title: "Study how games use each platform", body: "Follow games and studios on X, TikTok, Instagram, YouTube, Bluesky, and Reddit. Notice how the same update is presented differently on each platform and which posts get people talking." },
      { title: "Learn to make platform-native content", body: "Practice short vertical video, GIFs, screenshots with strong captions, and threads. Editing clips in Premiere Pro or Filmora and making graphics in Canva or Photoshop are everyday tasks." },
      { title: "Learn scheduling and analytics tools", body: "Get comfortable with a scheduler like Hootsuite, Buffer, or Sprout Social, and the built-in analytics on each platform, such as YouTube Analytics and TikTok for Business." },
      { title: "Grow an account of your own", body: "Run a social account for an indie game, a game jam project, or a gaming niche you know well. Posting consistently and reviewing what works shows you can build an audience." },
      { title: "Learn the basics of paid social", body: "Understand how boosted posts and simple ad campaigns work on Meta and TikTok. Many social roles include some paid promotion alongside organic posting." },
      { title: "Apply for social media and marketing coordinator roles", body: "Look for social media coordinator, specialist, or marketing assistant roles at studios, publishers, and agencies. Link your best accounts and posts directly in your application." },
    ],
    skills: [
      { title: "Short-form writing", body: "Writing captions and posts that are quick to read, match the game's voice, and fit each platform." },
      { title: "Video and graphics", body: "Turning gameplay into clips, memes, and visuals that stop people from scrolling past." },
      { title: "Trend awareness", body: "Spotting relevant trends and formats early, and knowing which ones fit the game and which to skip." },
      { title: "Community engagement", body: "Replying to players, sharing fan art with permission, and keeping the tone positive even when comments aren't." },
      { title: "Analytics", body: "Reading reach, engagement, and click data to decide what to post more or less of." },
    ],
    portfolio: [
      "Links to accounts you've run, with a description of your role and what changed while you managed them.",
      "Your best individual posts and clips, with a sentence on why you think each one worked.",
      "A sample content calendar for a launch, update, or event.",
      "Examples of the same announcement adapted for different platforms.",
      "Simple before-and-after analytics where you have them, such as follower growth or engagement on a campaign.",
    ],
    faqs: [
      { question: "How do I become a social media manager for a game company?", answer: "Build experience by running social accounts for indie games or gaming niches, learn scheduling and analytics tools, and collect your best posts and results. Then apply for social media coordinator or specialist roles at studios, publishers, or agencies." },
      { question: "What platforms should a game social media specialist know?", answer: "Most game teams use X, TikTok, Instagram, YouTube, and Reddit, plus Discord for community. The right mix depends on the game's audience, so knowing how to choose platforms matters as much as knowing each one." },
      { question: "What kind of content works best for promoting indie games on social media?", answer: "Short gameplay clips and GIFs that show something interesting in the first few seconds tend to work well, along with behind-the-scenes development posts, fan art shares, and clear calls to action like wishlisting on Steam." },
      { question: "What's the difference between a social media specialist and a content marketer in games?", answer: "A social media specialist focuses on publishing and engaging on social platforms day to day. A content marketer plans and creates a wider range of content, including blogs, store page copy, newsletters, and trailers, which social media then helps distribute." },
    ],
  },
};
