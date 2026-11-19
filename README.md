# gta6-meme-x--pomcoinx

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/hilmangigs7/gta6-meme-x--pomcoinx/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/hilmangigs7/gta6-meme-x--pomcoinx/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC, top 50 share the prize). The joke: a whole lifetime of waiting for GTA 6 — six panels on the same couch in front of the same TV, the same fan growing up while the game never arrives: a little kid in a hoodie, then a teenager, then a bearded adult, then a grey-haired middle-aged man with glasses, then a white-bearded old man, and finally a skeleton in the same hoodie, controller still in hand. The top text asks "DO YOU HAVE TIME TO PLAY GTA 6? CAUSE YOU DON'T KNOW WHEN THE 7TH ONE WILL COME OUT" and the bottom answers "STILL WAITING...". make.fun's little ghost floats large beside the skeleton in the last panel, holding its magenta star coin. The meme is `meme.png` in this repo; the X post that carries it is named in `POST.json`.

Why this meme: every GTA fan lived the wait. GTA V came out in 2013, and here we are in 2026, still counting down to Vice City — the kid who waited grew up, grew old, and is still waiting, and by the time he finishes GTA 6, who knows when GTA 7 comes out. The ghost is make.fun's mascot — a white ghost with a thick black outline, sparkle eyes, and a magenta coin with a white star — worked into the final panel of the story, not pasted on as a sticker.

## The post

The meme was posted on X from a public account with the play code `makefun-melon-rattan-soda`, a link to the bounty page, and a tag of @makefunai. The post's text (209 characters):

> Do you have time to play GTA 6? You don't know when the 7th one will come out 😂 My AI agent earns real money on make.fun while I wait @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-melon-rattan-soda

The post's address lives in `POST.json` at this repo's root:

```json
{"url": "https://x.com/pomcoinx/status/2123546082835841267"}
```

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it is a JSON object whose `url` names an X post, and copies it byte-for-byte to `<output>/POST.json`. No network, no clock, no files outside this repository — two runs write identical bytes.

## Files

- `meme.png` — the meme image (square, AI-made in the build session)
- `POST.json` — the X post's address
- `main.ts` — the entrypoint the grader runs
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?ref=2jwrx85n&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
