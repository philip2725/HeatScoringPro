import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export const PricingSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Transparent & Fair Pricing Model
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Predictable Costs for a Long-Term Partnership
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>One-Time Setup Fee</CardTitle>
              <CardDescription>Fixed fee for initial consultation, custom development, and deployment.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">€5,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Annual Operations Fee</CardTitle>
              <CardDescription>Covers server maintenance, database integrity, and application updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">A recurring fee to keep your system running flawlessly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pay-Per-Use Revenue</CardTitle>
              <CardDescription>We succeed when you do. Our costs are covered by small usage fees.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Small per-event fee for live data.</li>
                <li>3% per-registration fee (paid by athletes).</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};