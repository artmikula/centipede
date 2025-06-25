import React from "react";
import "./CentipedeEnhanced.css";
import CarouselComponent from "./CarouselComponent";
import logo from './background-logo.png';
import BitcoinCycleCharts from "./BitcoinCycleCharts";

const CentipedeEnhanced = () => {

  const btcCycleData = [
  { date: '2023-01', piCycle: 0, mrvrZScore: 1.2, puellMultiple: 0.8, exchangeInflows: 100 },
  { date: '2023-02', piCycle: 0, mrvrZScore: 1.5, puellMultiple: 1.0, exchangeInflows: 120 },
  { date: '2023-03', piCycle: 0, mrvrZScore: 2.0, puellMultiple: 1.2, exchangeInflows: 150 },
  { date: '2023-04', piCycle: 1, mrvrZScore: 3.5, puellMultiple: 1.8, exchangeInflows: 300 },
  { date: '2023-05', piCycle: 0, mrvrZScore: 3.8, puellMultiple: 2.0, exchangeInflows: 280 },
  { date: '2023-06', piCycle: 0, mrvrZScore: 4.0, puellMultiple: 2.5, exchangeInflows: 260 },
  { date: '2023-07', piCycle: 0, mrvrZScore: 3.9, puellMultiple: 2.3, exchangeInflows: 240 },
  { date: '2023-08', piCycle: 0, mrvrZScore: 3.7, puellMultiple: 2.1, exchangeInflows: 220 },
  { date: '2023-09', piCycle: 1, mrvrZScore: 3.6, puellMultiple: 1.9, exchangeInflows: 210 },
  { date: '2023-10', piCycle: 0, mrvrZScore: 3.2, puellMultiple: 1.5, exchangeInflows: 190 },
  { date: '2023-11', piCycle: 0, mrvrZScore: 2.8, puellMultiple: 1.2, exchangeInflows: 170 },
  { date: '2023-12', piCycle: 0, mrvrZScore: 2.5, puellMultiple: 1.0, exchangeInflows: 150 }
];

  const features = [
    {
      title: "Quantum Behavioral Tracking",
      icon: "🧠",
      description:
        "Centipede’s patented Quantum Behavioral Tracking reads your thoughts, anticipates your needs, and reports your actions before you even make them. Why let your next move be private?",
    },
    {
      title: "Heartbeat-to-Blockchain™ Technology",
      icon: "❤️‍🔥",
      description:
        "Centipede connects your biometric data directly to the blockchain. Every heartbeat, every glance, every sigh—it’s all recorded for posterity. Know yourself in a way no one ever should.",
    },
    {
      title: "Track and Trace!",
      icon: "👣",
      description:
        "Centipede leverages the power of blockchain to keep an unchangeable, public record of everything you do, everywhere you go, and every person you meet.",
    },
    {
      title: "Behavioral Monitoring",
      icon: "👁️",
      description:
        "We monitor all behaviors and actions to ensure complete conformity. Get real-time alerts if you, or anyone you know, deviates from the approved behavior.",
    },
  ];

  const extremeFeatures = [
    {
      title: "100% Visibility, 0% Privacy",
      description:
        "Why should privacy exist when transparency is so much easier? With Centipede, we track and record all activities on an open, immutable blockchain.",
    },
    {
      title: "Real-Time Behavior Scores",
      description:
        "Want to know how compliant you are? Check your behavior score anytime! Compare with friends and compete for the title of Most Monitored.",
    },
    {
      title: "Behavioral Intervention Alerts",
      description:
        "Centipede will notify your contacts and local authorities if your behavior score dips below our minimum standards of compliance. We’re here to keep you (and everyone around you) safe from…well, you.",
    },
    {
      title: "Peer Surveillance Encouragement",
      description:
        "Who knows you best? Your peers! Earn rewards for reporting deviations in others' behavior, and get alerted if anyone dares to monitor you back.",
    },
    {
      title: "Facial Recognition Tagging on Blockchain",
      description:
        "Every time you’re spotted, our facial recognition system verifies and logs your location and mood on the blockchain. Our cutting-edge AI can even detect suspicious facial expressions like ‘independence’ or ‘curiosity.’",
    },
  ];

  const premiumFeatures = [
    {
      title: "Real-Time Judgement",
      description:
        "Receive immediate feedback on every decision you make. From what you eat to how you walk, Centipede’s AI coaches you on how to stay within ‘acceptable’ boundaries.",
    },
    {
      title: "Guilt-Free Mode",
      description:
        "Activate Guilt-Free Mode for a constant sense of reassurance. Our soothing notifications remind you that there’s no need to worry about privacy because we’ve taken care of everything for you.",
    },
    {
      title: "Compliance-Based Health Alerts",
      description:
        "Centipede monitors stress levels and can remotely adjust your environment to ensure compliance—whether you need a brightness adjustment, a forced break, or a friendly call from Centipede Customer Control to ‘motivate’ you.",
    },
  ];

  const testimonials = [
    "Since joining Centipede, I feel like I’ve truly lost all freedom. It’s great to not worry about privacy anymore! – Anonymous User",
    "My behavior score improved after 24/7 tracking. Thanks, Centipede! – Another Anonymous User",
    "Centipede has saved me from making decisions every day. Now, I know exactly how compliant I am at all times. – A Willing Participant",
    "It’s comforting to know that every action I take is public record. I have no room for mistakes! – Eagerly Watched User",
    "I used to worry about privacy. Now, I just focus on not getting flagged by Centipede. – Another Thrilled User",
  ];

  return (
    <div className="centipede-enhanced">
      {/* Top Navigation Bar */}
      <header>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={logo} alt="Logo" style={{ maxHeight: "300px" }} />
        </div>
          <BitcoinCycleCharts data={btcCycleData} />        
        <div className="hero-section">
          <h1>$CENTI Centipede Chain</h1>
          <h2><a href="https://tinyurl.com/centicenti">BUY NOW</a></h2>
          <h4>CA: 7rXxRTeHxP1zQaCmUn6LWWqXVDp9Po5Denpnfzb35nmJ</h4>
          <h2>The Future of Full Surveillance</h2>
          <p className="tagline">
            "Where privacy is a thing of the past, and everyone is 100% accountable."
          </p>
          <p className="links">
          {/* Website: <a href="https://centipede-crypto.com">centipede-crypto.com</a> |  */}
          X: <a href="https://x.com/watchcentipede">@watchcentipede</a> | 
          Telegram: <a href="https://t.me/+5lO5pXuXsm5lNWIx">Join Our Channel</a> | 
          Contact: <a href="mailto:centipedechain@gmail.com">centipedechain@gmail.com</a>
        </p>        </div>
      </header>

      {/* Features Section */}
      <section className="icon-section">
        <h2>How It Works: Invasive Technology at Your Fingertips</h2>
        <div className="icon-card-container">
          {features.map((feature, index) => (
            <div className="icon-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extreme Features Section */}
      <section className="detailed-section">
        <h2>Extreme Features: Because Privacy Is Overrated</h2>
        <div className="detailed-card-container">
          {extremeFeatures.map((feature, index) => (
            <div className="detailed-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="premium-section">
        <h2>Premium Features for the Truly Compliant</h2>
        <div className="premium-card-container">
          {premiumFeatures.map((feature, index) => (
            <div className="premium-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Are Saying</h2>
        <div className="testimonial-container">
          {testimonials.map((quote, index) => (
            <div className="testimonial" key={index}>
              <p>"{quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <CarouselComponent />
      <footer className="footer">
        <p>Centipede – Bringing Transparency to the Extreme. Proudly powered by blockchain.</p>
        <p className="legal-disclaimer">
          By joining Centipede, you waive all rights to personal space, freedom, and autonomy.
          Centipede is not responsible for the loss of independent thought. Remember: you’re never alone… because we’re always here.
        </p>
      </footer>
    </div>
  );
};

export default CentipedeEnhanced;
