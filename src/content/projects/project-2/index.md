---
title: 'Study Mind - Interview Platform'
description: 'Prepare for medical school interviews with AI feedback'
date: 'Jan 01 2025'
demoURL: 'https://ai.studymind.co.uk'
usesAI: true
---

![Study Mind](/study-mind.png)

With the rise of LLM models such as GPT-4, the team at Study Mind UK wanted a new platform for their students where they could practice their interviewing skills for medical schools.

The project seemed like an exciting opportunity to develop an AI platform, so I took the responsibility of converting their requirements into a fully functional platform, responsible for both its design and development.

---

## Features 💪🏻

- The platform provided a list of commonly asked questions in med school interviews.
- Students could submit their answers as either video or audio recordings.
- Students then had the opportunity to get these answers graded by AI or real tutors with detailed feedback for key areas of improvement.
- The platform also had an admin side for:
  - Adding new questions
  - Checking transaction history
  - Assigning questions to tutors
  - And more.

---

## Stack 🛠

I decided to use the **T3 Stack** popularized by the YouTuber [Theo](https://www.youtube.com/@t3dotgg), which included:

- TypeScript
- Next.js
- Tailwind CSS
- tRPC
- DrizzleORM

I chose this stack because I was already proficient with React and Next.js, and had read about the great developer experience with both tRPC and Drizzle.

For quick design and development of the UI, I decided to use components from [Tailwind UI](https://tailwindcss.com/plus), which provides comprehensive components for web apps.

---

## Results ✨

I was able to release the platform to users with very positive feedback from both the users and the Study Mind team, especially regarding the user experience.

It turned out to be one of the most fun projects to work on because of the tools I got to use and the results achieved.

You can view the deployed project here: [ai.studymind.co.uk](https://ai.studymind.co.uk/)

---

## Challenges 🚧

The main challenge I encountered when developing the platform was recording videos on the browser.

Every browser and OS used a different video codec for recording, which was discovered during cross-browser testing of the app. This caused issues on the backend when creating transcripts for the videos.

**Solution**: I used **FFmpeg** in Node.js to convert all videos to the same codec to ensure compatibility.

---
