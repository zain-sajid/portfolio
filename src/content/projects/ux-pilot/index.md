---
title: 'UX Pilot - Figma Plugin'
description: 'Generate wireframes and code inside Figma using AI'
date: 'Mar 15 2025'
demoURL: 'https://www.figma.com/community/plugin/1257688030051249633/ux-pilot-ai-ui-generator-ai-wireframe-generator'
usesAI: true
---

![UX Pilot](/ux-pilot.png)

The UX Pilot team had a vision to supercharge the Figma workflow by allowing designers and developers to instantly generate wireframes from text prompts — and even convert those wireframes back into production-ready code.

This project was a fantastic opportunity to work at the intersection of AI and UI/UX tooling inside Figma itself.

---

## Features 💪🏻

- Generate high-fidelity wireframes from text descriptions using AI.
- Convert existing wireframes back into clean, semantic HTML and CSS code.
- Export generated wireframes to the UX Pilot web app.
- Built-in settings for controlling layout, spacing, and style themes.

---

## Stack 🛠

For this project, we used:

- **React** (for building the plugin’s UI)
- **Vite** (for a fast dev environment and optimized build output)
- **Figma Plugin API** (for interacting with the Figma document)

I switched the bundler to Vite which resulted in a much faster development experience (≈90% faster build times) 🔥

---

## My Role ✨

I was primarily responsible for two core modules:

- **HTML/CSS to Wireframe Parser**:  
  This module took HTML and CSS input and intelligently mapped it into a wireframe format that could be rendered inside the Figma canvas. I used DFS algorithm to optimize the speed of parsing the converted wireframes.

- **Wireframe to Code Generator**:  
  I also worked on the reverse pipeline — converting wireframe components back into clean, responsive HTML and Tailwind CSS, making it easier for designers to hand off work to developers.

- **Introducing Test Cases**:  
  I introduced test cases to make sure any future changes did not break our wireframe converter framework, this was important because we constantly need to make changes to this module to handle edge cases.

Both modules required careful design to handle edge cases, nested layouts, and semantic structure while keeping performance smooth inside Figma.

---

## Results 🚀

The plugin launched on the Figma Community with a strong reception, praised for its speed, ease of use, and the quality of both the wireframes and the code output. Till now, it has been used by over 100k users!

It was amazing to see how quickly users could go from idea → wireframe → code, all without leaving Figma.

---

## Challenges 🚧

One of the trickiest challenges was **translating complex HTML/CSS structures** into simplified Figma wireframes which has different properties and limitations as compared to CSS.

---
