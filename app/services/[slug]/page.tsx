import { notFound } from "next/navigation";
import { services } from "@/app/data/services";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export default function ServiceDetail({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative w-full h-56 sm:h-64 md:h-96 lg:h-[35rem]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

        <h1 className="absolute bottom-8 left-1/2 w-11/12 max-w-4xl -translate-x-1/2 text-center text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          {service.title}
        </h1>
      </section>

      {/* ───── Content ───── */}
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-neutral md:prose-lg">
          <ReactMarkdown
            components={{
              ul: ({ children, className, ...rest }) => (
                <ul
                  {...rest}
                  className={
                    "mb-6 list-disc list-inside marker:text-accent " +
                    (className ?? "")
                  }
                >
                  {children}
                </ul>
              ),
              li: ({ children, className, ...rest }) => (
                <li {...rest} className={"my-1 " + (className ?? "")}>
                  {children}
                </li>
              ),
              h3: ({ children, className, ...rest }) => (
                <h3
                  {...rest}
                  className={
                    "mt-12 border-l-4 border-accent pl-4 text-xl font-semibold lg:text-2xl " +
                    (className ?? "")
                  }
                >
                  {children}
                </h3>
              ),
            }}
          >
            {service.content}
          </ReactMarkdown>
        </article>
      </main>
    </>
  );
}
