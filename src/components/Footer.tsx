import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-slate-950">CodeCulture</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional websites for your business within few clicks. Simple,
              fast, and effective.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-950 uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-slate-950 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-slate-950 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-slate-950 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-950 uppercase tracking-wide">
              Support
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-slate-950 transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-slate-950 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-slate-950 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 CodeCulture. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-slate-950"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
