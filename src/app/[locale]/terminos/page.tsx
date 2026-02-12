import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Terms");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function TerminosPage() {
  const t = await getTranslations("Terms");

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <Container className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            {t("title")}
          </h1>
          <p className="text-text-muted text-sm mb-10">
            {t("lastUpdated")}
          </p>

          <div className="prose prose-gray max-w-none space-y-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s1Title")}
              </h2>
              <p>
                {t("s1Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s2Title")}
              </h2>
              <p>
                {t("s2Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s3Title")}
              </h2>
              <p>{t("s3Intro")}</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>{t("s3Item1")}</li>
                <li>
                  {t("s3Item2")}
                </li>
                <li>
                  {t("s3Item3")}
                </li>
                <li>
                  {t("s3Item4")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s4Title")}
              </h2>
              <p>
                {t("s4Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s5Title")}
              </h2>
              <p>
                {t("s5Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s6Title")}
              </h2>
              <p>
                {t("s6Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s7Title")}
              </h2>
              <p>
                {t("s7Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s8Title")}
              </h2>
              <p>
                {t("s8Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s9Title")}
              </h2>
              <p>
                {t("s9Text")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s10Title")}
              </h2>
              <p>
                {t("s10Text")}{" "}
                <a
                  href="mailto:thecode12ai@gmail.com"
                  className="text-primary-600 hover:underline"
                >
                  thecode12ai@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
