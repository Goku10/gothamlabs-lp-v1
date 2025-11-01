import { ExternalLink, Satellite, Map, BarChart3, Globe } from 'lucide-react';
import { Button } from '../components/Button';

export function DashboardShowcase() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gotham-950 via-gotham-900 to-gotham-950">
      <div className="max-w-gotham mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Satellite className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Project</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display text-gotham-50 mb-6 leading-tight">
              Interactive Asset Tracking Dashboard
            </h2>

            <p className="text-lg text-gotham-300 mb-8 leading-relaxed">
              Real-time geospatial intelligence platform for monitoring global assets with advanced satellite coverage analysis and interactive visualization.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 group">
                <div className="bg-primary/10 rounded-lg p-2 mt-1 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-gotham-50 font-semibold mb-1">Global Asset Tracking</h4>
                  <p className="text-gotham-400 text-sm">Interactive maps with precise location monitoring and real-time updates across worldwide operations</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-primary/10 rounded-lg p-2 mt-1 group-hover:bg-primary/20 transition-colors">
                  <Satellite className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-gotham-50 font-semibold mb-1">Satellite Coverage Analysis</h4>
                  <p className="text-gotham-400 text-sm">Advanced monitoring and analysis of satellite coverage patterns with predictive insights</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-primary/10 rounded-lg p-2 mt-1 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-gotham-50 font-semibold mb-1">Real-time Statistics & Filtering</h4>
                  <p className="text-gotham-400 text-sm">Dynamic data visualization with powerful filtering and drill-down capabilities</p>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://equinor-global-asset-hwjm.bolt.host', '_blank')}
              className="group"
            >
              <span>Try Dashboard</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gotham-800/50 backdrop-blur-sm rounded-2xl border border-gotham-700/50 p-4 shadow-2xl hover:border-primary/50 transition-all duration-500 group">
                <div className="aspect-video bg-gradient-to-br from-gotham-800 to-gotham-900 rounded-xl overflow-hidden border border-gotham-700">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

                    <div className="relative z-10 text-center p-8">
                      <Map className="w-20 h-20 text-primary/40 mx-auto mb-4 animate-pulse" />
                      <p className="text-gotham-400 text-sm">Dashboard Preview</p>
                      <p className="text-gotham-500 text-xs mt-2">Click "Try Dashboard" to view live demo</p>
                    </div>

                    <div className="absolute top-4 left-4 bg-gotham-950/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gotham-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gotham-300">Live</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-gotham-950/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gotham-700/50">
                      <div className="flex items-center gap-3 text-xs text-gotham-300">
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          <span>245</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Satellite className="w-3 h-3" />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-gotham-500">
                  <span>Equinor Global Assets</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
