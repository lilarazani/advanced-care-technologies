import hapticGlove from "@/assets/haptic-glove.jpg";

const HowItWorksSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff9f3' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-16">
            How it works
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left content */}
            <div className="lg:w-1/2 space-y-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-primary">
                    Embedded force sensors within gloves of silicone, collecting 
                    pressure informations
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-primary">
                    Softpower adjusting the haptic feedback signals in real-time 
                    based on the context of use or the user's sensory profile
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-primary">
                    A stimulation bracelet attached to the arm and featuring 
                    haptic stimulation devices
                  </p>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={hapticGlove} 
                  alt="Haptic glove with sensors"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;