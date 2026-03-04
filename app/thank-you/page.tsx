export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="text-6xl mb-6">🎉</div>
        
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to the Local Newsletter Playbook!
        </h1>
        
        <p className="text-xl text-slate-300 mb-8">
          Your order is confirmed. Check your email for access instructions.
        </p>
        
        <div className="bg-slate-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <span className="text-yellow-400 text-2xl">1️⃣</span>
              <div>
                <h3 className="text-white font-semibold mb-1">Check Your Email</h3>
                <p className="text-slate-300">Login details and course access link sent to your inbox</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-yellow-400 text-2xl">2️⃣</span>
              <div>
                <h3 className="text-white font-semibold mb-1">Access Your Training</h3>
                <p className="text-slate-300">All 6 modules + bonuses available immediately</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-yellow-400 text-2xl">3️⃣</span>
              <div>
                <h3 className="text-white font-semibold mb-1">Start Building</h3>
                <p className="text-slate-300">Follow the system and launch your newsletter in 30 days</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm">
          Questions? Email: support@nicelysupport.com
        </p>
      </div>
    </main>
  );
}
