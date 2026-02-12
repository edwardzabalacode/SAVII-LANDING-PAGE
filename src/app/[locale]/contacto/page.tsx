import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Contact");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactoPage() {
  const t = await getTranslations("Contact");

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <Container className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            {t("title")}
          </h1>
          <p className="text-text-muted text-sm mb-10">
            {t("subtitle")}
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-text-primary mb-1">
                  {t("emailTitle")}
                </h2>
                <p className="text-text-secondary mb-3">
                  {t("emailDescription")}
                </p>
                <a
                  href="mailto:thecode12ai@gmail.com"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
                >
                  thecode12ai@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h2 className="font-display font-bold text-lg text-text-primary mb-3">
                {t("topicsTitle")}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>{t("topic1")}</li>
                <li>{t("topic2")}</li>
                <li>{t("topic3")}</li>
                <li>{t("topic4")}</li>
                <li>{t("topic5")}</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
