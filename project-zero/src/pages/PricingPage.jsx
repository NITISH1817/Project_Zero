export default function PricingPage() {
  const tiers = [
    { name: "Free", price: "$0", features: ["Basic discovery", "3 problem submissions/mo", "Limited AI analyses", "Basic dashboard"], button: "Get Started" },
    { name: "Pro", price: "$29", features: ["Advanced AI analysis", "Unlimited saves & submissions", "Opportunity reports", "Advanced analytics"], button: "Upgrade to Pro", highlight: true },
    { name: "Team", price: "$99", features: ["Shared workspace", "Multiple users", "Private problems", "Team analytics", "Admin controls"], button: "Start Team Trial" },
    { name: "Institution", price: "Custom", features: ["Private innovation ecosystem", "Department management", "Custom limits", "API access"], button: "Contact Sales" }
  ];

  return (
    <div className="container mx-auto px-6 py-20 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h1>
        <p className="text-text-muted text-lg">Scale your innovation intelligence as your needs grow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, i) => (
          <div key={i} className={`glass-panel p-8 rounded-3xl flex flex-col ${tier.highlight ? 'border-accent-blue shadow-[0_0_30px_rgba(79,140,255,0.15)]' : 'border-white/5'}`}>
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <div className="text-4xl font-extrabold mb-6">{tier.price}<span className="text-sm font-normal text-text-muted">{tier.price !== 'Custom' && '/mo'}</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-text-muted">
                  <svg className="w-5 h-5 text-accent-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feat}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${tier.highlight ? 'bg-accent-blue text-white hover:bg-accent-blue/80' : 'bg-surface-elevated text-white hover:bg-white/10 border border-white/5'}`}>
              {tier.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
