import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-mnit-navy via-mnit-blue to-mnit-navy text-white py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NCC MNIT Jaipur</h3>
            <p className="text-sm text-gray-300">
              National Cadet Corps<br />
              Malaviya National Institute of Technology<br />
              Jaipur, Rajasthan - 302017
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/activities" className="hover:text-white">Activities</a></li>
              <li><a href="/downloads" className="hover:text-white">Downloads</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Dr. Anup Malik : +91 954 965 0950 || +91 987 738 8924 </span>
                </div>
              
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>Himanshu Sharma : <a href="mailto:2025pis5213@mnit.ac.in" className="hover:text-white transition-colors">2025pis5213@mnit.ac.in</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Bhavdeep : 9050470760</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>office.ncc@mnit.ac.in</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <a
                    href="https://maps.app.goo.gl/Z2kWPE4uKpK9cPKQ8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline decoration-dotted"
                  >
                    Open in Google Maps
                  </a>
                </div>
            </div>
          </div>

          {/* Map embed.
              To use a custom map: open Google Maps → search the location → Share → Embed a map → copy the iframe `src` URL → paste it below. */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg aspect-[4/3] md:aspect-auto md:h-56">
              <iframe
                title="NCC MNIT Jaipur Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.454395747898!2d75.815966506375!3d26.863150999659045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67078bb7293%3A0xe95258163514938a!2sVR78%2B6CG%2C%20Unnamed%20Road%2C%20Jhalana%20Gram%2C%20Malviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017%2C%20India!5e0!3m2!1sen!2sus!4v1778409734382!5m2!1sen!2sus"                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NCC MNIT Jaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


