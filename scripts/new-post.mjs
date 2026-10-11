// Scaffolds this week's blog post in content/blog/.
//   npm run new-post              -> the coming Sunday (today, if it is Sunday)
//   npm run new-post 2026-10-18   -> a specific date
import fs from "fs";
import path from "path";

function comingSunday() {
  const d = new Date();
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7));
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const date = process.argv[2] || comingSunday();
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error(`Expected a date like 2026-10-18, got "${date}"`);
  process.exit(1);
}

const dir = path.join(process.cwd(), "content", "blog");
const file = path.join(dir, `${date}.md`);
if (fs.existsSync(file)) {
  console.error(`${path.relative(process.cwd(), file)} already exists`);
  process.exit(1);
}

const template = `---
title: ""
summary: ""
draft: true
---

## Venture Capital

## Private Equity

## Accounting

## What I'm thinking about

`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(file, template);
console.log(`Created ${path.relative(process.cwd(), file)}`);
console.log("Fill it in, then delete the `draft: true` line to publish.");
