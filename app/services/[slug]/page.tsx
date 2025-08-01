import { notFound } from "next/navigation";
import { services } from "@/app/data/services";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import BackButton from "@/app/components/BackButton"; 

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type Params = { slug: string };

export default async function ServiceDetail({
  params,
}: {
  params: Params;
}) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);
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

        <h1 className="absolute bottom-8 left-1/2 w-11/12 max-w-4xl -translate-x-1/2 text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          {service.title}
        </h1>
      </section>

      

      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-neutral md:prose-lg">
          <ReactMarkdown
            components={{
              ul: ({ children, className, ...rest }) => (
                <ul
                  {...rest}
                  className={
                    "mb-6 list-disc list-inside marker:text-primary " +
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
                    "mt-12 border-l-4 border-primary pl-4 text-xl font-semibold lg:text-2xl " +
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
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <BackButton />
      </div>

        </article>
      </main>
    </>
  );
}
