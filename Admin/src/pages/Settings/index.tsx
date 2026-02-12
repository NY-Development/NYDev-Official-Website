import React, { useEffect, useState } from 'react';
import { getSettings, updateSettings } from '../../services/settings.service';
import type { Settings } from '../../types/settings';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    getSettings().then(setSettings);
  }, []);

  if (!settings) {
    return <div className="text-slate-400">Loading settings...</div>;
  }

  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <section className="flex-1 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">System Configuration</h2>
            <p className="text-sm text-slate-500 mt-1">Manage global environment variables and core infrastructure.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/5 text-sm font-semibold">Reset</button>
            <button
              onClick={() => updateSettings(settings)}
              className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20"
            >
              Save Changes
            </button>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-icons">settings</span>
            <h3 className="font-bold text-lg">General Config</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Site Name</label>
              <input
                className="w-full bg-slate-900/60 border border-primary/10 rounded-lg px-4 py-2.5"
                value={settings.siteName}
                onChange={(event) => setSettings({ ...settings, siteName: event.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Admin Support Email</label>
              <input
                className="w-full bg-slate-900/60 border border-primary/10 rounded-lg px-4 py-2.5"
                value={settings.supportEmail}
                onChange={(event) => setSettings({ ...settings, supportEmail: event.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Environment</label>
              <select
                className="w-full bg-slate-900/60 border border-primary/10 rounded-lg px-4 py-2.5"
                value={settings.environment}
                onChange={(event) => setSettings({ ...settings, environment: event.target.value as Settings['environment'] })}
              >
                <option value="production">Production</option>
                <option value="staging">Staging</option>
                <option value="development">Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Timezone</label>
              <input
                className="w-full bg-slate-900/60 border border-primary/10 rounded-lg px-4 py-2.5"
                value={settings.timezone}
                onChange={(event) => setSettings({ ...settings, timezone: event.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-icons">key</span>
            <h3 className="font-bold text-lg">Security & API Keys</h3>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Stripe Secret Key</label>
              <input
                className="w-full bg-slate-900/60 border border-primary/10 rounded-lg px-4 py-2.5 font-mono"
                value={settings.apiKeys.stripeSecretKey}
                onChange={(event) =>
                  setSettings({
                    ...settings,
                    apiKeys: { ...settings.apiKeys, stripeSecretKey: event.target.value },
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">AWS Access Key</label>
              <input
                className="w-full bg-slate-900/60 border border-primary/10 rounded-lg px-4 py-2.5 font-mono"
                value={settings.apiKeys.awsAccessKey}
                onChange={(event) =>
                  setSettings({
                    ...settings,
                    apiKeys: { ...settings.apiKeys, awsAccessKey: event.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-icons">toggle_on</span>
            <h3 className="font-bold text-lg">System Features</h3>
          </div>
          <div className="space-y-4">
            {([
              { key: 'maintenanceMode', label: 'Maintenance Mode', description: 'Show maintenance page to all non-admin users.' },
              { key: 'debugLogging', label: 'Debug Logging', description: 'Enable verbose logging for system diagnostics.' },
            ] as const).map((item) => (
              <div key={item.key} className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5">
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.features[item.key]}
                  onChange={(event) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, [item.key]: event.target.checked },
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden xl:flex flex-col flex-1 glass-panel rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Documentation Hub</h2>
          <p className="text-sm text-slate-500 mt-1">Search backend specs and admin guides.</p>
          <div className="mt-6 relative">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full bg-slate-900/60 border border-primary/10 rounded-xl pl-12 pr-4 py-3 text-sm" placeholder="Search API endpoints..." type="text" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Onboarding Guide', icon: 'rocket_launch' },
              { title: 'Deployment Flow', icon: 'auto_awesome' },
            ].map((doc) => (
              <div key={doc.title} className="p-4 bg-slate-900/50 border border-primary/10 rounded-xl hover:border-primary transition-all">
                <span className="material-icons text-primary mb-2">{doc.icon}</span>
                <h4 className="font-bold text-sm">{doc.title}</h4>
                <p className="text-xs text-slate-500 mt-1">System architect walkthrough.</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              { method: 'GET', path: '/v1/system/health' },
              { method: 'POST', path: '/v1/auth/refresh-keys' },
              { method: 'PATCH', path: '/v1/config/global' },
            ].map((api) => (
              <div key={api.path} className="p-4 bg-slate-900/50 rounded-lg border border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-500 px-2 py-0.5 rounded">{api.method}</span>
                  <span className="text-sm font-mono">{api.path}</span>
                </div>
                <span className="material-icons text-slate-400">chevron_right</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
