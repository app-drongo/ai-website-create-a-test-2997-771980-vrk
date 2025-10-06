'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "title", "text-2": "description", "text-3": "billingToggleMonthly", "text-4": "billingToggleAnnual", "text-5": "billingToggleSave", "text-6": "starterName", "text-7": "starterDescription", "text-8": "starterPrice", "text-9": "starterCTA", "text-10": "professionalName", "text-11": "professionalDescription", "text-12": "professionalPrice", "text-13": "professionalPeriod", "text-14": "professionalBadge", "text-15": "professionalCTA", "text-16": "enterpriseName", "text-17": "enterpriseDescription", "text-18": "enterprisePrice", "text-19": "enterpriseBadge", "text-20": "enterpriseCTA", "text-21": "bottomTitle", "text-22": "bottomDescription", "text-23": "bottomCTA" }
 */

export default function Pricing({
  badge = 'Flexible Plans',
  title = 'Scale Your Business with CloudFlow',
  description = 'Choose the perfect plan to accelerate your digital transformation. All plans include our core automation features with 99.9% uptime guarantee.',
  billingToggleMonthly = 'Monthly',
  billingToggleAnnual = 'Annual',
  billingToggleSave = 'Save 25%',
  starterName = 'Startup',
  starterDescription = 'Perfect for early-stage companies and MVPs',
  starterPrice = '$49',
  starterCTA = 'Start Building',
  professionalName = 'Growth',
  professionalDescription = 'Ideal for scaling businesses and growing teams',
  professionalPrice = '$149',
  professionalPeriod = '/month',
  professionalBadge = 'Most Popular',
  professionalCTA = 'Accelerate Growth',
  enterpriseName = 'Enterprise',
  enterpriseDescription = 'Custom solutions for large-scale operations',
  enterprisePrice = 'Custom',
  enterpriseBadge = 'White Glove',
  enterpriseCTA = 'Book Strategy Call',
  bottomTitle = 'Ready for enterprise-grade automation?',
  bottomDescription = 'Our platform powers mission-critical workflows for Fortune 500 companies. Get dedicated support, custom integrations, and enterprise SLAs.',
  bottomCTA = 'Explore Enterprise Solutions',
}) {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/');
  };
  const handleProfessionalAction = () => {
    router.push('/');
  };
  const handleEnterpriseAction = () => {
    router.push('/');
  };
  const handleBottomAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: starterName,
      description: starterDescription,
      price: starterPrice,
      period: '/month',
      badge: null,
      features: [
        'Up to 5 automation workflows',
        'Real-time data sync',
        'Standard integrations',
        'Email support',
        '10GB cloud storage',
        'Basic analytics dashboard',
      ],
      cta: starterCTA,
      popular: false,
      action: handleStarterAction,
    },
    {
      name: professionalName,
      description: professionalDescription,
      price: professionalPrice,
      period: professionalPeriod,
      badge: professionalBadge,
      features: [
        'Unlimited automation workflows',
        'Advanced API integrations',
        'Priority support & onboarding',
        '100GB cloud storage',
        'Advanced analytics & reporting',
        'Custom domain & branding',
        'Team collaboration tools',
        'Webhook & REST API access',
      ],
      cta: professionalCTA,
      popular: true,
      action: handleProfessionalAction,
    },
    {
      name: enterpriseName,
      description: enterpriseDescription,
      price: enterprisePrice,
      period: '',
      badge: enterpriseBadge,
      features: [
        'Everything in Growth plan',
        'Unlimited cloud storage',
        '24/7 dedicated support',
        'Custom integrations & APIs',
        'Enterprise security & compliance',
        '99.99% SLA guarantee',
        'Dedicated customer success manager',
        'Custom training & workshops',
      ],
      cta: enterpriseCTA,
      popular: false,
      action: handleEnterpriseAction,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2" data-editable-id="text-0">
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-editable-id="text-1">
            {title.split(' ').slice(0, -1).join(' ')}
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {title.split(' ').slice(-1)}
            </span>
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            data-editable-id="text-2"
          >
            {description}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm"
              data-editable-id="text-3"
            >
              {billingToggleMonthly}
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-editable-id="text-4"
            >
              {billingToggleAnnual}
              <Badge variant="secondary" className="ml-2 text-xs" data-editable-id="text-5">
                {billingToggleSave}
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    <span data-editable-id="text-14">{plan.badge}</span>
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit"
                    data-editable-id="text-19"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle
                  className="text-2xl mb-2"
                  data-editable-id={`text-${index === 0 ? '6' : index === 1 ? '10' : '16'}`}
                >
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className="text-base mb-6"
                  data-editable-id={`text-${index === 0 ? '7' : index === 1 ? '11' : '17'}`}
                >
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span
                    className="text-4xl font-bold"
                    data-editable-id={`text-${index === 0 ? '8' : index === 1 ? '12' : '18'}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1" data-editable-id="text-13">
                      {plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                  data-editable-id={`text-${index === 0 ? '9' : index === 1 ? '15' : '20'}`}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === professionalName && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4" data-editable-id="text-21">
            {bottomTitle}
          </h3>
          <p className="text-muted-foreground mb-6" data-editable-id="text-22">
            {bottomDescription}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleBottomAction}
            data-editable-id="text-23"
          >
            {bottomCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}
