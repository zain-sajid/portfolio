---
title: 'Vecto'
description: 'Scan vulnerabilities in your web applications easily'
date: 'Mar 18 2024'
demoURL: 'https://vecto-web.vercel.app'
repoURL: 'https://github.com/zain-sajid/vecto-web'
---

For the final year project of my bachelors degree at NUST, our group decided to build a web application for scanning vulnerabilities in our applications as developers since we were interested in cybersecuriy and wanted to explore this domain. The existing solutions on the market were not easy to use for developers so we focused on designing an easy to use interface while providing support for customizability.

I was responsible for designing and developing the frontend of the application while also writing some of the backend APIs in Go, Gin and GORM.

---

## Features 🔥

- Easily submit a URL to be scanned for common web vulnerabilities like SQL Injection, XSS, and outdated libraries.
- Get detailed scan reports, including severity levels, affected endpoints, and recommended fixes.
- User authentication and secure dashboard to view historical scan results.
- Ability to create your own templates for testing vulnerabilities

---

## Stack 🛠

For this project, I combined a modern frontend with a powerful backend:

- **Frontend**:
  - Next.js
  - Tailwind CSS
- **Backend**:
  - Golang
  - Gin
  - GORM
  - MySQL
- **Infrastructure**:
  - Vercel (Frontend Hosting)
  - DigitalOcean (API Server and Database)

I chose this architecture to keep the frontend fast and easily deployable, while giving the backend the flexibility and power needed for processing scans efficiently.

---

## Results ✨

The app launched successfully and was quickly adopted by a few developer communities for internal testing purposes.

Feedback highlighted how intuitive the UI was and how easy it was to get meaningful security insights without needing deep technical knowledge.

---

## Challenges 🚧

The biggest challenge was handling the asynchronous nature of running heavy vulnerability scans without blocking the API.

**Solution**: I implemented a queuing system with Goroutines and background workers in Go to offload scanning jobs while keeping the API responsive. Combined with careful API design and efficient database queries, this allowed scans to scale smoothly.

---
