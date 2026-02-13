"use client";

import { Crown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/ui/FeatureList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { plans } from "@/data/plans";

export function PremiumPlansSection() {
  return (
    <section id="planes" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] rounded-full bg-primary-100/35 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-200/20 blur-[100px]" />
        <div className="absolute top-1/2 -left-20 w-[350px] h-[350px] rounded-full bg-tint/8 blur-[80px]" />
      </div>

      <Container>
        <AnimatedSection>
          <SectionTitle
            badge="Planes"
            title="Elige tu plan"
            subtitle="Empieza gratis y desbloquea todo el potencial de Savii cuando lo necesites."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.1}>
              <Card
                highlighted={plan.highlighted}
                className="flex flex-col h-full"
              >
                {/* Header */}
                <div className="mb-6">
                  {plan.badge && (
                    <Badge className="mb-3">
                      <Crown className="h-3 w-3" />
                      {plan.badge}
                    </Badge>
                  )}
                  <h3 className="font-display font-bold text-2xl text-text-primary">
                    {plan.name}
                  </h3>
                  {plan.price ? (
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-display font-bold text-4xl text-primary-500">
                        {plan.price}
                      </span>
                      <span className="text-text-muted">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <span className="font-display font-bold text-4xl text-text-primary">
                        Gratis
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <FeatureList features={plan.features} className="mb-8 flex-1" />

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                  href="https://play.google.com/store/apps/details?id=com.saviiapp.savii&hl=es_CO"
                >
                  {plan.cta}
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
