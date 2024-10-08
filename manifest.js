export const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'testing-pwa-ode',
    short_name: 'testing-pwa-ode',
    start_url:
      'The URL thhttps://ode10xers.github.io/testing-pwa/at should be loaded when your application is opened',
    display: 'standalone',
    description: 'A description for your application',
    lang: 'en',
    dir: 'auto',
    theme_color: '#000000',
    background_color: '#000000',
    orientation: 'portrait',
    id: 'testing-pwa-ode-123',
    icons: [
      {
        src: 'https://www.pwabuilder.com/assets/icons/icon_512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://www.pwabuilder.com/assets/icons/icon_192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: 'https://www.pwabuilder.com/assets/screenshots/screen1.png',
        sizes: '2880x1800',
        type: 'image/png',
        description: 'A screenshot of the home page',
      },
    ],
    related_applications: [
      {
        platform: 'windows',
        url: 'https://ode10xers.github.io/testing-pwa/',
      },
    ],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'The name you would like to be displayed for your shortcut',
        url: 'The url you would like to open when the user chooses this shortcut. This must be a URL local to your PWA. For example: If my start_url is /, this URL must be something like /shortcut',
        description: 'A description of the functionality of this shortcut',
      },
    ],
    scope: 'https://ode10xers.github.io/testing-pwa/',
  },
};
