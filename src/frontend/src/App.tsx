import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Gift,
  Loader2,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function scrollToRegister() {
  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
}

// ─── TOP BAR ─────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="w-full bg-[#0d0f1a] text-center py-6 pb-3.5 border-b border-orange-DEFAULT/25">
      <span className="inline-block border border-orange-DEFAULT/50 text-white font-heading font-bold text-xs tracking-[2px] uppercase px-7 py-2.5 rounded-full">
        🎙 BIG DATA YATRA
      </span>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection({ count }: { count: number }) {
  return (
    <section className="relative overflow-hidden text-center px-5 py-[90px] md:py-[100px] bg-[linear-gradient(160deg,#0d1530_0%,#080c1e_60%,#0d1530_100%)] border-b border-[oklch(0.72_0.20_40/0.15)]">
      {/* Star rating */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="space-y-5"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-sm text-[#94a3b8] mb-2"
        >
          <span className="text-[#d4af37] text-base tracking-widest">
            ★★★★★
          </span>
          <span>
            4.8 ·{" "}
            <strong className="text-white">
              {count.toLocaleString()}+ students enrolled
            </strong>
          </span>
        </motion.div>

        {/* Main headline — 2 lines */}
        <motion.h1
          variants={fadeUp}
          className="font-heading font-extrabold text-white leading-tight mx-auto max-w-3xl"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
        >
          <span className="block text-[#d4af37]">
            Build a 20LPA+ Career in Data Engineering
          </span>
          <span className="block">[In Just 90 Days]</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          Join our <strong className="text-white">FREE Live Workshop</strong> —
          Learn the exact roadmap, tools, and strategies used by engineers at
          Mastercard &amp; Microsoft.
        </motion.p>

        {/* Trainer info */}
        <motion.div variants={fadeUp} className="text-sm text-[#64748b]">
          Taught by{" "}
          <span className="text-[#d4af37] font-semibold">Shivam Jha</span>{" "}
          <span>(Lead Data Engineer · Mastercard)</span> ·{" "}
          <span className="text-[#d4af37] font-semibold">Somesh Khatawe</span>{" "}
          <span>(Lead Data Engineer)</span>
        </motion.div>

        {/* Live session info */}
        <motion.div variants={fadeUp} className="text-sm text-[#94a3b8]">
          📅 Next live session:{" "}
          <strong className="text-white">12th April 2026</strong> ·{" "}
          <span className="text-[#d4af37] font-semibold">
            127 seats already reserved this week
          </span>
        </motion.div>

        {/* Price block */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3.5 flex-wrap justify-center"
        >
          <span className="text-[#64748b] line-through text-lg">₹4,999</span>
          <span className="font-heading font-extrabold text-white text-5xl leading-none">
            FREE
          </span>
          <span className="bg-[#d4af37] text-[#0a0e1a] text-xs font-bold px-3 py-1 rounded-full">
            100% FREE
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeUp}>
          <button
            type="button"
            onClick={scrollToRegister}
            className="inline-block bg-gradient-to-br from-[#d4af37] to-[#f0c040] text-[#0a0e1a] font-heading font-extrabold text-lg px-14 py-5 rounded-full shadow-[0_4px_28px_rgba(212,175,55,0.4)] transition-transform hover:-translate-y-1 cursor-pointer mb-4"
          >
            YES! Reserve My FREE Seat Now →
          </button>
        </motion.div>

        {/* Urgency */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold text-[#94a3b8]"
        >
          Limited Seats — No Recording Will Be Shared
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── SOCIAL PROOF BANNER ──────────────────────────────────────────────────────
function SocialProofBanner({ count }: { count: number }) {
  return (
    <div className="w-full bg-[oklch(0.55_0.22_264/0.10)] border-t border-b border-[oklch(0.57_0.22_264/0.35)] py-3.5 px-4 text-center">
      <span className="text-sm font-medium text-[#c4cef8]">
        <Flame className="inline w-4 h-4 mr-1 text-orange-DEFAULT" />
        <strong className="text-orange-DEFAULT">
          {count.toLocaleString()}+ aspiring engineers
        </strong>{" "}
        have already registered for this workshop
      </span>
    </div>
  );
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────
const PAIN_POINTS = [
  "Watching random YouTube tutorials with no direction",
  "Buying multiple disconnected courses that go nowhere",
  "Learning tools without understanding the full pipeline",
];

function ProblemSection() {
  return (
    <section className="py-20 px-5 bg-[#0f111c]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-foreground">
              You're Not Stuck Because You're Lazy.
            </h2>
            <p className="text-xl text-orange-DEFAULT font-semibold">
              You're stuck because you're learning the wrong way.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
            {PAIN_POINTS.map((text) => (
              <motion.div
                key={text}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 hover:border-red-400/40 transition-colors"
              >
                <XCircle className="w-6 h-6 text-red-400 mb-3" />
                <p className="text-foreground font-medium">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-center bg-[oklch(0.60_0.22_25/0.10)] border border-[oklch(0.60_0.22_25/0.35)] rounded-xl py-5 px-6"
          >
            <p className="text-lg font-bold text-emerald-400">
              Result: Still confused, not job-ready, failing interviews.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONSEQUENCES ─────────────────────────────────────────────────────────────
const CONSEQUENCES = [
  "Waste 6–12 months of your career",
  "Stay stuck in low-paying roles",
  "Miss out on high-paying Data Engineering opportunities",
];

function ConsequencesSection() {
  return (
    <section className="py-20 px-5 bg-[#0d0f1a]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="bg-[oklch(0.18_0.04_264/0.5)] border border-[oklch(1_0_0/0.12)] rounded-2xl px-10 py-12 space-y-8"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-extrabold text-foreground text-center"
            >
              If You Keep Going Like This…
            </motion.h2>

            <motion.div variants={stagger} className="space-y-0">
              {CONSEQUENCES.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3.5 py-4 border-b border-white/[0.06] last:border-b-0"
                >
                  <div className="w-[26px] h-[26px] bg-red-400/15 text-red-400 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    ✕
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[oklch(0.57_0.22_264/0.12)] border border-[oklch(0.57_0.22_264/0.35)] rounded-xl py-4 px-5 text-center"
            >
              <p className="text-foreground font-medium">
                💡 Meanwhile, others with the right roadmap are{" "}
                <strong className="text-primary">
                  getting 2x salary hikes.
                </strong>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── VIDEO TESTIMONIALS ───────────────────────────────────────────────────────
const VIDEO_TESTIMONIALS = [
  {
    videoId: "HGqo-I5XH3M",
    name: "Himanshu Bhist",
    desc: "Data Engineering Workshop Attendee",
  },
  {
    videoId: "P9BUU1VsXD0",
    name: "Khushi Gupta",
    desc: "Data Engineering Workshop Attendee",
  },
  {
    videoId: "xo-z995Ys4I",
    name: "Abhipri",
    desc: "Data Engineering Workshop Attendee",
  },
];

function VideoTestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-5 bg-[#0d0f1a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center space-y-3">
            <span className="inline-block bg-[oklch(0.72_0.20_40/0.12)] border border-[oklch(0.72_0.20_40/0.4)] text-[#d4af37] text-xs font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full">
              🎥 Real Students. Real Results.
            </span>
            <h2 className="font-heading font-extrabold text-foreground">
              Hear It Directly{" "}
              <span className="text-orange-DEFAULT">From Our Students</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Watch what engineers say after attending the live workshop.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {VIDEO_TESTIMONIALS.map((t) => (
              <motion.div
                key={t.videoId}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-[oklch(0.72_0.20_40/0.4)] hover:-translate-y-1"
              >
                <div
                  className="relative w-full bg-[#0a0c18]"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}?rel=0&modestbranding=1`}
                    title={`Student Testimonial — ${t.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <div className="text-[#d4af37] text-sm tracking-widest">
                    ★★★★★
                  </div>
                  <p className="font-heading font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6 bg-[oklch(0.57_0.22_264/0.07)] border border-[oklch(0.57_0.22_264/0.2)] rounded-xl py-5 px-6"
          >
            <span className="text-sm text-muted-foreground font-medium">
              🔥 3,000+ engineers attended
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="text-sm text-muted-foreground font-medium">
              ⭐ 4.8 average rating
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="text-sm text-muted-foreground font-medium">
              ✅ 100% free workshop
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── INSIGHT ──────────────────────────────────────────────────────────────────
const INSIGHTS = [
  {
    title: "End-to-End Pipeline",
    text: "Complete data pipeline understanding — from ingestion to transformation to serving",
  },
  {
    title: "Right Order Matters",
    text: "Right tools in the right order — not random learning that leaves gaps in knowledge",
  },
  {
    title: "Real-World Projects",
    text: "Real-world projects that hiring managers actually care about when they interview you",
  },
];

function InsightSection() {
  return (
    <section className="py-20 px-5 bg-[#0f111c]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center space-y-3">
            <h2 className="font-heading font-extrabold text-foreground">
              Here's the Truth About Data Engineering
            </h2>
            <p className="text-xl text-primary font-semibold">
              Data Engineering is NOT about memorizing random tools.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
            {INSIGHTS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="w-7 h-7 bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 rounded-full flex items-center justify-center text-sm font-bold mb-1">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SOLUTION ─────────────────────────────────────────────────────────────────
function SolutionSection() {
  return (
    <section className="py-20 px-5 bg-[#0d0f1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.57_0.22_264/0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block bg-[oklch(0.57_0.22_264/0.15)] border border-primary/50 text-primary text-xs font-bold uppercase tracking-[1.8px] px-4 py-1.5 rounded-full">
              FREE LIVE WORKSHOP
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-extrabold text-foreground leading-tight"
          >
            From Confused Developer to{" "}
            <span className="text-primary">Skilled Data Engineer</span> — The
            2026 Career Roadmap
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            In just <strong className="text-foreground">90 minutes</strong>, get
            total clarity on the roadmap, tools, and exactly what it takes to
            become job-ready as a Data Engineer in 2026.
          </motion.p>

          <motion.div variants={fadeUp}>
            <button
              type="button"
              onClick={scrollToRegister}
              className="inline-block mt-2 bg-orange-DEFAULT hover:bg-orange-hover text-white font-heading font-bold text-lg px-14 py-4.5 rounded-xl shadow-[0_4px_24px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 hover:scale-[1.03] cursor-pointer"
            >
              Reserve Your Free Seat Now →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── LEARN ────────────────────────────────────────────────────────────────────
const LEARN_ITEMS = [
  "The exact Data Engineering roadmap for 2026",
  "Modern tech stack: Spark, Cloud, Data Pipelines — what to learn first",
  "Real skills companies actually expect in interviews",
  "Which projects to build to stand out to recruiters",
  "Interview preparation strategy that works",
];

function LearnSection() {
  return (
    <section className="py-20 px-5 bg-[#0f111c]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center">
            <h2 className="font-heading font-extrabold text-foreground">
              What You'll Learn in{" "}
              <span className="text-primary">90 Minutes</span>
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-3">
            {LEARN_ITEMS.map((item, idx) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-center gap-5 bg-card border border-border rounded-xl px-6 py-5 hover:border-primary/40 transition-colors"
              >
                <div className="bg-[oklch(0.57_0.22_264/0.12)] border border-primary/30 rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── BONUSES ──────────────────────────────────────────────────────────────────
const BONUSES = [
  {
    icon: "📄",
    title: "Data Engineering Roadmap PDF",
    desc: "Your step-by-step visual guide",
  },
  {
    icon: "📋",
    title: "Interview Question Bank",
    desc: "Real questions from top companies",
  },
  { icon: "📝", title: "Resume Templates", desc: "ATS-optimized for DE roles" },
];

function BonusSection() {
  return (
    <section className="py-20 px-5 bg-[#0d0f1a]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="bg-[oklch(0.18_0.08_60/0.35)] border-2 border-[oklch(0.72_0.20_40/0.6)] rounded-2xl p-8 md:p-12 space-y-9"
          >
            <div className="text-center space-y-2">
              <div className="text-5xl">🎁</div>
              <h2 className="font-heading font-extrabold text-foreground">
                Exclusive Bonuses for Live Attendees
              </h2>
            </div>

            <motion.div
              variants={stagger}
              className="grid md:grid-cols-3 gap-4"
            >
              {BONUSES.map((bonus) => (
                <motion.div
                  key={bonus.title}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-xl p-5 text-center space-y-2 hover:border-[oklch(0.72_0.20_40/0.5)] transition-colors"
                >
                  <div className="text-3xl">{bonus.icon}</div>
                  <h3 className="font-heading font-bold text-foreground text-sm">
                    {bonus.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{bonus.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="inline-flex items-center gap-2 bg-[oklch(0.72_0.20_40/0.12)] border border-[oklch(0.72_0.20_40/0.4)] rounded-full px-6 py-2.5">
                <Gift className="w-5 h-5 text-orange-DEFAULT" />
                <span className="text-foreground font-semibold">
                  🎁 Total Value:{" "}
                  <s className="text-muted-foreground">₹4,999</s>{" "}
                  <span className="text-orange-DEFAULT">
                    FREE for live attendees
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── AUDIENCE ─────────────────────────────────────────────────────────────────
const AUDIENCES = [
  {
    icon: "👨‍💻",
    title: "Software Engineers",
    desc: "Looking to transition into Data Engineering",
  },
  {
    icon: "🎓",
    title: "Freshers (CS/IT)",
    desc: "Who want to start their career right from day one",
  },
  {
    icon: "📊",
    title: "Data Analysts",
    desc: "Ready to level up to Data Engineering roles",
  },
  {
    icon: "🔄",
    title: "Career Switchers",
    desc: "Who want a high-paying tech role without years of wandering",
  },
];

function AudienceSection() {
  return (
    <section className="py-20 px-5 bg-[#0f111c]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center">
            <h2 className="font-heading font-extrabold text-foreground">
              This Workshop Is For You If…
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
            {AUDIENCES.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TRAINERS ─────────────────────────────────────────────────────────────────
const TRAINERS = [
  {
    name: "Shivam Jha",
    role: "Lead Data Engineer at Mastercard",
    desc: "Real industry practitioner with years of hands-on experience building large-scale data pipelines at one of the world's top financial companies.",
    initials: "SJ",
    gradient: "linear-gradient(135deg, #3b6bff, #5b8dff)",
  },
  {
    name: "Somesh Khatawe",
    role: "Senior Data Engineer — Microsoft & GAP",
    desc: "Worked on real projects at Microsoft and GAP. Brings practical, battle-tested knowledge from leading global enterprises directly to this workshop.",
    initials: "SK",
    gradient: "linear-gradient(135deg, #f97316, #fb923c)",
  },
];

function AuthoritySection() {
  return (
    <section className="py-20 px-5 bg-[#0d0f1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-foreground">
              Learn From Engineers Who've Done It
            </h2>
            <p className="text-muted-foreground">
              No theory. No fluff. Just real industry practices.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            {TRAINERS.map((trainer) => (
              <motion.div
                key={trainer.name}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-7 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-heading font-extrabold text-xl shrink-0"
                    style={{ background: trainer.gradient }}
                  >
                    {trainer.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-foreground text-xl">
                      {trainer.name}
                    </h3>
                    <p className="text-primary text-sm font-semibold">
                      {trainer.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {trainer.desc}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="w-4 h-4 text-orange-DEFAULT" />
                  <span>Real practitioner, not just a content creator</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── REGISTRATION FORM ────────────────────────────────────────────────────────
function RegistrationForm() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) return;
    setError("");
    setLoading(true);
    try {
      await actor.register(name, email, phone);
      setSuccess(true);
      toast.success("You're registered! See you at the workshop.");
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="register"
      className="py-20 px-5 bg-[#0f111c] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.20_40/0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-foreground">
              Stop Guessing.{" "}
              <span className="text-orange-DEFAULT">Stop Wasting Time.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Register now and get clarity in 90 minutes.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
          >
            {success ? (
              <div className="text-center space-y-4 py-8">
                <div className="text-6xl">🎉</div>
                <h3 className="font-heading text-2xl font-extrabold text-foreground">
                  You're Registered!
                </h3>
                <p className="text-muted-foreground">
                  See you at the workshop. Check your email for details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="reg-name"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="reg-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    data-ocid="register.input"
                    className="bg-[#22253a] border-border text-foreground placeholder:text-[#4b5563] h-[52px] text-base rounded-[10px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="reg-email"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#22253a] border-border text-foreground placeholder:text-[#4b5563] h-[52px] text-base rounded-[10px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="reg-phone"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="reg-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-[#22253a] border-border text-foreground placeholder:text-[#4b5563] h-[52px] text-base rounded-[10px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-muted-foreground text-sm font-medium">
                    Current Role *
                  </Label>
                  <Select value={role} onValueChange={setRole} required>
                    <SelectTrigger className="bg-[#22253a] border-border text-muted-foreground h-[52px] text-base rounded-[10px]">
                      <SelectValue placeholder="— Select Your Current Role —" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#22253a] border-border">
                      <SelectItem value="Fresher / Student">
                        Fresher / Student
                      </SelectItem>
                      <SelectItem value="Software Engineer">
                        Software Engineer
                      </SelectItem>
                      <SelectItem value="Data Analyst">Data Analyst</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={loading || !actor}
                  data-ocid="register.submit_button"
                  className="w-full bg-orange-DEFAULT hover:bg-orange-hover text-white font-heading font-bold text-lg h-[56px] rounded-xl shadow-[0_4px_24px_rgba(249,115,22,0.4)] transition-all hover:scale-[1.02] mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />{" "}
                      Registering...
                    </>
                  ) : (
                    <>YES! Reserve My FREE Seat Now →</>
                  )}
                </Button>
              </form>
            )}

            <div className="border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="text-sm text-muted-foreground">
                ⚡ Seats are limited
              </div>
              <div className="text-sm text-red-400 font-semibold">
                🔴 NOT recorded
              </div>
              <div className="text-sm text-muted-foreground">
                🎁 Bonuses for live attendees
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "Is this workshop really free?",
    a: "Yes, 100% free. There is no hidden cost, no credit card required. You just register and show up live. The bonuses are also free for live attendees.",
  },
  {
    q: "Will there be a recording?",
    a: "No. This is a live-only session and will NOT be recorded. The bonuses are also exclusively for people who attend live. This is why seats are limited.",
  },
  {
    q: "I have no Data Engineering experience. Is this for me?",
    a: "Absolutely. This workshop is specifically designed for beginners, freshers, and career switchers who want to understand the complete roadmap from scratch — no prior experience needed.",
  },
  {
    q: "How long is the workshop?",
    a: "The workshop is 90 minutes long. It is packed with actionable content — no filler, no fluff. Come with a notebook and be ready to take notes.",
  },
  {
    q: "Who are the trainers?",
    a: "Shivam Jha is a Lead Data Engineer at Mastercard, and Somesh Khatawe is a Senior Data Engineer who has worked at Microsoft and GAP. Both are active industry practitioners — not just content creators.",
  },
  {
    q: "What will I get after the workshop?",
    a: "Live attendees receive 3 exclusive bonuses worth ₹4,999 — a Data Engineering Roadmap PDF, an Interview Question Bank from top companies, and ATS-optimized Resume Templates for DE roles.",
  },
  {
    q: "How do I join the live session?",
    a: "After you register, you will receive a confirmation email with the joining link. Make sure to check your spam folder if you don't see it within a few minutes.",
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  function toggle(idx: number) {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }

  return (
    <section className="py-20 px-5 bg-[#0d0f1a]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="text-center space-y-2">
            <h2 className="font-heading font-extrabold text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before joining.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, idx) => (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={`bg-card border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  openIdx === idx ? "border-primary/45" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[oklch(0.57_0.22_264/0.06)] transition-colors"
                >
                  <span className="font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span className="text-primary text-xl font-light shrink-0 leading-none">
                    {openIdx === idx ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openIdx === idx ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <p className="text-muted-foreground text-sm">
              Still have questions?{" "}
              <button
                type="button"
                onClick={scrollToRegister}
                className="text-primary font-semibold hover:underline cursor-pointer"
              >
                Register and ask live during the session.
              </button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── STICKY BOTTOM BAR ────────────────────────────────────────────────────────
function StickyBottomBar() {
  function handleCtaClick() {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] bg-[#0a0c18] border-t border-[oklch(0.72_0.20_40/0.3)] shadow-[0_-6px_40px_rgba(0,0,0,0.6)]">
      {/* Mobile layout */}
      <div className="flex flex-col items-center gap-2 px-4 py-2.5 md:hidden">
        <button
          type="button"
          onClick={handleCtaClick}
          className="block w-full bg-gradient-to-r from-[#d4af37] to-[#f0c040] text-[#0a0e1a] font-heading font-extrabold text-base text-center py-3.5 px-5 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.4)] leading-snug"
        >
          🎯 YES! Reserve My FREE Seat Now →
        </button>
        <div className="flex justify-center gap-3 flex-wrap text-[0.72rem] text-muted-foreground pb-0.5">
          <span>⚡ Limited Seats</span>
          <span>🔴 Not Recorded</span>
          <span>🎁 Free Bonuses</span>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-center gap-7 px-8 py-3.5 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-muted-foreground line-through text-sm">
            ₹4,999
          </span>
          <span className="font-heading font-extrabold text-foreground text-[2rem] leading-none">
            FREE
          </span>
          <span className="bg-emerald-400/15 border border-emerald-400/40 text-emerald-400 text-[0.68rem] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
            100% FREE
          </span>
        </div>
        <button
          type="button"
          onClick={handleCtaClick}
          className="shrink-0 bg-gradient-to-r from-[#d4af37] to-[#f0c040] text-[#0a0e1a] font-heading font-extrabold text-base py-4 px-9 rounded-full shadow-[0_4px_24px_rgba(212,175,55,0.45)] whitespace-nowrap transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          YES! Reserve My FREE Seat Now →
        </button>
        <div className="flex flex-col gap-0.5 text-[0.78rem] text-muted-foreground shrink-0 text-left">
          <span>✅ Limited Seats</span>
          <span>✅ Live Only — Not Recorded</span>
          <span>✅ Free Bonuses Worth ₹4,999</span>
        </div>
      </div>
    </div>
  );
}

// ─── FLOATING RESERVE SEAT BUTTON (TOP LEFT) ──────────────────────────────────
function ReserveSeatNavLink() {
  return (
    <button
      type="button"
      onClick={scrollToRegister}
      data-ocid="nav.primary_button"
      className="fixed top-4 left-4 z-[99998] text-white text-xs sm:text-sm font-semibold bg-white/8 border border-white/20 px-3 sm:px-4 py-2 rounded-full transition-all hover:bg-[oklch(0.72_0.20_40/0.15)] hover:border-[oklch(0.72_0.20_40/0.5)] hover:text-[#d4af37] backdrop-blur-sm"
    >
      Reserve Seat →
    </button>
  );
}

// ─── FLOATING TESTIMONIALS LINK ───────────────────────────────────────────────
function TestimonialsNavLink() {
  function handleClick() {
    document
      .getElementById("testimonials")
      ?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      data-ocid="nav.link"
      className="fixed top-4 right-4 z-[99998] text-white text-xs sm:text-sm font-semibold bg-white/8 border border-white/20 px-3 sm:px-4 py-2 rounded-full transition-all hover:bg-[oklch(0.72_0.20_40/0.15)] hover:border-[oklch(0.72_0.20_40/0.5)] hover:text-[#d4af37] backdrop-blur-sm"
    >
      Testimonials ↓
    </button>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;
  return (
    <footer className="border-t border-border py-8 px-4 text-center">
      <p className="text-muted-foreground text-sm">
        © {year}. Built with ❤️ using{" "}
        <a
          href={utmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const { actor } = useActor();
  const [regCount, setRegCount] = useState(3000);

  useEffect(() => {
    if (!actor) return;
    actor
      .getRegistrationCount()
      .then((count) => {
        const n = Number(count);
        setRegCount(Math.max(n, 3000));
      })
      .catch(() => {});
  }, [actor]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />

      {/* Floating nav buttons */}
      <ReserveSeatNavLink />
      <TestimonialsNavLink />

      {/* Top bar — no sticky header */}
      <TopBar />

      <main>
        <HeroSection count={regCount} />
        <SocialProofBanner count={regCount} />
        <ProblemSection />
        <ConsequencesSection />
        <VideoTestimonialsSection />
        <InsightSection />
        <SolutionSection />
        <LearnSection />
        <BonusSection />
        <AudienceSection />
        <AuthoritySection />
        <RegistrationForm />
        <FAQSection />

        {/* Bottom social proof */}
        <div className="py-10 px-4 text-center bg-[#0f111c]">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-bold">
              🔥 {regCount.toLocaleString()}+ aspiring engineers have already
              registered
            </span>
          </div>
        </div>
      </main>

      {/* Spacer for sticky bar */}
      <div className="h-24" />
      <Footer />

      <StickyBottomBar />
    </div>
  );
}
