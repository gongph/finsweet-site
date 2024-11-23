import Header from "@/components/Header";
import Footer from "@/components/Footer";
import postUrl from "@/assets/blog/post.png";
import avatorUrl from "@/assets/blog/avator.png";
export default function Post() {
  return (
    <>
      <Header />
      <section className="container-fluid mx-auto px-4 md:px-0 py-10 md:py-20 flex flex-col items-center">
        {/* cover img */}
        <div className="w-full h-56 md:h-96 overflow-hidden rounded-2xl">
          <img src={postUrl} className="object-cover w-full h-full" />
        </div>
        {/* author info */}
        <div className="px-4 md:px-0 mt-6 md:mt-16 md:max-w-3xl">
          <div className="flex items-center gap-x-2 text-subTitleColor dark:text-slate-500 text-xs mb-6">
            <img src={avatorUrl} className="shrink-0 size-8 cursor-pointer" />
            <span className="cursor-pointer hover:underline">
              Andrew Jonson
            </span>
            <span className="pl-4">Posted on 27th January 2021</span>
          </div>
          <div className="space-y-6 text-subTitleColor dark:text-slate-500">
            <h1 className="text-3xl md:text-5xl font-medium text-[#1D3444] dark:text-slate-400">
              Breaking the code How did we build our Figma plugin
            </h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-titleColor dark:text-slate-400">
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h2>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
