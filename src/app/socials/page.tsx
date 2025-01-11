import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Globe, Twitch, Youtube } from "lucide-react";

const BLUR_FADE_DELAY = 0.20;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`my socials`}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              <BlurFade
                delay={BLUR_FADE_DELAY * + 12 * 0.05}
              >
                <ProjectCard
                  href="https://youtube.com/@ytumyLIVE"
                  title="@ytumyLIVE on YouTube"
                  description=""
                  dates="Since 18.01.2024"
                  tags={[
                    "German",
                    "Gaming"
                  ]}
                  image="/yt.jpg"
                  video=""
                  links={[
                    {
                      type: "Visit",
                      href: "https://youtube.com/@ytumyLIVE",
                      icon: <Youtube className="icons" />,
                    },
                  ]}
                />
              </BlurFade>
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 * 0.05}
              >
                <ProjectCard
                  href="https://twitch.tv/ytumyLIVE"
                  title="@ytumyLIVE on Twitch"
                  description=""
                  dates="Since 30.10.2024"
                  tags={[
                    "German",
                    "Gaming",
                    "Livestreams"
                  ]}
                  image="/twitch.jpg"
                  video=""
                  links={[
                    {
                      type: "Visit",
                      href: "https://twitch.tv/ytumyLIVE",
                      icon: <Twitch className="icons" />,
                    },
                  ]}
                />
              </BlurFade>
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 * 0.05}
              >
                <ProjectCard
                  href="https://www.tiktok.com/@ytumylive"
                  title="@ytumyLIVE on TikTok"
                  description=""
                  dates="Since 05.01.2024"
                  tags={[
                    "German",
                    "Gaming"
                  ]}
                  image="/tiktok.jpg"
                  video=""
                  links={[
                    {
                      type: "Visit",
                      href: "https://www.tiktok.com/@ytumylive",
                      icon: <Globe className="icons" />,
                    },
                  ]}
                />
              </BlurFade>
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 * 0.05}
              >
                <ProjectCard
                  href="https://bsky.app/profile/marcelschreiber.de"
                  title="@marcelschreiber.de on BlueSky"
                  description=""
                  dates="Since 11.01.2025"
                  tags={[
                    "Dev",
                    "Thoughts"
                  ]}
                  image="/bsky.jpg"
                  video=""
                  links={[
                    {
                      type: "Visit",
                      href: "https://bsky.app/profile/marcelschreiber.de",
                      icon: <Globe className="icons" />,
                    },
                  ]}
                />
              </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}
