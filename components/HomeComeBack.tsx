"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { DailyResetClock } from "@/components/DailyResetClock";
import { todayKey } from "@/lib/daily";
import {
  getStatsServerSnapshot,
  getStatsSnapshot,
  subscribeStats,
  type PersonalStats,
} from "@/lib/stats";

export function HomeComeBack() {
  const json = useSyncExternalStore(
    subscribeStats,
    getStatsSnapshot,
    getStatsServerSnapshot,
  );
  const stats = useMemo(() => JSON.parse(json) as PersonalStats, [json]);
  const day = todayKey();
  const didDaily = stats.lastDailyKey === day;
  const streak = stats.playDayStreak || 0;

  if (stats.gamesPlayed === 0) {
    return (
      <div className="animate-rise-late mt-10 rounded-3xl border border-smoke/70 bg-ink-soft/50 p-5">
        <p className="text-base text-paper">New here?</p>
        <p className="mt-1 text-sm text-ash">
          Practice a little, then try today’s puzzle.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/play/practice"
            className="rounded-full bg-lacquer px-5 py-2.5 text-sm text-white transition hover:bg-lacquer-deep"
          >
            Practice
          </Link>
          <Link
            href="/play/daily"
            className="rounded-full border border-smoke px-5 py-2.5 text-sm text-paper transition hover:border-amber hover:text-amber"
          >
            Today’s puzzle
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-rise-late mt-10 rounded-3xl border border-smoke/70 bg-ink-soft/50 p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-ash">Your streak</p>
          <p className="mt-1 text-3xl font-semibold text-amber">
            {streak} {streak === 1 ? "day" : "days"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-ash">Best score</p>
          <p className="mt-1 text-2xl font-semibold text-paper">
            {stats.bestScore}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <DailyResetClock label="New puzzle in" className="text-sm" />
        <Link
          href="/play/daily"
          className="rounded-full bg-lacquer px-5 py-2.5 text-sm text-white transition hover:bg-lacquer-deep"
        >
          {didDaily ? "Play today again" : "Today’s puzzle"}
        </Link>
      </div>
    </div>
  );
}
