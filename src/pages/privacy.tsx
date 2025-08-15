export const Privacy = () => {
  return (
    <div className="h-full w-full bg-blue text-zinc-900 antialiased text-white">
    <header className="border-b border-zinc-200">
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy &amp; Transparency</h1>
      <p className="mt-2 text-sm text-zinc-400">Last updated: August 15, 2025</p>
      <p className="mt-4 text-zinc-200">Pokket is an <span className="font-medium">open‑source</span>, <span className="font-medium">ad‑free</span> application. We do not sell personal data. We do not share personal data with third parties except (i) trusted service providers acting on our documented instructions and bound by data processing agreements, or (ii) when required by law.</p>
    </div>
  </header>

  <main className="mx-auto max-w-4xl px-4 py-10">
    <nav aria-label="Table of contents" className="mb-10">
      <ol className="list-decimal pl-5 space-y-2 text-zinc-200">
        <li><a href="#controller" className="underline underline-offset-2 hover:no-underline">Data Controller</a></li>
        <li><a href="#principles" className="underline underline-offset-2 hover:no-underline">Key Principles</a></li>
        <li><a href="#data-we-collect" className="underline underline-offset-2 hover:no-underline">Data We Collect</a></li>
        <li><a href="#purposes" className="underline underline-offset-2 hover:no-underline">Purposes &amp; Legal Bases</a></li>
        <li><a href="#cookies" className="underline underline-offset-2 hover:no-underline">Cookie Policy</a></li>
        <li><a href="#sharing" className="underline underline-offset-2 hover:no-underline">Data Sharing &amp; Processors</a></li>
        <li><a href="#transfers" className="underline underline-offset-2 hover:no-underline">International Transfers</a></li>
        <li><a href="#retention" className="underline underline-offset-2 hover:no-underline">Data Retention</a></li>
        <li><a href="#rights" className="underline underline-offset-2 hover:no-underline">Your Rights (GDPR)</a></li>
        <li><a href="#security" className="underline underline-offset-2 hover:no-underline">Security</a></li>
        <li><a href="#children" className="underline underline-offset-2 hover:no-underline">Children’s Privacy</a></li>
        <li><a href="#oss" className="underline underline-offset-2 hover:no-underline">Open‑Source Commitment</a></li>
        <li><a href="#changes" className="underline underline-offset-2 hover:no-underline">Changes to this Policy</a></li>
        <li><a href="#contact" className="underline underline-offset-2 hover:no-underline">Contact &amp; Supervisory Authority</a></li>
      </ol>
    </nav>

    <section id="controller" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold">1. Data Controller</h2>
      <div className="mt-3 text-zinc-200">
        <p><span className="font-medium">Pokket</span><br/> Country: Austria<br/> Email: <a href="mailto:jhnnsrs@gmail.com" className="underline underline-offset-2">jhnnsrs@gmail.com</a></p>
       
      </div>
    </section>

    <section id="principles" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">2. Key Principles</h2>
      <ul className="mt-3 list-disc pl-6 text-zinc-200 space-y-1">
        <li>No advertising, no behavioural profiling.</li>
        <li>No sale of personal data.</li>
        <li>No sharing with third parties except processors under contract or when legally required.</li>
        <li>Data minimisation and transparency.</li>
        <li>Privacy by design and by default.</li>
      </ul>
    </section>

    <section id="data-we-collect" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold ">3. Data We Collect</h2>
      <div className="mt-3 text-zinc-200 space-y-4">
        <div>
          <h3 className="font-medium">a) Information you provide</h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Email address (if you create an account).</li>
            <li>Account credentials (stored securely; we never store plaintext passwords).</li>
            <li>Support communications and any content you submit.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">b) Information collected automatically</h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Usage data: IP address, app/web pages viewed, timestamps, referrers, app version.</li>
            <li>Device data: device model, OS version, browser type, unique device/browser identifiers.</li>
          </ul>
          <p className="mt-2 text-sm text-zinc-600">We do not intentionally collect special categories of personal data.</p>
        </div>
      </div>
    </section>

    <section id="purposes" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold " >4. Purposes &amp; Legal Bases (GDPR Art. 6)</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full border border-zinc-200 text-sm text-zinc-200">
          <thead className="bg-zinc-50 text-zinc-900">
            <tr>
              <th className="border-b border-zinc-200 px-3 py-2 text-left font-medium">Purpose</th>
              <th className="border-b border-zinc-200 px-3 py-2 text-left font-medium">Data</th>
              <th className="border-b border-zinc-200 px-3 py-2 text-left font-medium">Legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top">
              <td className="border-b border-zinc-200 px-3 py-2">Provide and operate the Service</td>
              <td className="border-b border-zinc-200 px-3 py-2">Account details, usage & device data</td>
              <td className="border-b border-zinc-200 px-3 py-2">Contract (Art. 6(1)(b))</td>
            </tr>
            <tr className="align-top">
              <td className="border-b border-zinc-200 px-3 py-2">Improve stability, performance, and security</td>
              <td className="border-b border-zinc-200 px-3 py-2">Usage & device data, logs</td>
              <td className="border-b border-zinc-200 px-3 py-2">Legitimate interests (Art. 6(1)(f))</td>
            </tr>
            <tr className="align-top">
              <td className="border-b border-zinc-200 px-3 py-2">Communications you request (support, updates)</td>
              <td className="border-b border-zinc-200 px-3 py-2">Email, message content</td>
              <td className="border-b border-zinc-200 px-3 py-2">Legitimate interests or consent (Art. 6(1)(f)/(a))</td>
            </tr>
            <tr className="align-top">
              <td className="border-b border-zinc-200 px-3 py-2">Compliance with laws</td>
              <td className="border-b border-zinc-200 px-3 py-2">Relevant account/usage data</td>
              <td className="border-b border-zinc-200 px-3 py-2">Legal obligation (Art. 6(1)(c))</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="cookies" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">5. Cookie Policy</h2>
      <p className="mt-3 text-zinc-200">We use cookies and similar technologies to ensure core functionality and, where consented, to understand usage. Strictly necessary cookies are set without consent; all others require opt‑in.</p>
      <div className="mt-4">
        <h3 className="font-medium">Types of cookies</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-zinc-200">
          <li><span className="font-medium">Strictly necessary:</span> authentication, security, load balancing.</li>
          <li><span className="font-medium">Performance/analytics (optional):</span> aggregated usage metrics to improve the Service.</li>
          <li><span className="font-medium">Functionality (optional):</span> remember preferences such as language.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">Legal basis</h3>
        <p className="mt-2 text-zinc-200">Strictly necessary cookies: legitimate interests. Optional cookies: your consent, which you can withdraw at any time via settings.</p>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">Managing cookies</h3>
        <p className="mt-2 text-zinc-200">You can manage preferences in the app and through your browser settings. Blocking some cookies may impact functionality.</p>
      </div>
    </section>

    <section id="sharing" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">6. Data Sharing &amp; Processors</h2>
      <p className="mt-3 text-zinc-200">We do not sell personal data. We do not share personal data with third parties for their independent marketing. We disclose data only to:</p>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-zinc-200">
        <li><span className="font-medium">Service providers (processors):</span> hosting, storage, email delivery, analytics strictly on our behalf and under data processing agreements.</li>
        <li><span className="font-medium">Authorities:</span> when required by law or to protect rights and safety.</li>
        <li><span className="font-medium">Business transfers:</span> in case of merger, acquisition, or asset sale, with notice provided.</li>
      </ul>

      <details className="mt-4 rounded border border-zinc-200 p-4 text-white">
        <summary className="cursor-pointer font-medium">Service providers we use</summary>
        <div className="mt-3 text-sm text-zinc-200 space-y-2">
          <p><span className="font-medium">Hosting/Infrastructure:</span> Hetzner.</p>
        </div>
      </details>
    </section>

    <section id="transfers" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">7. International Transfers</h2>
      <p className="mt-3 text-zinc-200">We aim to store and process personal data within the EU/EEA. If we transfer data to countries without an adequacy decision, we implement appropriate safeguards, such as EU Standard Contractual Clauses, and additional technical and organisational measures where needed.</p>
    </section>
    <section id="retention" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">8. Data Retention</h2>
      <ul className="mt-3 list-disc pl-6 text-zinc-200 space-y-1">
        <li><span className="font-medium">Account data:</span> retained while your account is active; deleted upon request or account closure unless legal obligations require longer retention.</li>
        <li><span className="font-medium">Support communications:</span> up to 24 months.</li>
        <li><span className="font-medium">Usage logs:</span> up to 12 months for security and diagnostics.</li>
        <li><span className="font-medium">Backups:</span> rolling backups retained for up to 30 days.</li>
      </ul>
    </section>
    <section id="rights" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">9. Your Rights (GDPR)</h2>
      <p className="mt-3 text-zinc-200">You have the right to access, rectify, erase, restrict, or object to processing of your personal data and to data portability. Where processing relies on consent, you may withdraw it at any time without affecting prior processing. You also have the right to lodge a complaint with a supervisory authority (see below).</p>
      <p className="mt-3 text-zinc-200">To exercise your rights, contact us at <a href="mailto:jhnnsrs@gmail.com" className="underline underline-offset-2">jhnnsrs@gmail.com</a>. We will respond within the timelines required by law.</p>
    </section>
    <section id="security" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">10. Security</h2>
      <ul className="mt-3 list-disc pl-6 text-zinc-200 space-y-1">
        <li>Encryption in transit (TLS) and at rest where applicable.</li>
        <li>Secure password hashing and access controls.</li>
        <li>Principle of least privilege and regular reviews.</li>
      </ul>
      <p className="mt-3 text-sm text-zinc-600">No system can be guaranteed 100% secure, but we take reasonable and appropriate measures to protect your data.</p>
    </section>
    <section id="children" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">11. Children’s Privacy</h2>
      <p className="mt-3 text-zinc-200">Our Service is not directed to children. In Austria, if consent is the legal basis for processing in relation to information society services offered directly to a child, consent is valid only if the child is at least <span className="font-medium">14</span> years old or consent is authorised by a holder of parental responsibility. If we learn that we processed children’s data without proper authorisation, we will take steps to delete it.</p>
    </section>

    <section id="oss" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">12. Open‑Source Commitment</h2>
      <p className="mt-3 text-zinc-200">Pokket’s source code is publicly available for audit and community contribution. This transparency helps verify how personal data is handled.</p>
      <p className="mt-2 text-zinc-700">Repository: <span className="italic">https://github.com/arkitektio/pokket</span></p>
    </section>

    <section id="changes" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">13. Changes to this Policy</h2>
      <p className="mt-3 text-zinc-200">We may update this page to reflect changes in our practices or legal requirements. We will provide notice of material changes via in‑app notice or email where appropriate and update the “Last updated” date above.</p>
    </section>

    <section id="contact" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold">14. Contact &amp; Supervisory Authority</h2>
      <div className="mt-3 text-zinc-200 space-y-3">
        <div>
          <h3 className="font-medium">Contact Pokket</h3>
          <p>Email: <a href="mailto:jhnnsrs@gmail.com" className="underline underline-offset-2">jhnnsrs@gmail.com</a></p>
        </div>
      </div>
    </section>

    <hr className="my-12 border-zinc-200" />

    <section aria-label="Footer note" className="text-sm text-zinc-500">
      <p>This document is intended to accurately describe how Pokket handles personal data. It is effective only insofar as it reflects actual practices and is kept up to date.</p>
    </section>
  </main>

  <footer className="mt-8 border-t border-zinc-200">
    <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-zinc-600">
      <p>&copy; <span id="year"></span> Pokket. All rights reserved.</p>
    </div>
  </footer>
  </div>
    
);
}

export default Privacy