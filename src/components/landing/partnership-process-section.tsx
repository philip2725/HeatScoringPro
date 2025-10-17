export const PartnershipProcessSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Bespoke Platform in 3 Transparent Stages
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12 md:space-y-16">
            {/* Step 1 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center">
              <div className="md:text-right md:pr-8">
                <div className="text-sm font-semibold text-primary">STAGE 1 (1-2 WEEKS)</div>
                <h3 className="text-2xl font-bold mt-1">Conception</h3>
                <p className="mt-2 text-muted-foreground">We collaborate with your key members to determine exact requirements and create a detailed implementation plan.</p>
              </div>
              <div className="relative h-full flex items-center justify-center mt-4 md:mt-0">
                <div className="hidden md:block absolute left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
                <div className="md:hidden w-full h-0.5 bg-border my-4"></div>
              </div>
              <div className="hidden md:block"></div>
            </div>
            {/* Step 2 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center">
              <div className="hidden md:block"></div>
              <div className="relative h-full flex items-center justify-center mt-4 md:mt-0">
                <div className="hidden md:block absolute left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
                <div className="md:hidden w-full h-0.5 bg-border my-4"></div>
              </div>
              <div className="md:pl-8">
                <div className="text-sm font-semibold text-primary">STAGE 2 (8-10 WEEKS)</div>
                <h3 className="text-2xl font-bold mt-1">Development</h3>
                <p className="mt-2 text-muted-foreground">We adjust core components, implement custom requirements, and set up your dedicated server and database for live scoring.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center">
              <div className="md:text-right md:pr-8">
                <div className="text-sm font-semibold text-primary">STAGE 3 (1-2 WEEKS)</div>
                <h3 className="text-2xl font-bold mt-1">Deployment</h3>
                <p className="mt-2 text-muted-foreground">We deploy your customized HeatscoringPro version to its dedicated infrastructure, confirm its status with you, and go live.</p>
              </div>
              <div className="relative h-full flex items-center justify-center mt-4 md:mt-0">
                <div className="hidden md:block absolute left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
                <div className="md:hidden w-full h-0.5 bg-border my-4"></div>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};