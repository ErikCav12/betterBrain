"use client";

import { useState } from "react";

export function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface border border-border rounded-2xl p-8 w-full max-w-lg mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-muted">We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-2">Get Started</h3>
            <p className="text-muted mb-6">
              Tell us about your needs and we&apos;ll get back to you within 24 hours.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Work email"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your use case"
                  rows={3}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-white py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Request a Consultation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
