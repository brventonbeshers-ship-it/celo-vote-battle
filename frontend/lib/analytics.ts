export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  console.debug("[analytics]", name, props);
}

// analytics: 1775827241197

// analytics: 1775870445505

// analytics: 1775919461265

// analytics: 1775965724459

// analytics: 1776045586508
