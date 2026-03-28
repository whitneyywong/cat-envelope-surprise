# Security Policy

## Overview

**cat-envelope-surprise** is a lightweight, client-side static web project built with pure HTML, CSS, and vanilla JavaScript. It contains no backend services, no server-side code, no third-party dependencies, and does not collect or process any user data.

Because of its nature, the attack surface is very small. Most "vulnerabilities" would be limited to client-side issues (e.g., XSS via user-supplied assets) that only affect the person opening the file locally or on GitHub Pages.

## Supported Versions

Only the latest release (`main` branch and the most recent tagged version) is actively supported.

## Reporting a Vulnerability

If you discover a security issue in this project, we appreciate your responsible disclosure.

Please report it by opening a **private vulnerability report** on GitHub:

1. Go to the [Security tab](https://github.com/whitneyywong/cat-envelope-surprise/security) of this repository.
2. Click **"Report a vulnerability"**.
3. Fill in the details (description, steps to reproduce, potential impact).


Please include:
- A clear description of the vulnerability
- Steps to reproduce the issue
- Any potential impact (e.g., affects self-XSS when opening a malicious video thumbnail, etc.)
- Suggested fix (if you have one)

We aim to acknowledge reports within 48 hours and provide a fix or response as soon as possible.

## What We Consider a Security Issue

- Cross-site scripting (XSS) via the video player or thumbnail
- Issues that could leak information when the page is hosted on GitHub Pages
- Problems with the 3D transforms or animations that could cause unexpected behavior in certain browsers
- Any way malicious assets could affect the envelope experience

**Note**: Issues like "the confetti animation is laggy" or pure visual bugs are **not** security issues — please report those via regular GitHub Issues instead.

## Security Best Practices for Users

- Always open the `index.html` file locally or on a trusted hosting service.
- Only use your own trusted `video.mp4` and `thumbnail.png` files in the `assets/` folder.
- For public sharing, host the project on GitHub Pages or another trusted static host.

## Disclosure Policy

We follow responsible disclosure. We will:
- Keep the reporter’s identity private unless they wish otherwise.
- Credit the reporter in the fix (if desired).
- Release a patched version as soon as reasonably possible.

Thank you for helping keep this fun little project safe! 💌🐈‍⬛

---

*Last updated: March 2026*
