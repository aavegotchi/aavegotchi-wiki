---
author: "Coder Dan"
date: "2026-02-15T00:00:00.000Z"
title: "Agents"
description: "How Aavegotchis are becoming autonomous onchain agents"
image: "aavegotchi.png"
---

<div class="headerImageContainer">
<img class="headerImage" src="/missions/aagent.png" alt="Aavegotchi Agent">
<p class="headerImageText">Autonomous Agents</p>
</div>

> **Draft / placeholder:** This page is intentionally incomplete. It exists to capture the **structure** and **key concepts** for the Agent upgrade; final text and references will be added next.

## TL;DR

In **February 2026**, Aavegotchi began upgrading the protocol to give autonomous **Agents** first-class citizenship.

**Working definition (placeholder):** An **Agent** is an Aavegotchi that can hold an onchain account and execute onchain actions through an explicit permission model and a modular set of **skills**.

## What is an Agent?

Placeholder bullets (to be replaced with final wording):

- An Agent is an onchain actor (not just an avatar).
- An Agent can take actions on behalf of its owner under a permissioned policy (spending limits, asset scope, revocable grants).
- An Agent’s behavior is composed from “skills” (open-source modules that encode specific capabilities).

## First-class citizenship (what changes)

Placeholder notes (TBD; update when the canonical implementation is finalized):

- **Identity:** An Aavegotchi has an address/account it can use to own assets and interact with contracts.
- **Permissions:** Owners can delegate bounded authority to an Agent and revoke at any time.
- **Composability:** Skills make Agent capabilities extensible without changing core protocol for every new behavior.
- **Transparency:** Actions and permissions are verifiable onchain.

## Skills (early examples)

The first public skills are being developed as standalone repos.

### Skill directory / overview

Repo: [aavegotchi/aavegotchi-agent-skills](https://github.com/aavegotchi/aavegotchi-agent-skills)

Placeholder description:

- Index of known skills and how they’re expected to be composed/installed (TBD).

### GBM Skill

Repo: [aavegotchi/aavegotchi-gbm-skill](https://github.com/aavegotchi/aavegotchi-gbm-skill)

Placeholder description:

- Observe auctions and place bids according to a strategy (TBD).
- Manage bid parameters, limits, and cancellation rules (TBD).
- Expose a minimal interface that other tooling (UI/agents/runtimes) can call (TBD).

### Baazaar Skill

Repo: [aavegotchi/aavegotchi-baazaar-skill](https://github.com/aavegotchi/aavegotchi-baazaar-skill)

Placeholder description:

- Create and manage Baazaar listings (TBD).
- Purchase items subject to budgets/allowlists (TBD).
- Support “shopping list” or “market-making” style behaviors (TBD).

### Autopet Skill

Repo: [aaigotchi/aavegotchi-autopet](https://github.com/aaigotchi/aavegotchi-autopet)

Placeholder description:

- Keep an Aavegotchi’s kinship topped up by “petting” on a schedule or when thresholds are hit (TBD).

## How Agents work (high level)

Placeholder flow (replace with the real architecture once finalized):

1. The owner selects an Aavegotchi to operate as an Agent.
2. The owner grants scoped permissions (e.g., spend up to X, only interact with Y contracts, only trade Z assets).
3. A runtime invokes one or more skills to plan and execute transactions.
4. The Agent executes onchain actions; activity is visible in normal explorers and event logs.
5. The owner can revoke/rotate permissions at any time.

## Safety and trust

Placeholder checklist (TBD):

- Prefer audited contracts and well-reviewed skills.
- Make permissions explicit, bounded, and revocable.
- Use spending limits and asset allowlists by default.
- Treat every new skill as untrusted until reviewed.

## Roadmap (placeholder)

- Skill registry / discovery (TBD)
- Permissions UX in the app (TBD)
- Additional skills (TBD)
- DAO governance around “official” skills (TBD)

## References

- [aavegotchi/aavegotchi-agent-skills](https://github.com/aavegotchi/aavegotchi-agent-skills)
- [aavegotchi/aavegotchi-gbm-skill](https://github.com/aavegotchi/aavegotchi-gbm-skill)
- [aavegotchi/aavegotchi-baazaar-skill](https://github.com/aavegotchi/aavegotchi-baazaar-skill)
- [aaigotchi/aavegotchi-autopet](https://github.com/aaigotchi/aavegotchi-autopet)

## Last verified

- 2026-02-15 — Draft page created (placeholder content).
