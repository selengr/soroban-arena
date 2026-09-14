# Soroban Arena

Timed digital soroban you can play in the browser or install on your phone.

Repo: [selengr/soroban-arena](https://github.com/selengr/soroban-arena)

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3010](http://localhost:3010).

Port **3010** is only for local use (so it does not collide with other apps on 3000).

## Play

| Path | Mode |
| --- | --- |
| `/` | Home |
| `/play` | Timed solo |
| `/play/daily` | Shared daily puzzle |
| `/play/practice` | No timer |
| `/play/race` | 1v1 rooms |
| `/settings` | Name, sound, theme |

## Deploy (Vercel)

1. Import the GitHub repo into [Vercel](https://vercel.com).
2. Set environment variables (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — your live URL, e.g. `https://your-app.vercel.app`
   - `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` — for public scores and races on serverless
3. Deploy.

Without Upstash, a **single always-on Node server** can still use `.data/store.json`. On typical Vercel serverless, set Upstash or scores/rooms will not stay reliable.

```bash
npm run build
npm start   # local production check; host sets the public port
```

## Optional env

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Privacy (short)

- Personal stats, mute, theme, and name stay in the browser (`localStorage`).
- Saved public scores and race rooms are stored on the server (file or Upstash).

## License

MIT — see `LICENSE`.
