# GuruCool Dashboard Documentation

## 1. Vision & Identity
The GuruCool Dashboard is the visual manifestation of the "Operating Layer." It is designed to communicate **power, clarity, and control**. Unlike standard web dashboards, it uses a high-fidelity "Cinematic" format to showcase the platform's ability to handle complex institutional operations.

## 2. Visual Standards
### The Cinematic Format
- **Dimensions**: Ultra-wide `1340px` width with a proportional `720px` minimum height.
- **Ratio**: Optimized for widescreen displays to maximize information density.
- **Framing**: On landing pages, the dashboard is anchored within a gradient-glow frame to provide depth and stability.

### The Zero-Scroll Mandate
- **Rule**: Internal dashboard containers must NEVER have scrollbars.
- **Logic**: A scrollbar inside a preview breaks the "product shot" illusion. If data exceeds the height, it is truncated or summarized. This ensures the UI always looks "finished" and "balanced."

### The Ice-Panel Aesthetic
- **Surfaces**: `bg-slate-50/80` backdrops with `backdrop-blur-md`.
- **Contrast**: Clean white cards on subtle grey-blue backgrounds.
- **Typography**: Small, bold headers (`text-[10px]`) and mono-spaced IDs for an engineered, professional feel.

## 3. Technical Architecture
The system is built as a single, multi-mode component: `AbstractDashboard.tsx`.

### Core Props
- `mode`: Controls the entire layout and persona (e.g., `executive-multicampus`, `school-overview`).
- `title`: Overrides the default dashboard title.
- `colorScheme`: Switches the accent colors to match the branding of specific modules.

## 4. Dashboard Modes Breakdown

### A. Executive Multi-Campus (Command & Control)
- **Persona**: CEO / Group Director.
- **Key View**: Network-wide performance matrix.
- **Purpose**: Comparative oversight across multiple branches or campuses.

### B. School Overview (Daily Operations)
- **Persona**: Principal / Administrator.
- **Key View**: Live attendance logs, WhatsApp broadcast status, and fee collection summaries.
- **Purpose**: managing the "pulse" of a single K-12 institution.

### C. College Academics (Resource Scheduling)
- **Persona**: Dean / Academic Head.
- **Key View**: Master lecture timetable, faculty workload, and exam room allotment.
- **Purpose**: Managing high-complexity academic logistics.

### D. Tuition Branch (Velocity Management)
- **Persona**: Branch Manager.
- **Key View**: Batch schedules, enrollment tracking, and quick-check-in feeds.
- **Purpose**: Fast-paced management of student batches.

### E. System Command (The Engine)
- **Persona**: IT Director / Super Admin.
- **Key View**: Live operational streams, system node health, and API sync logs.
- **Purpose**: Proof of technical robustness and cloud-native architecture.

## 5. Layout & Placement Rules
1. **Always Center**: Use `mx-auto` on the dashboard container.
2. **Container Width**:
   - Home Page: `max-w-[1340px]`
   - Solutions Pages: `max-w-6xl`
3. **Internal Spacing**: Maintain `p-8` to `p-10` padding in the main content area to allow the UI to "breathe."

---
*Created for the GuruCool Product Launch Phase.*
