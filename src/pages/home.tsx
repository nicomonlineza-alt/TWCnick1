import { Link } from "wouter";
import { assetUrl } from "@/lib/utils";
import { ArrowRight, Heart, Users, Sun, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero */}
      <section className="relative h-[85dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/home1.png')} alt="TWC Farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6 mt-16">
          <span className="inline-block glass-dark px-6 py-2 rounded-full font-medium tracking-widest text-sm uppercase text-secondary">Eendekuil, Western Cape</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight drop-shadow-lg">A Place of Safety and Second Chances.</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow-md">
            Genuine healing set on a farm in the open Western Cape countryside. Community-led recovery from substance abuse.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="glass bg-secondary/80 text-white hover:bg-secondary/90 px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto text-center shadow-lg border-white/20">
              Get Help Today
            </Link>
            <Link href="/about" className="glass-dark hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto text-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply" style={{ backgroundImage: `url(${assetUrl('images/parallax/1.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(20px)' }}></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl text-foreground">WELCOME TO TWC</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-[2rem] p-10 text-center space-y-6">
              <div className="glass w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground uppercase tracking-wide">Why TWC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Together We Can (TWC) uses a multi-faceted recovery program. We provide you with the necessary tools to live a clean healthy lifestyle.
              </p>
            </div>
            <div className="glass-card rounded-[2rem] p-10 text-center space-y-6">
              <div className="glass w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground uppercase tracking-wide">How Can We Help</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer the latest addiction treatment therapies for alcohol, drug and other addictive behaviours. We focus on healing the mind, body and spirit.
              </p>
            </div>
            <div className="glass-card rounded-[2rem] p-10 text-center space-y-6">
              <div className="glass w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground uppercase tracking-wide">Getting Help</h3>
              <p className="text-muted-foreground leading-relaxed">
                The first step to recovery is recognizing there is a problem and seeking help. We have a primary facility in Eendekuil (Western Cape) and a secondary facility in Boston (Western Cape). <Link href="/contact" className="text-secondary hover:underline font-medium">Click Here</Link> to find us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effects of Illegal Substances */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/2.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[60px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight drop-shadow-md">Effects of Illegal Substances on the Brain</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-strong rounded-[2rem] p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20">
              <h3 className="font-serif text-xl text-primary font-semibold uppercase tracking-wider">Methamphetamine (Tik)</h3>
              <p className="text-foreground/90 leading-relaxed text-sm">
                Meth use can cause irreversible harm. Effects include; increased heart rate & blood pressure, damaged blood vessels in the brain leading to brain damage, liver, kidney and lung damage. Strokes and cardiovascular collapse can lead to death.
              </p>
            </div>
            <div className="glass-strong rounded-[2rem] p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20">
              <h3 className="font-serif text-xl text-primary font-semibold uppercase tracking-wider">Heroin</h3>
              <p className="text-foreground/90 leading-relaxed text-sm">
                Repeated heroin use changes the physical structure of the brain and destroys the white and grey matter it is exposed to. Negativelly affects decision making and behaviour. Others affects are problems with sight, hearing, emotions and speech.
              </p>
            </div>
            <div className="glass-strong rounded-[2rem] p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20">
              <h3 className="font-serif text-xl text-primary font-semibold uppercase tracking-wider">Alcohol</h3>
              <p className="text-foreground/90 leading-relaxed text-sm">
                Sustained drinking leads to shrinking of the brain and liver disease. Long term effects are confusion, paralysis of eye muscles, impaired learning ability and forgetfulness.
              </p>
            </div>
            <div className="glass-strong rounded-[2rem] p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20">
              <h3 className="font-serif text-xl text-primary font-semibold uppercase tracking-wider">Marijuana</h3>
              <p className="text-foreground/90 leading-relaxed text-sm">
                Marijuana use may result in a loss of IQ points that are not recovered after stopping. Usage causes impaired motor skills, mood alterations, distorted time and sensory perception, decreased memory, and trouble thinking clearly and solving problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${assetUrl('images/parallax/1.jpg')})` }}
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2.5rem] p-12 md:p-20 max-w-5xl mx-auto border-white/30 shadow-2xl">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight italic drop-shadow-md">
              "No matter how dark the past has been, the sun still rises on a new beginning."
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/3.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-md" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border-white/50 shadow-2xl">
            <div className="p-12 md:p-20 flex-1 flex flex-col justify-center text-foreground">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Take the First Step</h2>
              <p className="text-foreground/80 mb-10 max-w-lg text-lg leading-relaxed">
                Reaching out takes courage. We are here to listen, support, and guide you or your loved one towards recovery. You don't have to do this alone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="glass bg-secondary/80 text-white hover:bg-secondary/90 px-8 py-4 rounded-full font-medium transition-all text-center shadow-lg border-white/30">
                  Contact Us Now
                </Link>
                <a href="tel:0229421001" className="glass-dark hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                  Call 022 942 1001
                </a>
              </div>
            </div>
            <div className="hidden md:block w-2/5 relative p-6">
              <div className="w-full h-full rounded-[2rem] overflow-hidden">
                <img src={assetUrl('images/blog/3.jpg')} alt="Supportive Environment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
