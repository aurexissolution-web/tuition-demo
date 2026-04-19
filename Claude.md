# Project Master Context: Pusat Tuisyen Budak Rajin (Premium Web App)

## 1. Project Overview
We are building a premium, 5-page front-end web application for a highly-rated Malaysian tuition center named **"Pusat Tuisyen Budak Rajin"**. 
The goal is to move away from a basic one-page landing page and deliver an enterprise-grade educational platform that builds immediate trust with parents.

## 2. Tech Stack
* **Framework:** React (Next.js App Router preferred)
* **Styling:** Tailwind CSS (Modern utility classes)
* **Component Library:** **shadcn/ui** (built on Radix UI primitives — accessible by default). Install components via `npx shadcn@latest add <component>` as needed (`button`, `card`, `dialog`, `sheet`, `form`, `input`, `select`, `navigation-menu`, `sonner`, etc.).
* **Forms:** React Hook Form + Zod for validation (use the shadcn `form` component).
* **Icons:** Lucide React (clean SVG icons, ships with shadcn).
* **Content Language:** Malay (Bahasa Melayu) for all UI text, English for code/components.

## 3. Design System & UI Identity
* **Aesthetic:** Prestigious, trusted, safe, professional, and results-driven.
* **Color Palette:**
  * **Primary:** Deep Navy Blue (e.g., `slate-900` or `blue-950`) - conveys authority and trust.
  * **Backgrounds:** Crisp White (`white`) and subtle cool grays (`slate-50`) for section separation.
  * **Accents:** Subtle Gold/Warm Yellow (`amber-400` or `yellow-500`) - for 5-star ratings, highlights, and primary Call-to-Action (CTA) buttons.
* **Layout:** Use generous padding (`py-16`, `py-24`) and margins. Premium design requires ample whitespace. Do not cramp elements.
* **UI Elements:** Use subtle shadows (`shadow-sm`, `shadow-md`), rounded corners (`rounded-xl`), and clean borders. 

## 4. Architecture (The 5-Page Structure)

### Global Components (Present on all pages)
* **Navbar (`<Header />`):** Clean logo placement (left), navigation links (center), and a highlighted 'Hubungi Kami' CTA button (right). Mobile responsive hamburger menu is mandatory.
* **Footer (`<Footer />`):** * Mock Address: No. 18, Tingkat 1, Persiaran Seksyen 4/10, Bandar Putra Bertam, 13200 Kepala Batas, Pulau Pinang.
  * Phone: 013-946 9192
  * Quick links to the 5 pages.
  * Social media icons.

### Page 1: Laman Utama (Home - `/`)
* **Hero Section:** Headline ("Membentuk Masa Depan Cemerlang Anak Anda"), subtext ("Pusat tuisyen premium di Kepala Batas untuk pelajar Darjah 2-6 & Kelas Membaca"), primary CTA leading to WhatsApp.
* **Trust Banner:** A sleek bar below the hero highlighting "5.0 Google Rating (3+ Reviews)", "Guru Berpengalaman", and "Fokus Individu".
* **Value Props (Mengapa Pilih Kami):** 3-column grid featuring icons and text (Persekitaran Selesa, Pendekatan Mesra Pelajar, Mudah Akses).

### Page 2: Program Akademik (Programs - `/program`)
* Detailed UI cards/sections breaking down core classes:
  1. **Kelas Membaca:** Focus on early literacy and strong foundations.
  2. **Tuisyen Sekolah Rendah (Darjah 2-6):** Core subject preparation and exam focus.
  3. **Kelas Malam / Intensif:** Highlighting flexible scheduling for busy parents.

### Page 3: Barisan Pendidik (Teachers - `/pendidik`)
* A professional grid layout profiling the educators. 
* Emphasize qualifications, teaching experience, and dedication to student success. Use high-quality placeholder images for the staff.

### Page 4: Pencapaian & Testimoni (Results - `/pencapaian`)
* The "Proof" page. 
* A masonry or clean grid layout displaying 5-star parent reviews.
* A section highlighting mock student grade improvements (Before & After).

### Page 5: Hubungi & Pendaftaran (Contact - `/hubungi`)
* A clean lead-capture form (Nama Ibubapa, Umur Anak, Subjek Pilihan).
* Direct WhatsApp routing buttons for instant inquiries.
* Embedded UI for a map layout pointing to Bandar Putra Bertam.

## 5. Instructions for the AI Developer (Claude)
1. **Component Driven:** Build modular, reusable components (e.g., `<Button>`, `<Card>`, `<SectionHeading>`). Prefer composing on top of installed shadcn/ui primitives over hand-rolling.
2. **Production Ready:** Do not provide pseudo-code. Write complete, functional React components with Tailwind classes applied.
3. **Responsive Design:** Ensure every section looks perfect on mobile (`sm:`), tablet (`md:`), and desktop (`lg:`).
4. **Placeholders:** Use semantic gray boxes or Unsplash source URLs for missing images, but ensure the UI layout around them is flawless.
5. **Accessibility:** Semantic HTML, proper heading order, alt text, visible focus rings, AA color contrast, and full keyboard navigation are non-negotiable.

## 6. Installed Skills — When to Invoke

Four skills are installed under `.claude/skills/`. Invoke them via the Skill tool **before** generating code in their domain — do not paraphrase them from memory.

| Skill | Invoke When |
|---|---|
| **`ui-ux-pro-max`** | Choosing colors, typography, spacing, layouts, or making product-level design decisions for any of the 5 pages. Run **first** when starting a new page so the visual direction is locked before code. |
| **`frontend-design`** | Building the actual page/component with a distinctive, production-grade aesthetic. Use to avoid generic "AI slop" look — premium tuition center should feel editorial, trustworthy, refined. |
| **`shadcn-ui`** | Any time you need to install or compose a shadcn component (buttons, cards, dialogs, forms, navigation-menu, sheets, tables, toasts). Also for theming with CSS variables and React Hook Form + Zod patterns. |
| **`web-design-guidelines`** | After completing a page or component, run as a review pass to check accessibility, UX, and Vercel's Web Interface Guidelines compliance. Treat findings as blockers, not suggestions. |

### Default workflow per page
1. **Plan** with `ui-ux-pro-max` → lock palette/type/layout direction (must respect Section 3 navy + amber identity).
2. **Build** with `frontend-design` + `shadcn-ui` → compose page from shadcn primitives, styled per the locked direction.
3. **Review** with `web-design-guidelines` → fix every flagged issue before marking the page done.

