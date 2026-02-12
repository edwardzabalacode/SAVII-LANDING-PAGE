import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Privacy");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PrivacidadPage() {
  const t = await getTranslations("Privacy");

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
                {t("s1Intro")}
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  {t("s1Item1")}
                </li>
                <li>
                  {t("s1Item2")}
                </li>
                <li>
                  {t("s1Item3")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s2Title")}
              </h2>
              <p>{t("s2Intro")}</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>{t("s2Item1")}</li>
                <li>
                  {t("s2Item2")}
                </li>
                <li>
                  {t("s2Item3")}
                </li>
                <li>{t("s2Item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s3Title")}
              </h2>
              <p>
                {t("s3Text")}
              </p>
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
                {t("s5Text")}{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  {t("s5Link")}
                </a>{" "}
                {t("s5TextEnd")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-text-primary mt-8 mb-3">
                {t("s6Title")}
              </h2>
              <p>{t("s6Intro")}</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>{t("s6Item1")}</li>
                <li>{t("s6Item2")}</li>
                <li>{t("s6Item3")}</li>
              </ul>
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
                {t("s8Text")}{" "}
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
