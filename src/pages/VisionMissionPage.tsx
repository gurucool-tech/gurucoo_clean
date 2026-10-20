import { Eye, Target, Heart } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const values = [
  {
    icon: Heart,
    title: "Simplicity First",
    description: "Complex software doesn't help schools. We focus on making things simple and practical.",
  },
  {
    icon: Target,
    title: "Real Problems",
    description: "We build features that solve actual challenges schools face, not imaginary ones.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden costs, no surprise charges. What you see is what you get.",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Vision & Mission | GuruCool"
        description="Our vision and mission: make school operations reliable, simple, and scalable for Indian schools."
        canonical="/vision-mission"
      />
      <PageHeader
        variant="dark"
        title="Vision & Mission"
        subtitle="What drives us every day"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />

      {/* Vision & Mission */}
      <section className="vision-stage">
        <div className="site-canvas">
          <div className="vision-stage__inner">
            <div className="vision-stage__intro">
              <span>Our direction</span>
              <p>Two commitments shape how GuruCool is designed, built, and introduced inside institutions.</p>
            </div>
            <div className="vision-stage__grid">
              <div className="vision-stage__vision">
                <div className="vision-stage__card-head">
                  <span>01</span>
                  <Eye aria-hidden="true" />
                </div>
                <h2>Vision</h2>
                <p>
                  Every school in India runs safely and smoothly with simple, practical systems.
                </p>
              </div>
              <div className="vision-stage__mission">
                <div className="vision-stage__card-head">
                  <span>02</span>
                  <Target aria-hidden="true" />
                </div>
                <h2>Mission</h2>
                <p>
                  Reduce manual administrative work and improve attendance accuracy and parent communication for schools of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-stage">
        <div className="site-canvas">
          <div className="values-stage__layout">
            <div className="values-stage__heading">
              <span>How we work</span>
              <h2>Our Values</h2>
              <p>Practical principles for building systems institutions can understand, trust, and use.</p>
            </div>

            <div className="values-stage__grid">
              {values.map((value, index) => (
                <article key={value.title} className="value-card">
                  <div className="value-card__head">
                    <value.icon aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="beliefs-stage">
        <div className="site-canvas">
          <div className="beliefs-stage__layout">
            <div className="beliefs-stage__heading">
              <span>What stays constant</span>
              <h2>What We Believe</h2>
            </div>
            <div className="beliefs-stage__list">
              <p data-index="01">
                We believe that school software should solve real problems, not create new ones. Most schools struggle with basic operations — accurate attendance, effective parent communication, and simple administration. These aren't glamorous problems, but they matter every single day.
              </p>
              <p data-index="02">
                We believe that parents shouldn't need to download another app. WhatsApp works. Let's use it.
              </p>
              <p data-index="03">
                We believe that schools should start simple and add complexity only when they're ready. A staged approach leads to better adoption and outcomes.
              </p>
              <p data-index="04">
                We believe in being honest about what we can and cannot do. We're not trying to be everything for everyone. We're trying to be really good at the things that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
