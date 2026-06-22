/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, Monitor, Heart, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { text: 'Personal Certificado', icon: Check },
    { text: 'Equipamiento Moderno', icon: Monitor },
    { text: 'Atención Humanizada', icon: Heart },
    { text: 'Diagnóstico Preciso', icon: ShieldCheck },
  ];

  return (
    <section className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral rounded-2xl flex items-center justify-center text-primary">
                <item.icon size={20} className="stroke-[2.5]" />
              </div>
              <span className="text-[14px] font-bold text-ink uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
