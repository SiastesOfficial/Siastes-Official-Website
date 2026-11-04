export const GROUPS = [
  "Investment Team",
  "Operations Team",
  "Platform Team",
  "EIRs & Advisors",
] as const;

export const FOCUSES = ["Discovery", "Venture", "Growth"] as const;

export type Group = (typeof GROUPS)[number];
export type Focus = (typeof FOCUSES)[number];

export type Member = {
  slug: string;
  name: string;
  role: string;
  group: Group;
  focus?: Focus;
  city: string;
  tone: number;
  img: string
};

// Placeholder portrait backgrounds, indexed by `Member.tone`.
export const TONES = [
  "from-violet-400 to-violet-700",
  "from-fuchsia-400 to-violet-600",
  "from-indigo-400 to-violet-700",
  "from-purple-300 to-purple-700",
  "from-violet-300 to-indigo-600",
];


export type Leader = Member & { bio: string[] };

export const CEO: Leader = {
  slug: "dana-whitfield",
  name: "Albert Sarpong",
  role: "Chief Executive Officer",
  group: "Investment Team",
  focus: "Growth",
  city: "Toronto",
  img: "/albert.jpg",
  tone: 0,
  bio: [
    "Replace this with the CEO’s story: when they founded the company, what they did before, and what drives them. Each string in this array renders as one paragraph.",
    "Use the second paragraph for what they bring to the people they work with: the experience, the judgement and the areas where founders lean on them most.",
    "Close with the commitments and community work they’re known for, such as boards, speaking, and the programs they champion.",
  ],
};
